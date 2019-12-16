# RWD Week Six

Tips, advice and resources for checking your work.

Things to check when going through our instructions

* [Accessibility](#Accessibility)
* [Checking your CSS](#Checking-your-CSS)
* [Paragraphs](#Paragraphs)
* [Margins and padding](#Margins-and-padding)
* [CSS file order](#CSS-file-order)
* [SEO - your content](#SEO---your-content) 
* [Browser resources](#Browser-resources)
* [Live preview and mobile preview](#Live-preview-and-mobile-preview)
* [Files and folders](#Files-and-folders)
* [Check list](#Check-list)
* [Things to do ](#Things-to-do)
* [Social media *optional](#Social-media)


## Accessibility

Check the basics:

- relevant alt text for all images
- If an image is *fluff* use a null alt [*Fluff* - images that are purely decoration and do not add anything to the content of the document]
- colour contrast
- accessible form (use of 'label for')
- legibility and readability
- logical structure
- use of semantics

More advanced than this unit, but you could use the[ WCAG 2 checklist from WebAIM](https://webaim.org/standards/wcag/checklist). You won't understand everything, and not everything will be relevant to your site, but still worth a look.

If your site is hosted live, you can use the [WebAIM WAVE accessibility evaluation tool](http://wave.webaim.org/). Remember this is only a robot. It will get things wrong and it can't deal with subjective elements, such as how relevant is your alt text. 

## Checking your CSS
* Did you add the responsive image CSS? It should look something like this:

``` 
img { max-width: 100%; height: auto; } 
```

* Have you added the border-box model code? You can [find the border-box model code on this website](https://www.paulirish.com/2012/box-sizing-border-box-ftw/) just after the sentence that says 'I have a recommendation for your CSS going forward...'

* Do you have a line in your CSS like this?

``` 
div {max-width: 600px; margin: 0 auto; padding: 0 15px;} 
```

If so, **change it**: it should only be applying to `.container-content`, not all `div` elements

## Paragraphs

Make sure there is some *breathing space* between paragraphs.

We often see dark blocks of text like this (and larger):

>In another moment down went Alice after it, never once considering how in the world she was to get out again.
The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.

Rather than...

>In another moment down went Alice after it, never once considering how in the world she was to get out again.
>
>The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well.

You can also target specific paragraphs with styles like `.about-me p {padding-bottom: 13px;}` 

## Margins and padding

Have you added padding to your sections? The page can look cramped if you let the sections follow immediately after each other.

>**Tip** - Derren prefers to set margins to zero and adjust padding in most cases. This keeps things simpler in most cases.

Remember to keep text away from edges. Text running up against borders/edges is hard to read.

## CSS file order

Your CSS file can become rather long and complicated. It's not uncommon to start adding styles at the end that overwrite earlier styles!

Derren gives you some tips on how he approaches the order of his CSS files.

- Resets
- Very basic styles for elements (e.g. h1, h2, p): nothing too opinionated though - no colours or styling
-Then break the page up into sections and style each one, e.g.
    - All styles for header
    - All styles for page sections
    - All styles for footers

- So that I know if I'm in the middle of the stylesheet, it'll be the CSS for the middle of the page. 
- The last thing in the stylesheet will probably be the footer.
- Use lots of comments in your stylesheet that break up the code and label the page sections.

## SEO - your content

On-site SEO refers to optimizing both the content and HTML source code of a page. The content you have created will also add to the value and 'findability' of your site.

The [MOZ SEO Guide](https://moz.com/learn/seo/on-site-seo) explains:

- **In-depth**."Thin" content was one of Google Panda's specific targets; today it's more or less assumed that content must be sufficiently thorough in order to stand a good chance at ranking.
- **User-friendly**. Is the content readable? Is it organized on your site in such a way that it's easily navigable? Is it generally clean, or littered with ads and affiliate links?
- **Unique**. If not properly addressed, content duplicated from elsewhere on your site (or elsewhere on the Internet) may impact a site's ability to rank on SERPs.
- **Authoritative and trustworthy**. Does your content stand on its own as a reliable resource for information on a particular topic?
- **Aligned with user search intent**. Part of creating and optimizing for quality content is also delivering on searcher expectations. Content topics should align with the search queries for which they rank.


## Browser resources

We have introduced you to Dev Tools in the browser. Here are some further browser resources.

*   [The web developer toolbar for Firefox and Chrome](https://chrispederick.com/work/web-developer/)  

*   [Introduction to the Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/)  

*   [Firefox developer edition](https://www.mozilla.org/en-US/firefox/developer/)  

*   [Firefox developer tools](https://developer.mozilla.org/en-US/docs/Tools)  

## Live preview and mobile preview

Not for everyone, but worth a try. You can use Prepros to set up  a developer environment on your laptop. Prepros reloads your mobile browser automatically every time you save a file in code editor.

*   [Prepros.io](https://prepros.io/)  

*   [Using live preview with Prepros](https://prepros.io/help/live-preview)

## Files and folders

An important aspect of web development is file management. A clean, well structured site is essential.

*   [A good introduction from MDN about how to organise your work](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files).   

>We want your html page to be called **index.html** - it's always suprising how many students miss this! 

You should use and maintain the folder structure provided. If all of your files are sitting on the root of your site, there is something wrong!

## Check list

**You should have:**

-   You template portfolio page (with limited adjustment of HTML provided).
-   High quality original text and media.
-   Text grammar and spell checked.
-   Media optimised for the web.
-   Metadata - page title and meta description relevant to your portfolio.
-   Design - attractive, appropriate use of typography, design and colour. 
-   Mobile first approach to CSS and media queries.
-   Step by step implementation of the required CSS including flexbox for layout.
-   Efficient (read minimal) CSS.
-   Credit any lines of non-original CSS.
-   Additional elements may include extended layout (for example putting your about section (text/media) into columns or rows with flexbox or floats. Placement of social media icons, perhaps a home-made icon and such to enhance your page. [See more under additional](https://github.com/mmu-webdesign/IWD-web-term2/blob/master/rwd-week-additional.md). 

## Things to do 

-   Run an audit using Dev Tools in Chrome.  
-   Validation HTML & CSS
-   Accessibility audit (see links above)
-   Usability - get friends and family to test your page.  

-   Design - test your design using the 5 second test for designs on colleagues, friends and family - [https://fivesecondtest.com/](https://fivesecondtest.com/) - see [https://www.nngroup.com/articles/testing-visual-design/](https://www.nngroup.com/articles/testing-visual-design/)
-   Are all of your images optimised for the web?
-   Colour contrast - have you made the right choices with your colours?
-   SEO - have you written good metadata and content with SEO in mind? See [Shaun Anderson's SEO tutorial for some good advice](https://www.hobo-web.co.uk/seo-tutorial/#page-title-element).  


## Social media

**Optional** 

You can add links to your professional social media accounts. This is usually done via clickable icons. Use a [site like iconmonstr](https://iconmonstr.com/) to customise and download a png file, or to embed inline code for an svg.

If you use a png, optimise the file to the largest size used on your site.

SVG is an excellent option because it is purely code (no image file needed). This means it is lightweight and flexible - it can scale to any size.

Want to know more about SVG? Read the [MDN guide to Adding vector graphics to the Web](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web).


[Return to the Top](#RWD-Week-Six)
