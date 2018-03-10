/**
 * It's unlikely that we'll need another layout for most projects
 * unless you're doing something interesting.
 * In which case - let me know what said interesting thing is!
 * TODO: pass in a props object to modify parts of the base layout
 * TODO: compile time testing of the props object... I guess there only really is compile time!
 */

module.exports = function(content) {
    return html`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Mini Site Generator</title>
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
                <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet">
                <link href="main.css" rel="stylesheet">
            </head>
            <body>
                <section class="clr-white bg-black pt5 ph4">
                    <div class="width-constraint">
                        
                        <p class="ma0">Iain's</p>
                        <h1 class="h2 mt0"><a href="/" class="no-underline">MSG Starter Kit</a></h1>
                    
                        <div class="dib v-top pb5 pr3 w-30 w-20-m">
                            <div class="pb2"><a href="/forms#buttons">Buttons</a></div>
                            <div class="pb2"><a href="/forms#inputs">Inputs</div>
                            <div class="pb2"><a href="/forms#radiocheck">Radiocheck</div>
                        </div>
                        <div class="dib v-top pb5 pr3 w-30 w-20-m">
                            <div class="pb2">Breakpoint columns</div>
                            <div class="pb2">Grids</div>
                        </div>
                        <div class="dib v-top pb5 pr3 w-30 w-20-m">    
                            <div class="pb2">Stack to horizontal</div>
                            <div class="pb2">Priority Plus</div>
                            <div class="pb2">Horizontal Scroller</div>
                        </div>
                        <div class="dib v-top pb5 pr3 w-30 w-20-m">
                            <div class="pb2">Popin</div>
                            <div class="pb2">Popout</div>
                            <div class="pb2">Modal</div>
                            <div class="pb2">Drawer</div>
                        </div>
                        <div class="dib v-top pb5 pr3 w-30 w-20-m">
                            <div class="pb2"><a href="/content#headings">Headings</a></div>
                            <div class="pb2"><a href="/content#paragraphs">Paragraphs</a></div>
                            <div class="pb2"><a href="/content#links">Links</a></div>
                            <div class="pb2"><a href="/content#lists">Lists</a></div>
                            <div class="pb2"><a href="/content#tables">Tables</a></div>
                            <div class="pb2"><a href="/content#others">Other els</a></div>
                        </div>
                    </div>
                </section>
                ${content}
                <section class="h-100v"></section>
            </body>
        </html>
    `;
};
