let baseLayout = require("./layouts/base.js");

module.exports = function() {
    let pageContent = html`
        <section class="clr-white bg-black pv5 ph4">
            <div class="flex-row">
                <div class="w-20">     
                </div>
                <div>
                    <p class="ma0">Iain's</p>
                    <h1 class="h2 mt0">MSG Starter Kit</h1>
                </div>
            </div>
            <div class="flex-row">
                <div class="w-20 pa2">
                    <div class="pb2">Input with icon</div>
                </div>
                <div class="w-20 pa2">
                    <div class="pb2">Breakpoint columns</div>
                    <div class="pb2">Grids</div>
                </div>
                <div class="w-20 pa2">     
                    <div class="pb2">Stack to horizontal</div>
                    <div class="pb2">Priority Plus</div>
                    <div class="pb2">Horizontal Scroller</div>
                </div>
                <div class="w-20 pa2">
                    <div class="pb2">Popin</div>
                    <div class="pb2">Popout</div>
                    <div class="pb2">Modal</div>
                    <div class="pb2">Drawer</div>
                </div>
            </div>
        </section>
        
        <section>
                <p>A personalised collection of the little things I've picked up from around the industry, the nifty things that give a project that extra polish.</p>
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
