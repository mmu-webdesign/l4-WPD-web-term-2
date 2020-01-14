# RWD Week Two

## Starting your portfolio page

You are going to develop a single page portfolio. This one page introduces you to the basics of RWD (responsive web design), mobile first web development and further elements of page layout, typography, web design and coding.

## Contents	

* [Task 1 - Getting started](#Task-1---Getting-started)	
* [Task 2 - Review of HTML template](#Task-2---Review-of-HTML-template)	
* [Task 3 - Adding your content and metadata](#Task-3---Adding-your-content-and-metadata) 	
* [Task 4 - The CSS re-set](#Task-4---The-CSS-re-set)	
* [Task 5 - Selecting and adding Google Fonts](#Task-5---Selecting-and-adding-Google-Fonts)	
* [Task 6 - Selecting a colour scheme](#Task-6---Selecting-a-colour-scheme)	
* [Checklist](#Week-2-Checklist)	

---
## Task 1 - Getting started

- Download the template portfolio code from GitHub and extract to your computer.

> **Download** - [The WPD Template Portfolio Site](https://github.com/mmu-webdesign/l4-WPD-web-term-2-template)	

### Instructions	

- Select the green _Clone or download_ button, select _Download ZIP_. Locate the ZIP file and extract the contents.	
Extract the folder to a safe location on your computer.	
- Rename the folder `portfolio`. 	
- Delete the README.md file.	
- Using _Visual Studio Code_ - open folder to define on the `portfolio` folder. Open `index.html` and `layout.css`.	
> Where did you save the portfolio folder? Is it safe? Will it be backed up regularly? Will you lose all of your work if you accidentally delete the folder? Can you find it next week?	

---	

[VIDEO - Demonstration of downloading and extracting the files, defining the site in Visual Studio Code, testing and viewing in a browser.](https://youtu.be/h5Tvh7dPPxs) 

---

- Test `index.html` in a browser. 
- Check `layout.css` is working by adding the line: 

```
* { border:1px solid red; } 
 ```

- Save `layout.css` and re-load `index.html` in the browser. Everything should get a red border. Yes? Then you can delete this line of CSS.	

### Your *root* folder	
The `portfolio` folder is the root of your website. This will contain all the files and sub-folders of your portfolio site. Don't link to any files outside of this folder. Come submission, you will submit this folder and its contents.	

### Working *mobile first*	
>Keep your browser window small (mobile size - no more than half) - don't develop your site with your browser set to fill the screen - we are developing *mobile first*.	

### MS Windows specific issues	

**If you use a windows computer, read this:** 	
>File extensions - .html .css .js .pdf	
On Windows computers, you might have trouble seeing the file names, because Windows has an option called Hide extensions for known file types turned on by default. Generally you can turn this off by going to Windows Explorer, selecting the Folder options... option, unchecking the Hide extensions for known file types checkbox, then clicking OK. For more specific information covering your version of Windows, you can search on the web.	
Also, for the moment **avoid using MicroSoft Edge** browser. Edge has security features that makes it hard to use *local files*, i.e. viewing/linking a HTML file on your own computer. 	
**Avoid MS Explorer altogether!** Use Chrome or Firefox. You can test on other browsers later.

---

## Task 2 - Review of HTML template

In class we will provide a review of the semantic structure and how this relates to the visual design of the template in class.

### Download the PDF

>[Illustrated page layout & code structure](design-templates/dmc-website-structure.pdf)


---

## Task 3 - Adding your content and metadata

### Add your content

* **Introduction** - 500 words
* **Video - production summary** - 700 words

Use Lorum Ipsum at this stage. 

#### Generate some dummy text

Go to [The Dummy Text generator](https://www.blindtextgenerator.com/lorem-ipsum)

Select:

* Lorem ipsum
* 500 words
* 5 paragraphs
* display `<p>` tags

Cut &amp; paste into your introduction. Repeat with 700 words for the production summary.

### Tag up your content	
Apply html *tags* to your content. Remember to use headings, paragraphs, links, and lists as appropriate to structure your content.	

### Coding tips	
- Only one `<h1>`	
- Headings are about levels of importance. Therefore if each sub-section is of equal importance, they will all be for example `<h2>`.	
- Don't use `<br>` to create space - that's done later with CSS.	
- Create space with `<p>`, don't have big blocks of text (a single paragraph).	
- Use lists and tables if appropriate.	
> **No CSS** - at this point do not apply any CSS. With your browser at mobile size, view your content as you apply the html. Your browser will apply its default styles. The page should display reasonably well with these styles. You will apply you own styling later.  

### Metadata

**Note**: *read this section but don't write the meta data until you have your final page content*.

In the `<head>` of your page you have the three important elements of metadata:	

#### Meta viewport	

```	
<meta name="viewport" content="width=device-width, initial-scale=1">	
```	
For a deeper understanding of the meta viewport tag read the MDN article - [Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag).	

#### The `<title>` element	

`<title>` is not strictly a meta tag, but this is valuable metadata about your page/site. 	
```	
<title>NEVER forget to write a good page title</title>	
```	
Title - The homepage `<title>` should set a content for the whole site. It can be expanded upon in the meta description. This is easy if you are the BBC or Nike, or your name is fairly distinctive (Richard Eskins?). Otherwise this can be tough. Any sub-pages should start *function first*, for example `Contact - Richard Eskins`. To understand the importance of the title read the [the MOZ SEO Guide to the title tag](https://moz.com/learn/seo/title-tag).

**For this portfolio page** the title should reflect who the author is, and the subject of the content.

#### The Meta Description	

As we have previously explained the meta description is usually displayed on the Google results page along with the URL of your site.	
Write a good description that complements and expands on your title.	
```	
<meta name="description" content="Add your meta description here">	
```	
On a homepage the description should reflect the site as a whole. Descriptions between 50–300 characters. For a deeper understanding see [the MOZ SEO Meta Description Guide](https://moz.com/learn/seo/meta-description).

**For this portfolio page** this is a chance to provide more information about your chosen subject, the media and you.

#### A plea from us...	

Neither your title, meta description or your main heading should contain the words *hello* or *welcome*. Please!

## Before you go further

- [Validate your HTML additions](https://validator.w3.org/#validate_by_upload). Fix any problems.

---

## Task 4 - The CSS re-set

### Box sizing

We would like you to add two essential CSS re-sets to `layout.css`.

```
/* box sizing */
```
Find the above comment in `layout.css` and [add the border box model CSS code from this article](https://www.paulirish.com/2012/box-sizing-border-box-ftw/). Copy &amp; paste the code, and save.

You will remember that by default browsers define a box size as `width or height + padding + border` = actual width or height. Applying `box-sizing: border-box;` means the width or height includes any padding and/or border. This tends to make life easier - you want a 200px wide box, that's what you now get. For a more detailed explanation see [Box Sizing explained on CSS Tricks](https://css-tricks.com/box-sizing/).

At the moment this won't make any difference to you page. This comes later. 

### Flexible images

Look for this comment in `layout.css`.

```
/* flexible content images code */
```
Looking at `index.html` in your browser you will have noticed that the images we have provided do not fit (*when your browser window is mobile sized*) and cause an ugly horizontal scroll bar.

To fix this problem add this [flexible image CSS code from Derren's CodePen](https://codepen.io/wilsondmmu/pen/ZvPBgv) to `layout.css`. 

Save the changes to `layout.css` and reload `index.html` in your browser. You will now see that the dummy images we have provided size themselves to the browser window. Whilst this does not deliver true *responsive images* - that would serve different size images to different size screens, it does provide a simple solution.

Remember to add comments as you further develop your CSS to ensure developers (and tutors) understand your workings. The syntax for CSS comments: 

 ```
 /* your comment */
 ```

---

## Task 5 - Selecting and adding Google Fonts

Web Fonts offer a much wider array of options beyond the basic web safe font families. It is now possible to create or buy Web Fonts to enhance the design of your site. Google Fonts provides a free and easy to use option. 

There are some drawbacks. 

- Adding Web Fonts to your page increases the overall download time and *weight* of the page. 
- Fonts can be costly. 
- Free doesn't always mean good. 

We would like you to select either a single Google Font for both your headings and text, or a pair of complementary fonts (one for headings, one for the text). 

Read the [MDN Web Fonts article for much more detail](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts) if you would like a deeper understanding of what web fonts are, and how they are implemented. Please note that by using Google Fonts we are not asking you to download the fonts you are using, as described in the article.

### Selecting and adding your Google Font(s)

- Identify a single font (or font pairing) on [Google Fonts](https://fonts.google.com/): it could be for your headings, for your *body copy*, or for both.

### Help in selecting your fonts

- [Layouts designed with Google Fonts](https://femmebot.github.io/google-type/) 
- [The best Google fonts according to Typewolf](https://www.typewolf.com/google-fonts)

### Apply your selected Google Font(s)

Once you have chosen your font(s), they need to be added to your HTML and CSS.

- Add the Google Font code for your *body copy* to the `<head>` of your `index.html` file, **before the link to** `layout.css`. Repeat this if you have selected a second font.
- Add the font-family CSS rule from Google Fonts to your body rule in `layout.css`.
- By default Google provides the family of the font you have selected and a generic fallback. Insert between these [a suitable web safe font](https://codepen.io/wilsondmmu/pen/ZaJwOy).
- Base font (body) should read - Google font, web safe font, fallback.

Save `layout.css` and view the changes to `index.html` in a browser.

---

[VIDEO - Demonstration of selecting and implementing Google Fonts. ](https://www.youtube.com/embed/0M1HcLQcces)

---


```
/* element styling (e.g. standard p, h1, h2, a, etc) */
```
Find the above comment in `layout.css` and add styles to headings and paragraphs.

> **Remember** that at the moment all of these styles are for your mobile design. If the defaults are working, don't adjust for the sake of it.

- Once you have applied a Google font to the body element, all text will inherit this style (except for the form - more later). Don't reapply the same font to headings or paragraphs in your CSS. 

- If you have selected a second Google Font for headings you will need to apply this (usually to all headings).

```
h1, h2, h3 {
font-family: Google font, web safe font, generic fallback;
}
```
- Add a font-size in rems.
- Remember that 1rem equals the font size of the html element (which for most browsers has a default value of 16px).
- Experiment with the values below, adjusting them to sizes that suit your design.
- For more about the different ways of setting the font size - [CSS Tricks Font Sizes article](https://css-tricks.com/almanac/properties/f/font-size/).

```
h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

p {
  font-size: 1rem;
}

```
Experiment to see what works best for your chosen fonts. Are the paragraphs legible? Are the headings suitably big enough?

> **Remember** we are still mobile size. 


- Next adjust the line-height in your body rule. Adjust to improve the legibility of your text. 

[Read the MDN article on Line Height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) to learn why it is better to use `number` values instead of `length` values  and why a minimum of 1.5 is good for accessibility. 

- Save `layout.css` and check it's working by viewing `index.html` in your mobile size browser. Does it look right? Is it easy to read? 

- Adjust your CSS it until you are satisfied. Ask tutors and friends to take a look.

- Style your header `<h1>` and section `<h2>` headings by changing one or two things about them: font-weight, font-size, color, text-transform: uppercase, letter-spacing etc.

As the project develops you will adjust and enhance these settings. You may spot a *better* font. You will improve your writing and you will undoubtedly add more sophisticated styles. 

> **Remember** that you are always aiming for lean, efficient coding. Don't just keep adding for the sake of it. Make sure (especially in CSS) that you aren't repeating rules for styles already applied.

---

## Task 6 - Selecting a colour scheme

On our [illustration of the layout (pdf)](https://github.com/mmu-webdesign/responsive-web-tutorial/blob/master/design-templates/apprentice-website-structure.pdf) we have alternate grey and white background colours for each section, plus a black background for both the navigation and footer. We would like you to select an appropriate colour scheme for these contrasting areas. This would include colours for:

- Body text
- Headings
- Navigation (background)
- Navigation (text colour)
- Sections (background) - two complementary/contrasting colours
- Footer (background)
- Link colours (all states)

[Research a colour scheme - try coolors.co](https://coolors.co/). 

**Choose one primary colour and use tints and shades of that colour for the backgrounds. You may also want to select an accent colour.**

**Colour contrast** - check that that each colour/tint has a strong contrast with your text colour. Test each section colour by using [Lea Verou's Contrast ratio checker](http://contrast-ratio.com/). You are looking for a AAA (green) pass for each section. 

We will apply the colours next week.

If you want to learn more [read Building Your Color Palette](https://refactoringui.com/previews/building-your-color-palette/). This will help in selecting your palette, including selecting primary and accent colours.

> **Video** - Derren selects the colour scheme for his demonstration site using his magic colour scheme try out machine.

[Link to the Magic Colour Scheme Try Out Machine](https://55060509.webdevmmu.uk/colour-chooser/colour-chooser/acw2.html).


### Colour resources

- [Coolors.co](https://coolors.co/) - a really good colour palette chooser.
- [Adobe colour wheel](https://color.adobe.com/create/color-wheel/) - you may also want to try out this colour tool which helps you come up with colour palettes for your site.
- [CSS for Backgrounds](http://cssreference.io/backgrounds/) - a reference site for all the ways we can control backgrounds in CSS.

## Colour accessibility

You must ensure that you maintain a good contrast between background and foreground colours. You can use a variety of contrast checking tools to ensure that the colours your choose conform to the WCAG (Web Content Accessibility Guidelines) standards and provide sufficient contrast. Read [MDN's article on Colour Contrast](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast).

- [WebAIM Colour Contrast Checker](https://webaim.org/resources/contrastchecker/) 
- [WebAIM Link Contrast Checker](https://webaim.org/resources/linkcontrastchecker/)
- Lea Verou's [Contrast Ratio checker](https://contrast-ratio.com/).


> BBC Gel (Global experience language) has a video that is worth watching as it explains how the accessibility of products we design and develop affect disabled people's lives in a variety of ways. [Video - It's our passion, joy, and responsibility to build a great BBC for everyone](https://www.bbc.co.uk/gel/articles/bbc-for-everyone).

---

## Testing

At the end of this session [validate your HTML](https://validator.w3.org/#validate_by_upload) and [validate your CSS](https://jigsaw.w3.org/css-validator/#validate_by_upload). **Fix any problems**.

---

## Week 2 Checklist

### Are you up to date?

Before you start Week 3 - Have you completed everything?

- Download the template files from GitHub
- Define the site in Visual Studio Code and view the files (`index.html`and `layout.css`)
- Working mobile first - resize your browser
- Review the structure - understand how the design is reflected in the semantic markup.
- [View the full layout PDF](https://github.com/mmu-webdesign/responsive-web-tutorial/blob/master/design-templates/apprentice-website-structure.pdf).
- Add your content to `index.html` and tag it up.
- Validate to check for errors.
- Add the box sizing and flexible image CSS re-sets.
- Select and add your Google fonts.
- Select a colour scheme ready for implementing next week.

And finally:

- Fix any problems before you continue.
- Keep your browser window small - don't use it at full screen yet. We are still *mobile first*.

**End**

[Return to the Top](#contents)