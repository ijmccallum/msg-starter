let Picture = require("./picture.js");

module.exports = function(props) {
    let picture = Picture();
    return html`
        <nav class="bg-white clr-black overflow-auto">
            <ul class="list-reset nowrap">
                <li class="dib mh3">
                    <a href="/">Home</a>
                </li>
                <li class="dib mh3">
                    <a href="/build.html">Build</a>
                </li>
                <li class="dib mh3">
                    example
                </li>
                <li class="dib mh3">
                    example
                </li>
                <li class="dib mh3">
                    example
                </li>
                <li class="dib mh3">
                    example
                </li>
                <li class="dib mh3">
                    example
                </li>
                <li class="dib mh3">
                    example
                </li>
            </ul>
        </nav>
    `;
};
