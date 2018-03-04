let Picture = require("./picture.js");

module.exports = function(props) {
    let picture = Picture();
    return html`
        <div class="hero-banner">
            ${picture}
            <div class="hero-banner__body pa2 bg-blue clr-black">
                <h2 class="ma0 text-center">Hero Banner!</h2>
            </div>
        </div>
    `;
};
