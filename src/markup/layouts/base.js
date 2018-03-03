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
