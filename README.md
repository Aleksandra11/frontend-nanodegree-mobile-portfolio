## Website Performance Optimization portfolio project
==================================================

Part 1. Outlines optimizations for pagespeed (index.html):
----------------------------------------------------

* Resized images that were too large and compressed all images
* Optimized CSS delivery by inlining css to the head of the document
* Used media query for print.css so that it doesn't have to load except when printing
* Used async attribute in script tag for analytics and perfmatters.js
* Used the Gulp build tool to concatenate and minify .css and .js files.
* Changed loading of google font to WebFont loader.

### To run the application 
+ go to [Pagespeed Insights](http://https://developers.google.com/speed/pagespeed/insights).
+ Insert http://aleksandra11.github.io/frontend-nanodegree-mobile-portfolio/ and click analyze button.

Part 2. Optimizations for FPS :
----------------------------------------------------------------------------------------------------------
The following changes where made to fix the low FPS and produce a consistent 60FPS frame rate when scrolling the page:

+ Changed the slider value to a percent width in changePizzaSizes function
+ Optimized the loops contained in the updatePositions function and the onDOMContentLoaded event handler (Moved some variables outside loop so that they don't have to be calculated everytime)
+ Reduced the amount of sliding pizza elements generated from 200 down to 30, which still sufficiently fills the screen with sliding pizzas.
+ Resized the pizza image
+ Added will-change and backface-visibility CSS property to .mover class to increase the responsiveness of a page


### Resources used:

Gulp to minify css, js and images

Pagespeed Insights [Pagespeed Insights](http://developers.google.com/speed/pagespeed/insights).

[Udacity](https://www.udacity.com/course/ud884).

**To view live version go to** http://aleksandra11.github.io/frontend-nanodegree-mobile-portfolio/



### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
