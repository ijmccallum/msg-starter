let baseLayout = require("./layouts/base.js");

module.exports = function() {
    let pageContent = html`
        <section class="pa4 pt5">
            <h2>Form styles</h2>
            <p>CSS only! I've had experience with JS rendering markup around things like select elements in order to make them easier to style, the issues they cause aren't worth it.</p>
        </section>
        <section class="pa4" id="buttons">
            <h3>Buttons</h3>
            <button>Plain button</button>
            <input type="button" value="input button">
            <a class="btn" href="#">a button</a>
            <button>Button <br />with breaking text</button>
        </section>
        <section class="pa4" id="inputs">
            <h3>Inputs</h3>
            <input placeholder="just a plain input" />
            <input type="email" placeholder="email@example.com" />
            <input type="password" value="password" />
            <input type="number" value="0" />
            <select>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <optgroup label="And">
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                </optgroup>
                <textarea placeholder="Write something in this here area of text" spellcheck></textarea>
            </select>
        </section>
        <section class="pa4" id="radiocheck">
            <h3>Radiocheck</h3>
            <input type="radio" id="contactChoice1"
            name="contact" value="email">
            <label for="contactChoice1">Email</label>
    
            <input type="radio" id="contactChoice2"
            name="contact" value="phone">
            <label for="contactChoice2">Phone</label>
    
            <input type="radio" id="contactChoice3"
            name="contact" value="mail">
            <label for="contactChoice3">Mail</label>
            <br />
            <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter">
            <label for="subscribeNews">Subscribe to newsletter?</label>
        </section>
    `;

    return baseLayout(pageContent);
};
