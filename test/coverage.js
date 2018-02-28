/**
 * @author ebidel@ (Eric Bidelman)
 * License Apache-2.0
 *
 * Shows how to use Puppeeteer's code coverage API to measure CSS/JS coverage across
 * different points of time during loading. Great for determining if a lazy loading strategy
 * is paying off or working correctly.
 *
 * Install:
 *   npm i puppeteer chalk cli-table
 * Run:
 *   URL=https://example.com node coverage.js
 */

const puppeteer = require("puppeteer");
const chalk = require("chalk");
const Table = require("cli-table");

const URL = process.env.URL || "http://ijmccallum.github.io/";

const EVENTS = ["domcontentloaded", "load", "networkidle0"];

function formatBytesToKB(bytes) {
  if (bytes > 1024) {
    const formattedNum = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 1
    }).format(bytes / 1024);
    return `${formattedNum}KB`;
  }
  return `${bytes} bytes`;
}

class UsageFormatter {
  constructor(stats) {
    this.stats = stats;
  }

  static eventLabel(event) {
    return chalk.magenta(event);
  }

  summary(used = this.stats.usedBytes, total = this.stats.totalBytes) {
    const percent = Math.round(used / total * 100);
    return `${formatBytesToKB(used)}/${formatBytesToKB(total)} (${percent}%)`;
  }

  shortSummary(used, total = this.stats.totalBytes) {
    const percent = Math.round(used / total * 100);
    return used ? `${formatBytesToKB(used)} (${percent}%)` : 0;
  }

  /**
   * Constructors a bar chart for the % usage of each value.
   * @param {!{jsUsed: number, cssUsed: number, totalBytes: number}=} stats Usage stats.
   * @return {string}
   */
  barGraph(stats = this.stats) {
    const maxBarWidth = 30;

    const jsSegment = " ".repeat(stats.jsUsed / stats.totalBytes * maxBarWidth);
    const cssSegment = " ".repeat(
      stats.cssUsed / stats.totalBytes * maxBarWidth
    );
    const unusedSegment = " ".repeat(
      maxBarWidth - jsSegment.length - cssSegment.length
    );

    return (
      chalk.bgRedBright(jsSegment) +
      chalk.bgBlueBright(cssSegment) +
      chalk.bgBlackBright(unusedSegment)
    );
  }
}

const stats = new Map();

/**
 * @param {!Object} coverage
 * @param {string} type Either "css" or "js" to indicate which type of coverage.
 * @param {string} eventType The page event when the coverage was captured.
 */
function addUsage(coverage, type, eventType) {
  for (const entry of coverage) {
    if (!stats.has(entry.url)) {
      stats.set(entry.url, []);
    }

    const urlStats = stats.get(entry.url);

    let eventStats = urlStats.find(item => item.eventType === eventType);
    if (!eventStats) {
      eventStats = {
        cssUsed: 0,
        jsUsed: 0,
        get usedBytes() {
          return this.cssUsed + this.jsUsed;
        },
        totalBytes: 0,
        get percentUsed() {
          return this.totalBytes
            ? Math.round(this.usedBytes / this.totalBytes * 100)
            : 0;
        },
        eventType,
        url: entry.url
      };
      urlStats.push(eventStats);
    }

    eventStats.totalBytes += entry.text.length;

    for (const range of entry.ranges) {
      eventStats[`${type}Used`] += range.end - range.start - 1;
    }
  }
}

async function collectCoverage() {
  const browser = await puppeteer.launch({ headless: true });

  // Do separate load for each event. See
  // https://github.com/GoogleChrome/puppeteer/issues/1887
  const collectPromises = EVENTS.map(async event => {
    console.log(`Collecting coverage @ ${UsageFormatter.eventLabel(event)}...`);

    const page = await browser.newPage();

    await Promise.all([
      page.coverage.startJSCoverage(),
      page.coverage.startCSSCoverage()
    ]);

    await page.goto(URL, { waitUntil: event });

    const [jsCoverage, cssCoverage] = await Promise.all([
      page.coverage.stopJSCoverage(),
      page.coverage.stopCSSCoverage()
    ]);

    addUsage(cssCoverage, "css", event);
    addUsage(jsCoverage, "js", event);

    await page.close();
  });

  await Promise.all(collectPromises);

  return browser.close();
}

(async () => {
  await collectCoverage();

  for (const [url, vals] of stats) {
    console.log("\n" + chalk.cyan(url));

    const table = new Table({
      head: [
        "Event",
        `${chalk.bgRedBright(" JS ")} ${chalk.bgBlueBright(" CSS ")} % used`,
        "JS used",
        "CSS used",
        "Total bytes used"
      ],
      style: { head: ["white"], border: ["grey"] }
    });

    EVENTS.forEach(event => {
      const usageForEvent = vals.filter(val => val.eventType === event);

      if (usageForEvent.length) {
        for (const stats of usageForEvent) {
          const formatter = new UsageFormatter(stats);
          table.push([
            UsageFormatter.eventLabel(stats.eventType),
            formatter.barGraph(),
            formatter.shortSummary(stats.jsUsed), // !== 0 ? `${formatBytesToKB(stats.jsUsed)}KB` : 0,
            formatter.shortSummary(stats.cssUsed),
            formatter.summary()
          ]);
        }
      } else {
        table.push([
          UsageFormatter.eventLabel(event),
          "no usage found",
          "-",
          "-",
          "-"
        ]);
      }
    });

    console.log(table.toString());
  }

  // Print total usage for each event.
  // console.log('\n');
  EVENTS.forEach(event => {
    let totalBytes = 0;
    let totalUsedBytes = 0;

    const metrics = Array.from(stats.values());
    const statsForEvent = metrics.map(eventStatsForUrl => {
      const statsForEvent = eventStatsForUrl.filter(
        stat => stat.eventType === event
      )[0];
      // TODO: need to sum max totalBytes. Currently ignores stats if event didn't
      // have an entry. IOW, all total numerators should be max totalBytes seen for that event.
      if (statsForEvent) {
        totalBytes += statsForEvent.totalBytes;
        totalUsedBytes += statsForEvent.usedBytes;
      }
    });

    const percentUsed = Math.round(totalUsedBytes / totalBytes * 100);

    console.log(
      `Total used @ ${chalk.magenta(event)}: ${formatBytesToKB(
        totalUsedBytes
      )}/${formatBytesToKB(totalBytes)} (${percentUsed}%)`
    );
  });
})();
