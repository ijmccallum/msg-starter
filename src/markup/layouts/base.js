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
                        <div class="w-20 pr3">
                            <div class="pb2">Input with icon</div>
                        </div>
                        <div class="w-20 pr3">
                            <div class="pb2">Breakpoint columns</div>
                            <div class="pb2">Grids</div>
                        </div>
                        <div class="w-20 pr3">     
                            <div class="pb2">Stack to horizontal</div>
                            <div class="pb2">Priority Plus</div>
                            <div class="pb2">Horizontal Scroller</div>
                        </div>
                        <div class="w-20 pr3">
                            <div class="pb2">Popin</div>
                            <div class="pb2">Popout</div>
                            <div class="pb2">Modal</div>
                            <div class="pb2">Drawer</div>
                        </div>
                        <div class="w-20 pr3">
                            <div class="pb2">Headings</div>
                            <div class="pb2">Paragraphs</div>
                            <div class="pb2">Links</div>
                            <div class="pb2">Lists</div>
                            <div class="pb2">Tables</div>
                            <div class="pb2">Other els</div>
                        </div>
                    </div>
                </section>
                ${content}
            </body>
        </html>
    `;
};
