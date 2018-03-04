/**
 * The <img> src attribute is the fallback image.
 * Each <source> srcset takes 1 image, or a comma seperated list of image paths for given pixel densities
 * srcset="cat.png 1x, cat@1.5X.png 1.5x, cat@2X.png 2x"
 * The <source> element also takes a media attribute in which you can set css media queries
 * An example:

 <picture>
  <source 
    media="(min-width: 650px)" 
    srcset="images/kitten-stretching.png,
            images/kitten-stretching@1.5x.png 1.5x,  
            images/kitten-stretching@2x.png 2x">
  <source 
    media="(min-width: 465px)" 
    srcset="images/kitten-sitting.png,
            images/kitten-sitting@1.5x.png 1.5x
            images/kitten-sitting@2x.png 2x">
  <img 
    src="images/kitten-curled.png" 
    srcset="images/kitten-curled@1.5x.png 1.5x,
            images/kitten-curled@2x.png 2x"
    alt="a cute kitten">
</picture>

Lifted straight from https://www.html5rocks.com/en/tutorials/responsive/picture-element/ - thanks!
 */
module.exports = function(props) {
    let colors = "/222222/cdecff";
    return html`
        <picture>
            <source 
                media="(min-width: 1800px)" 
                srcset="http://via.placeholder.com/1800x150${colors},
                    http://via.placeholder.com/2700x225${colors} 1.5x
                    http://via.placeholder.com/3600x300${colors} 2x">
            <source 
                media="(min-width: 1200px)" 
                srcset="http://via.placeholder.com/1200x150${colors},
                    http://via.placeholder.com/1800x225${colors} 1.5x
                    http://via.placeholder.com/2400x300${colors} 2x">
            <source 
                media="(min-width: 900px)" 
                srcset="http://via.placeholder.com/900x150${colors},
                    http://via.placeholder.com/1350x225${colors} 1.5x
                    http://via.placeholder.com/1800x300${colors} 2x">
            <source 
                media="(min-width: 600px)" 
                srcset="http://via.placeholder.com/600x150${colors},
                    http://via.placeholder.com/900x225${colors} 1.5x
                    http://via.placeholder.com/1200x300${colors} 2x">
            <img 
                src="http://via.placeholder.com/350x150${colors}" 
                srcset="http://via.placeholder.com/525x225${colors} 1.5x,
                    http://via.placeholder.com/700x300${colors} 2x"
                alt="A placeholder image">
        </picture>
    `;
};
