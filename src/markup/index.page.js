module.exports = function() {
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
        <body class="text-center">

            <section class="screen-height clr-white bg-black center-section">
                <h1>MSG starter kit</h1>
                <p>A personalised collection of the little things I've picked up from around the industry, the nifty things that give a project that extra polish.</p>
            </section>

            <section>
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
        </body>
        </html>
    `;
};
