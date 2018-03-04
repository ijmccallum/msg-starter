let baseLayout = require("./layouts/base.js");
let HorizontalSlideNav = require("./components/nav-horizontal-slide.js");

module.exports = function() {
    let horizontalSlideNav = HorizontalSlideNav();

    let pageContent = html`
        ${horizontalSlideNav}
    `;

    return baseLayout(pageContent);
};
