let baseLayout = require("./layouts/base.js");

module.exports = function() {
    let pageContent = html`
        <section class="pa4 pt5">
            <div class="width-constraint">
                <div class="w-60-m mha">
                    <p class="measure-wide">My own little boilerplate. A collection of good front end development ideas from all over the place. 
                        It's a CSS library with some <em>slightly</em> opinionated kick off styles, 
                        a collection of build tools &amp; testing scripts, 
                        and a <a href="https://ijmccallum.github.io/Mini-Site-Generator/" class="underline">super simple static site generator</a>.</p>
                </div>
            </div>
            <p>Need to find a home for this spinner</p>
            <div class="spinner"></div>
        </section>
    `;

    return baseLayout(pageContent);
};
