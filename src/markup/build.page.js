let baseLayout = require("./layouts/base.js");
let HeroBanner = require("./components/hero-banner.js");

module.exports = function() {
    let heroBanner = HeroBanner();
    let pageContent = html`
        ${heroBanner}
    `;
    return baseLayout(pageContent);
};
