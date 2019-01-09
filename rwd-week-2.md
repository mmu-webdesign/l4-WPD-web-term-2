# RWD Week Two

## Starting your portfolio page

You are going to develop a single page portfolio. This one page introduces you to the basics of RWD (responsive web design), mobile first web development and further elements of page layout, typography, web design and coding.

## Task 1 - Getting started

- Create a folder called `term_two_project` to contain this project. 
- [Get the template portfolio from github](https://github.com/mmu-webdesign/l4-rwd-template) - Select the green _Clone or download_ button, select _Download ZIP_. Locate the ZIP file and extract the contents.
- You only need the `portfolio` folder - move this into your `term_two_project` folder.
- Using _Visual Studio Code_ - open folder to define on the `portfolio` folder. Open `index.html` and `layout.css`.


INSERT - VIDEO WALK-THROUGH OF THE TEMPLATE (INC. DOWNLOADING ZIP AND OPENING IN VSC AND TESTING AS BELOW)

- Test `index.html` in a browser. 
- Check `layout.css` is working by adding the line: `* { border:1px solid red; }`
- Everything should get a red border. Yes? Then you can delete this line.

### Working *mobile first*
Keep your browser window small (mobile size - no more than half) - don't develop your site with your browser set to fill the screen - we are developing *mobile first*.

---

## Task 2 - The structure - review of HTML template

We will provide an overview of the semantic structure and how this relates to the visual design of the template in class.

![alt text](https://github.com/mmu-webdesign/responsive-web-tutorial/blob/master/design-templates/apprentice-website-structure.jpg "Illustration of example full page layout")

### Download full PDF

- [Page Layout & code structure explained](https://github.com/mmu-webdesign/responsive-web-tutorial/blob/master/design-templates/apprentice-website-structure.pdf) - for Technical Solutions Apprentice students.

- Page Layout & code structure explained - for Digital Media & Communications students.

VIDEO OF SAME.

---

## Task 3 - Adding your content


**Add your content** (created over the last week) to the HTML file in the About and Work sections. 

**Tag up your content**, remembering to use headings, paragraphs, links, and lists as appropriate. 

- **About me** – engaging text to attract and inform the user. 150 words maximum plus relevant links.
- **Work experience** – details of your current and previous work experience or change this section to **Interests** in relation to your course. 200 words maximum.


## Before you go further

- [Validate your HTML additions](https://validator.w3.org/#validate_by_upload). Fix any problems.

---

## Task 4 - The CSS re-set
### Making your CSS *sensible*.

Our template includes `layout.css`. We have included a basic re-set (to remove some of the browsers default settings) and comments to guide your initial styling. 

The following is a breakdown of each of the re-set styles applied to `layout.css`. Please read through and ask questions if you don't understand something.


```
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif; 
```

Update the font-family with a Google Font, web safe font and generic fall back.

```
    font-size: 100%; 
```
Remember that the default browser font size is 16px.
```
    line-height: 1 ; 
```

update to suit your type choices

```
    color: #000;  
```
    /* base text colour - update to suit your design */
```
}
```

Default element re-sets (headings, paragraphs and lists).
```
h1,
h2,
h3,
p,
ol,
ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
}
```
The final re-set provided improves default font styles for forms. By default form input and text areas do not inherit the font-family (like all other elements) applied to the body.
```
input,
textarea {
    font-family: sans-serif;
}
```
As with the body you will need to update the font-family with a Google Font, web safe font and generic fall back.

Save any changes to `layout.css`.

---

## Task 5 - Two further CSS  re-sets

We would like you to now add two more essential CSS re-sets to `layout.css`.

```
/* box sizing */
```
Find the above comment in `layout.css` and [add the border box model CSS code from this article](https://www.paulirish.com/2012/box-sizing-border-box-ftw/). Copy &amp; paste the code, and save.

You will remember that by default browsers define a box size as `width or height + padding + border` = actual width or height. Applying `box-sizing: border-box;` means the width or height includes any padding and/or border. This tends to make life easier - you want a 200px wide box, that's what you now get. For a more detailed explanation see [Box Sizing explained on CSS Tricks](https://css-tricks.com/box-sizing/).

At the moment this won't make any difference to you page. This comes later. Now add our final re-set.

```
/* flexible content images code */
```
Looking at `index.html` in your browser you will have noticed that the images we have provided do not fit (*when your browser window is mobile sized*) and cause an ugly horizontal scroll bar.

To fix this problem add this [flexible image CSS code from Derren's CodePen](https://codepen.io/wilsondmmu/pen/ZvPBgv) to `layout.css`. 

Save the changes to `layout.css` and reload `index.html` in your browser. You will now see that the dummy images we have provided size themselves to the browser window. Whilst this is not true *responsive images* - that would serve differnt size images to different size screens, it does provide a simple solution.

Remember as you further develop your CSS to add comments as you go to your code *about* what you've added. The syntax for CSS comments: 

 ```
 /* your comment */
 ```
---

## Task 6 - Selecting & adding Google fonts

Web Fonts offers a much wider array of options beyond the basic web safe font families. It is now possible create or buy Web Fonts to enhance the design of your site. Google Fonts provides a free and easy to use option. 

There are some drawbacks. Adding Web Fonts to your page increases the overall download time and *weight* of the page. Fonts be costly. Free does always mean good. 

We would you to select either a single Google Font for both your headings and text, or a pair of complimentary fonts (one for headings, one for the text). 

Read the [MDN Web Fonts article](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts) for much more detail if you would like a deeper understanding.

### Selecting and adding your Google Font(s)

- Identify a single font (or font pairing) on [google fonts](https://fonts.google.com/): it could be for your headings, for your 'body copy', or for both.
- Add the google font code to the `<head>` of your `index.html` file, before the link to your layout.css file (repeat this if you have a second font).
- Add the font-family CSS rule from google fonts to your layout.css file.
- Base font (body) - Google font, web safe font, fallback.
- Add a font-size in pixels, maybe 1.2rems? Heading and paragraphs.
- Add line-height as a 'multiplier', e.g. 2.4?
- Check it's working. Does it look right? **Adjust it until it does**.
- Style your section headings `<h2>` by changing one or two things about them: font-weight, font-size, color, text-transform: uppercase, letter-spacing?

INSERT - VIDEO DEMONSTRATION - SELECTING A FONT PAIRING, ADDING LINKS, ADDING CSS, SIZING, TESTING.

### Help in selecting your fonts
- [Layouts designed with google fonts](https://femmebot.github.io/google-type/) 
- [The best google fonts according to Typewolf](https://www.typewolf.com/google-fonts)

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


For next week?
## Adding a responsive column

- [Add the responsive column of content CSS](https://codepen.io/wilsondmmu/pen/PJQYZG)  illustrated in the lecture, creating the class `.container-content`
- 'tune' the `max-width` with a 65 character line for your typeface using this paragraph:  
`<p>01234567890123456789012345678901234567890123456789012345678912345</p>`
- There's more information about why we do this and how it works [at this codepen on font sizing and column widths](https://codepen.io/wilsondmmu/pen/PJdGyE).

Padding and margins mobile/desktop

