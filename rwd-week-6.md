# RWD Week Six

Tips, advice and resources for checking your work.

## Things to check when going through our instructions

* Have you added the responsive image CSS? It should look something like this:

``` img { max-width: 100%; height: auto; } ```

* Have you added the border-box model code? You can [find the border-box model code on this website](https://www.paulirish.com/2012/box-sizing-border-box-ftw/) just after the sentence that says 'I have a recommendation for your CSS going forward...'

* Do you have a line in your CSS like this?

``` div {max-width: 600px; margin: 0 auto; padding: 0 15px;} ```

If so, **change it**: it should only be applying to `.container-content`, not all `div` elements

* Have you added some padding back in to your `p` tags so that new paragraphs are separated from the ones preceding them? Something like `.about-me p {padding-bottom: 13px;}` would work - remember to do this for each section with a series of paragraphs

* Have you added padding to your sections? The page can look cramped if you let the sections follow immediately after each other.


## Browser resources

*   [The web developer toolbar for firefox and chrome](https://chrispederick.com/work/web-developer/)  

*   [Introduction to the chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/)  

*   [Firefox developer edition](https://www.mozilla.org/en-US/firefox/developer/)  

*   [Firefox developer tools](https://developer.mozilla.org/en-US/docs/Tools)  

## Live preview and mobile preview

*   [Prepros.io](https://prepros.io/)  

*   [Using live preview with Prepros](https://prepros.io/help/live-preview)

## Files and folders

*   [A good introduction from MDN about how to organise your work](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files).   

*   We want your html page to be called index.html  

**If you use a windows computer, read this:** On Windows computers, you might have trouble seeing the file names, because Windows has an option called Hide extensions for known file types turned on by default. Generally you can turn this off by going to Windows Explorer, selecting the Folder options... option, unchecking the Hide extensions for known file types checkbox, then clicking OK. For more specific information covering your version of Windows, you can search on the web.

## Check list

**You should have:**

-   You template portfolio page (with limited adjustment of HTML provided).
-   High quality original text and media.
-   Text grammar and spell checked.
-   Media optimised for the web.
-   Metadata - page title and meta description relevant to your portfolio.
-   Design - attractive, appropriate use of typography, design and colour. 
-   Mobile first approach to CSS and media queries.
-   Step by step implementation of CSS including flexbox for layout.
-   Efficient (read minimal) CSS.
-   Credit any lines of non-original CSS.
-   Additional elements may include extended layout (for example putting your about section (text/media) into columns or rows with flexbox or floats. Placement of social media icons, perhaps a home-made icon and such to enhance your page.

**Check your work:**  

-   Run an audit using Dev Tools in Chrome.  
-   Validation HTML & CSS
-   Accessibility audit (see link below)
-   Usability - get friends and family to test you page.  

-   Design - test you design using the 5 second test for designs on colleagues, friends and family - [https://fivesecondtest.com/](https://fivesecondtest.com/) - see [https://www.nngroup.com/articles/testing-visual-design/](https://www.nngroup.com/articles/testing-visual-design/)
-   Are all of your images optimised for the web?
-   Colour contrast - have you made the right choices with your colours?
-   SEO - have you written good metadata and content with SEO in mind? See [Shaun Anderson's SEO tutorial for some good advice](https://www.hobo-web.co.uk/seo-tutorial/#page-title-element).  

## More flexbox

### Flexbox games

- [Flexbox froggy](http://flexboxfroggy.com/)
- [Flexbox defense](http://www.flexboxdefense.com/)


### CSS selectors: what are they?

- [CSS Diner game to learn CSS selectors](http://flukeout.github.io/)
- [CSS selectors at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [CSS selectors at CSS tricks](https://css-tricks.com/how-css-selectors-work/)


### Flexbox without flexbox

We are getting into the area of supporting older browsers. You don't have to do this with your assignment, but if you're interested, here's some examples of how to produce flexbox-like layouts without flexbox.



## CSS file order

Here's how I like to do it:

- Resets
- Very basic styles for elements (e.g. h1, h2, p): nothing too opinionated though - no colours or styling
-Then break the page up into sections and style each one, e.g.
    - All styles for header
    - All styles for page sections
    - All styles for footers

- So that I know if I'm in the middle of the stylesheet, it'll be the CSS for the middle of the page. 
- The last thing in the stylesheet will probably be the footer.
- Use lots of comments in your stylesheet that break up the code and label the page sections.


## Fonts and colours

- Layouts designed with google fonts
- The best google fonts according to Typewolf
Coolors
