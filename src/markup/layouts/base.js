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
                ${content}
            </body>
        </html>
    `;
};
