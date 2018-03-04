let baseLayout = require("./layouts/base.js");

module.exports = function() {
    let pageContent = html`
        <section class="screen-height clr-white bg-black center-section">
            <h1>MSG starter kit</h1>
            <p>A personalised collection of the little things I've picked up from around the industry, the nifty things that give a project that extra polish.</p>
        </section>
        
        <section>
            <h1>H1 Giant Banner Heading</h1>
            <h2>H2 Page Title</h2>
            <h3>H3 Section title</h3>
            <h4>H4 Sub Section title</h4>
            <h5>H5 This is essentially paragraph text size</h5>
            <h6>H6 Teeny tiny things!</h6>
            <p><a href="#">Pretty text underline without clipping descending letters.</a></p>
            <p class="underline">Pretty text underline without clipping descending letters.</p>
            <div class="spinner"></div>
        </section>
    `;

    return baseLayout(pageContent);
};
