"use strict";
const pa11y = require("pa11y");
const entryUrl = "https://ijmccallum.github.io/";
/*
I'm pretty sure recursion in JS isn't yet a solved problem (the growing stack issue),
so instead I've gone for a slightly more complicated iterative approach, 
just in case you want to run this on a really really deep / convoluted site
*/
let untestedPages = [
    {
        url: entryUrl,
        results: {}
    }
];
let testedPages = [];

async function begin(url) {
    while (untestedPages.length > 0) {
        untestedPages.forEach(page => {
            //double check this page has not been tested before
            if (!isPageInMap(page, testedPages)) {
                //test this page
                const results = await pa11yPage(page.url);
                //add to sitemap
                testedPages.push({
                    url: page.url,
                    results: results
                });
                //get the links
                let links = getLinksFromPage(page.url);
                //if they haven't been tested, add them to the untested map
                links.forEach(link => {
                    if (!isPageInMap({ url: link })) {
                        untestedPages.push({
                            url: link,
                            results: {}
                        });
                    }
                });
            }
            //remove from untested pages
            untestedPages = removePageFromMap(page, untestedPages);
        });
    }
}

function getLinksFromPage(markup) {
    //TODO
    return ["one", "two"];
}

function isPageInMap(testPage, pageMap) {
    pageMap.array.forEach(mapPage => {
        if (mapPage.url == testPage.url) {
            return true;
        }
    });
    return false;
}

function removePageFromMap(removalPage, pageMap) {
    //TODO copy pageMap
    pageMap.forEach((mapPage, i) => {
        if (mapPage.url == removalPage.url) {
            pageMap.splice(i, 1);
        }
    });
    return pageMap;
}

//return a promise / resolve to a results object
function pa11yPage(url) {
    try {
        return pa11y(url, {
            log: {
                debug: console.log,
                error: console.error,
                info: console.log
            }
        });
    } catch (error) {
        // Output an error if it occurred
        console.error(error);
    }
}

begin(entryUrl);
