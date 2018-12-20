# RWD Task List One

## Starting your portfolio page

You are going to develop a single page portfolio. This one page introduces you to the basics of RWD (responsive web design) and further elements of page layout, typography, web design and coding.

## Getting started

- Create a folder called `portfolio` to contain this project. Add a sub-folder called `media` for your images.
- [Get the HTML from github](https://raw.githubusercontent.com/wilsonderren/responsive-website-template/master/index.html) - copy &amp; paste into your editor and save to the root folder as `index.html`

INSERT - VIDEO WALK-THROUGH OF THE TEMPLATE (INC. COPY & PASTE INTO EDITOR AND SAVING AS INDEX.HTML)

- Create a blank css file called `layout.css` and add it to the root of your site. The html template already contains a link in the `&lt;head&gt;`.

- Keep your browser window small - don't use it at full screen - we are developing *mobile first*.

- Test `index.html` in a browser. 
- Check `layout.css` is working by adding the line: <br> `* { border:1px solid red; }`
- Everything should get a red border. Yes? Then you can delete this line.


## Adding your content

Add your content (created over the last week) to the HTML file in the relevant sections. Tag up your content, remembering to use headings, paragraphs, links, and lists. Note that we are not adding your original images yet.

- **About me** – engaging text to attract and inform the user. Mindful of Search Engine Optimisation (SEO), using relevant keywords and such. Tell the reader something about yourself. 150 words maximum. You may want to include links to your social media feeds in this section if you have them.
- **Work experience** – details of your current and previous work experience. Include relevant links and media. 200 words maximum.
- **Image gallery** – See below.
- **Image caption** - create and add a 150 words (maximum) summary to accompany each image.

## Before you go further

- [Validate your HTML additions](https://validator.w3.org/#validate_by_upload). Fix any problems.

## Your images

- Take or create three original images to illustrate things important to you.
- Usually these are photographs (jpeg format). 
- If they are illustrations either gif, svg or png formats may be more relevant.
- If they can all be the same orientation (landscape or portrait) it does make things simpler, but is not essential. 
- **You will require a 4th original image for your 'big banner', often known as the 'hero' image**. This is going to be used at a much larger size. It needs to be high quality. It should be landscape. 
- If you are struggling to create a high quality hero image (you really should try) - you can download and use [a free hero image from Unsplash](https://unsplash.com/search/photos/hero-image). 
- Remember to keep the full size original image.

**NOTE:** We are not using your images yet - we have inserted the code for dummy images - you will replace these with your own, optimized images next week.



## Making your CSS 'sensible'

- [Add the border box model CSS](https://www.paulirish.com/2012/box-sizing-border-box-ftw/) - copy &amp; paste the code from this article.
- **Add a basic reset** - Reset your margins and padding to zero for h1, h2 and p tags.
- Add [the flexible image CSS](https://codepen.io/wilsondmmu/pen/ZvPBgv) to your CSS file.

Add comments as you go to your code *about* what you've added. The syntax for CSS comments: <br> `/* your comment */`

## Add one or two Google fonts

- Identify a single font (or font pairing) on [google fonts](https://fonts.google.com/): it could be for your headings, for your 'body copy', or for both.
- Add the google font code to the `<head>` of your `index.html` file, before the link to your layout.css file (repeat this if you have a second font).
- Add the font-family CSS rule from google fonts to your layout.css file.
- Add a font-size in pixels, maybe 26px?
- Add line-height as a 'multiplier', e.g. 2.4?
- Check it's working. Does it look right? **Adjust it until it does**.
- Style your section headings `<h2>` by changing one or two things about them: font-weight, font-size, color, text-transform: uppercase, letter-spacing?

INSERT - VIDEO DEMONSTRATION - SELECTING A FONT PAIRING, ADDING LINKS, ADDING CSS, SIZING, TESTING.

### Help in selecting your fonts
- [Layouts designed with google fonts](https://femmebot.github.io/google-type/) 
- [The best google fonts according to Typewolf](https://www.typewolf.com/google-fonts)

## Adding a responsive column

- [Add the responsive column of content CSS](https://codepen.io/wilsondmmu/pen/PJQYZG)  illustrated in the lecture, creating the class `.container-content`
- 'tune' the `max-width` with a 65 character line for your typeface using this paragraph:  
`<p>01234567890123456789012345678901234567890123456789012345678912345</p>`
- There's more information about why we do this and how it works [at this codepen on font sizing and column widths](https://codepen.io/wilsondmmu/pen/PJdGyE).

## Adding colour

- Research a colour scheme - try [coolors.co](https://coolors.co/). Save your colour scheme as a pdf or png for later. Choose one main colour and use tints and shades of that colour for the backgrounds of your 4 `<section>`'s.

INSERT - VIDEO ILLUSTRATING SELECTION OF A COLOUR SCHEME AND GETTING HEX CODES/PDF 

- Apply these different background colours to the *About Me, Work Experience, Image Gallery and Contact Me* sections .

INSERT - CODEPEN ILLUSTRATING BACKGROUND COLOURS VIA SECTION CLASSES. PERHAPS ILLUSTRATE 2, ASKING THEM TO ADD OTHERS. THEY CAN 'TAKE AWAY' THE CSS.

### Things to note

- Your original images, especially the 'big header' image may influence the colour scheme you want to use. 
- always keep in mind the contrast between your text and any background colour (see below).

## Testing
- [Validate your HTML](https://validator.w3.org/#validate_by_upload) and [validate your CSS](https://jigsaw.w3.org/css-validator/#validate_by_upload). Fix any problems.
- Colour contrast - check that that each colour/tint has a strong contrast with your text colour. Test each section colour by using [Lea Verou's Contrast ratio checker](http://contrast-ratio.com/). You are looking for a AAA (green) pass for each section. 


## Colour resources

- [Coolors.co](https://coolors.co/) - a really good colour palette chooser.
- [Adobe colour wheel](https://color.adobe.com/create/color-wheel/) - you may also want to try out this colour tool which helps you come up with colour palettes for your site.
- [CSS for Backgrounds](http://cssreference.io/backgrounds/) - a reference site for all the ways we can control backgrounds in CSS.

## Are you up to date?
Before you start Task 2 [use the Task 1 check list](rwd-task1-checklist.html). Have you completed everything?

- Fix any problems before you continue.
- Keep your browser window small - don't use it at full screen yet. We are still *mobile first*.