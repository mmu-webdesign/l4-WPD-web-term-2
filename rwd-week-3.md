# RWD Week Three

## Working with layout

### Before you start - Are you up to date?
Before you proceed, use the check list found at the bottom of Week Two. Have you completed everything?

- Fix any problems before you continue.
- Keep your browser window small - don't use it at full screen yet. We are still *mobile first*.

## Contents

* [Task 1 - Adding a responsive column](#Task-1---Adding-a-responsive-column)
* [Task 2 - Add the 'big header'](#Task-2---Add-the-big-header)
* [Task 3 - Background colours](#Task-3---Background-colours) 
* [Task 4 - Styling the footer](#Task-4---Styling-the-footer)
* [Checklist](#Week-3-Checklist)

---

## Task 1 - Adding a responsive column

Use the [CSS styles in this CodePen](https://codepen.io/wilsondmmu/pen/PJQYZG) to create the responsive column of content as illustrated in the lecture. Apply these styles by creating the class `.container-content`.

> What we are attempting to create is a column of content that works well on mobile, and when at desktop sizes, does not become so wide that it creates an uncomfortable reading length.

Add the class and styles to `layout.css` under the comment: 

```
/* main layout */
```

### Adjustments

You might find it useful to **re-apply the red border to everything**. This will help you see what is happening as you make adjustments. The code is:

```
* { border:1px solid red; } 
 ```

#### Padding

Adjust the **padding** whilst your browser window is narrow (mobile size). Padding is going to be important at *mobile* size to keep your content away from the edge of the screen.
```
padding-left: 10px;
padding-right: 10px;
```
Adjust the padding to best fit your font size and layout. 

**Note** this technique makes use of padding rather than margins. Because we are using `Box-sizing: Border-box`, padding is included in the size of our box.

#### Width

**NOTE - BEFORE YOU START:** Adjust the **width** of your browser window to a normal desktop width rather than mobile size.

```
max-width: 600px;
```

*Tune* your `max-width` by using a 65 character line for your typeface. Use this paragraph:  
```
<p>01234567890123456789012345678901234567890123456789012345678912345</p>
```
Drop this paragraph at the top of your *About me* section. *Does it fit or does it wrap?* Adjust the `max-width` value until the paragraph of 65 characters fits across your page without wrapping.

There's more information about why we do this and how it works at this [codepen on font sizing and column widths](https://codepen.io/wilsondmmu/pen/PJdGyE).

>Read this [short article on line length by Matthew Butterick](https://practicaltypography.com/line-length.html).

Finally, check your page at mobile size. Is your font size for text and headings, or your line height causing any issues? Does your content work in this narrow column? Adjust padding or margins as required. **Note** that we will sort out the header and footer soon.

> If your column of content at desktop size looks narrow increase the font size of your paragraph text. Experiment to create a good balance, always checking both mobile and desktop.

You can comment out `* { border:1px solid red; } ` if applied (but it is handy for the next section).

---

## Task 2 - Add the 'big header'

>[This is the CSS code you'll need](https://codepen.io/wilsondmmu/pen/PJReqy).

Copy the relevant code into your stylesheet: the 'class names' should already suit the template. Place under the comment:

`/* page header */` 

```
.page-header {
  background: green;
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
}
```
Swap out `background: green;` with a suitable colour from your palette. This is merely a fallback colour as we will be adding your *hero* image as the background next. 

Make sure the colour you use has good contrast with your header text. **Why?** If your hero image fails to load you want to be sure the text is legible.

Review the remaining styles used to centre our header content. As Phillip Walton says...

>"The lack of good ways to vertically center elements in CSS has been a dark blemish on its reputation for pretty much its entire existence."

What should be simple, has been tricky, until the arrival of Flexbox. [We make use of Phillip's technique](https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/).

```
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
```
We have added `height: 90vh;` to have a height that is independent of the content within it - the content inside this flexbox parent is then centered vertically and horizontally (that's what `align-items` and `justify-content` are doing). As it's `vh` it's always relative to the size of the viewport.

> **Extra** - The [CSS tricks article 'Fun with Viewport Units'](https://css-tricks.com/fun-viewport-units/) provides more information about viewport units.

Next we have styles applied to our container:
```
.header-content {
    max-width: 500px;
    font-size: 1.35rem;
    color: #fff;
    text-align: center;
    padding: 10px;
}
```
We can make the following adjustments.

```
max-width: 500px;
```
- The width can be adjusted to best fit your content. If your header simply contains your name and a short tagline, it may not reach `500px` wide. 

```
font-size: 1.35rem;
```
- This font sizing is being replaced in the cascade. We have more specific styles for our heading and paragraph (if you have a tag line).

You should remove `font-size: 1.35rem` and might consider creating specific styles for the heading. For example:

```
.header-content h1 {
    font-size: 3rem;
    margin-bottom: .5rem;
    line-height: 1;
}
```
This style targets the `<h1>` in the `<header>`. Adjust this style to work on mobile. A smaller value `line-height` is good if your header wraps on mobile and `margin-bottom` ensure a gap is retained between the heading and paragraph.  

### Optional

This final section of code provides a very neat solution for creating a button out of the `<a>` element. **Why?** You may want to add a *call to action*. This may be a direct link to your *about me* section or your audio.

For example, after your heading and tag line:

```
        <div class="header-content">
            <h1>Site title</h1>
            <p>Site subtitle - tag line</p>
```
Add...
```
            <p><a href="#video">Watch my video</a></p>
```

```
        </div>
```

Now add this css to the `/* page header */`
```
.header-content a {
    display: inline-block;
    margin-top: 10px;
    margin-right: 10px;
    padding: 10px 20px;
    background: white;
    color: black;
    border-radius: 0.2em;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
}
```
If you chose to add a *call to action* this way, edit the above as required. If you don't, **you can remove this block of code**.


---

Video - [Call to action button demonstration](https://youtu.be/s1iEaJGeNdM). The video links to a contact form. You could link to any of your media sections.


**Note** - You should have a suitable 'hero' image to add using the CSS background declaration next week.


---

## Task 3 - Background colours

Our portfolio design uses a single page to deliver a variety of content. Whereas in the past this may have been done with a number of separate pages, this technique gives us slick *all in one* design solution.

Commonly colour or images are used to define each section. This ensures that the user (as they travel down the page) feel and notice they are moving from one section to the next.

[See how Apple use backgrounds to define sections on the current Mac page](https://www.apple.com/uk/mac/)  using subtle colours and (often) strong media.

Use your colour scheme to provide contrast between your `<section>`s.

```
/* background colours for sections */
```
Target the specific section classes. 
```
.intro {
    background-color: [ add your colour ];
}

.sound {
    background-color: [ add your colour ];
}

.image-gallery {
    background-color: [ add your colour ];
}

.video {
    background-color: [ add your colour ];
}

.page-footer {
   background-color: [ add your colour ]; 
}

```
Test the colour contrast of your foreground (text) and background colours using [Lea Verou's Contrast Ratio checker](https://contrast-ratio.com). 

> **Note** - this does not mean every section needs to be a different colour. Subtle shades work well. A good tip for students is to think - 'have I ever seen a web page with colours like this before'. If the answer is no, you may need some advice regarding your choice of colours! 

---

## Task 4 - Styling the footer

You are free to style the `<footer>` as you wish. Apply your styles to `layout.css` under the comment:

```
/* footer */
```
A few notes:

Copying and amending previously used `<header>` styles is a great starting point. 

```
.page-header {
  background: green;
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
}
```

It centres our footer content, we can add some height for effect (**NOT `90vh`!**), and we can apply a background colour. Just remember to apply it to `.page-footer` not the `.page-header` class.

If we use a background colour (especially a dark one) then we need to adjust the text colour to ensure good contrast. 

In the footer this also includes link text. When you adjust link colours, remember there are pseudo classes for the five states. These styles should always be in the following order:

```
a:link {

}

a:visited {

}

a:focus {

}

a:hover {

}

a:active {

}
```

> **Note** - Using the code above will apply styles to every link on the page including links in your menu, your text and the footer). 

If these styles are going to be specific to the footer you will need to add the *element selector* to each rule. For example:

```
footer a:link {

}
```
We suggest you read through the example [styling some links at MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links#Styling_some_links). This item provides a good example that you might want to use to get started.

>"When styling links, it is important to understand how to make use of pseudo-classes to style link states effectively, and how to style links for use in common varied interface features such as navigation menus and tabs." 


---

## Testing

At the end of this session [validate your HTML](https://validator.w3.org/#validate_by_upload) and [validate your CSS](https://jigsaw.w3.org/css-validator/#validate_by_upload). **Fix any problems**.

---

## Week 3 Checklist

### Are you up to date?

Before you start Week 4 - Have you completed everything?

- You created a flexible column for the content of your `<section>`s. You have adjusted the `padding`, ``max-width`` and other elements to ensure your content looks good in a mobile viewport, but does not let the line length of your text go beyond (around) 65 characters.
- You should have styled *the big header* by apply the supplied styles, making adjustments as directed.
- We asked you to apply background colours. Undertake careful research to find the right palette that reflects the mood and feel you are trying to reflect in your portfolio site.
- And finally Task 4 asked you to style the footer, providing advice on approaches.

> Test everything at mobile and desktop widths. Fix any problems before you continue.

**End**

[Return to the Top](#contents)
