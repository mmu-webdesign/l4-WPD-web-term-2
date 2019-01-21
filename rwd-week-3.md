# RWD Week Three

## Working with layout

### Before you start - Are you up to date?
Before you proceed use the check list found at the bottom of Week Two. Have you completed everything?

- Fix any problems before you continue.
- Keep your browser window small - don't use it at full screen yet. We are still *mobile first*.

---

## Task 1 - Adding a responsive column

Use the [CSS styles in this CodePen](https://codepen.io/wilsondmmu/pen/PJQYZG) to create the responsive column of content as illustrated in the lecture. Apply these styles by creating the class `.container-content`.

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

Adjust the **width** with your browser window at a normal desktop size.
```
max-width: 600px;
```

*Tune* your `max-width` by using a 65 character line for your typeface. Use this paragraph:  
```
<p>01234567890123456789012345678901234567890123456789012345678912345</p>
```
Drop this paragraph at the top of your *About me* section. *Does it fit or does it wrap?* Adjust the `max-width` value until the paragraph of 65 characters fits across your page without wrapping.

There's more information about why we do this and how it works at this [codepen on font sizing and column widths](https://codepen.io/wilsondmmu/pen/PJdGyE).

Finally, check your page at mobile size. Is your font size for text and headings, or your line height causing any issues? Does your content work in this narrow column? **Note** that we will sort out the header and footer soon.

You can comment out `* { border:1px solid red; } ` if applied (but it is handy for the next section).

---

## Task 2 - Add the 'big header'

[This is the starting code you'll need](https://codepen.io/wilsondmmu/pen/PJReqy).

Copy the relevant code into your stylesheet: the 'class names' should already suit the template. Place under the `/* page header */` comment.
```
.page-header {
  background: green;
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
}
```
Swap out `background: green;` with a suitable colour from your pallete. This is merely a fallback colour as we will be adding your *hero* image as the background next. Make sure the colour you use has good contrast with your text. **Why?** If your hero image fails to load you want to be sure the text is legible.

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
- This font sizing is being replaced in the cascade. We have more specific styles for our heading and paragrpah (if you have a tag line).

You might consider creating specific styles for the heading. For example:

```
.header-content h1 {
    font-size: 3rem;
    margin-bottom: .5rem;
    line-height: 1;
}
```
This style targets the `<h1>` in the `<header>`. Adjust this style to work on mobile. A smaller value `line'height` is good if your header wraps on mobile and `margin-bottom` ensure a gap is retained between the heading and paragraph.  

The final section of code provides a very neat solution for creating a button out of the `<a>` element. **Why?** You may want to add a *call to action*. This may be a direct link to your form - *contact me* or perhaps a request to *download your cv (pdf)*.

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
If you chose to add a *call to action* this way, edit the above as required.

- You should have a suitable 'hero' image to add using the CSS background declaration next week.

VIDEO DEMO OF APPLYING ABOVE, ADDING IMAGE, A FEW VARIATIONS ON WHAT THEY COULD DO WITH TEXT/BUTTONS?

---

## Task 3 - Background colours

Our portfolio design uses a single page to deliver a variety of content. Whereas in the past this may have done with a number of separate pages, this technique gives us slick *all in one* design solution.

Commonly colour or images are used to define each section. This ensures that the user (as they travel down the page) feel and notice they are moving from one section to the next.

[See how Apple use backgrounds to define sections on the current Mac page](https://www.apple.com/uk/mac/)  using subtle colours and (often) strong media.

Use your colour scheme to provide contrast bewteen your `<section>`s.

```
/* background colours for sections */
```
Target the specific section classes. 
```
.about-me {
    background-color: #;
}

.work-experience {
    background-color: #;
}

.image-gallery {
    background-color: #;
}

.contact-me {
    background-color: #;
}
```
Test the colour contrast of your foreground (text) and background colours using [Lea Verou's Contrast Ratio checker](https://contrast-ratio.com). 

---

## Task 4 - Styling the footer

You are free to style the `<footer>` as you wish. Apply your styles to `layout.css` under the comment:

```
/* footer */
```
A few notes:

Copying and amending previously used `<header>` styles is a great starting point. It centres our footer content, we can add some height for effect (**NOT `90vh`!**), and we can apply a background colour. Just remember to apply it to the **footer element** not the `.page-header` class.
```
.page-header {
  background: green;
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
}
```
If we use a background colour (especially a dark one) then we need to adjust the text colour to ensure good contrast. 

In the footer this also includes link text. When you adjust link colours, remember there are pseudo classes for the four states.

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
If these styles are going to be specific to the footer you will need to add the *element selector* to each rule. For example:

```
footer a:link {

}
```
[Further detail on styling links at MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links).

>"When styling links, it is important to understand how to make use of pseudo-classes to style link states effectively, and how to style links for use in common varied interface features such as navigation menus and tabs." 

---

## Testing

At the end of this session [validate your HTML](https://validator.w3.org/#validate_by_upload) and [validate your CSS](https://jigsaw.w3.org/css-validator/#validate_by_upload). **Fix any problems**.

---

## Week 3 Checklist
### Are you up to date?

Before you start Week 4 - Have you completed everything?

- Task 1 created a flexible column for the content of your `<section>`s. You have adjusted the `padding`, ``max-width`` and other elements to ensure your content looks good in a mobile viewport, but does not let the line length of your text fo beyond 65 characters.
- In Task 2 you have styled *the big header* by apply the supplied styles, making adjustments as directed.
- Task 3 asked you to apply background colours. Undertake careful research to find the right palette that reflects the mood and feel you are trying to reflect in your portfolio site.
- Task four asked you to style the footer, providing advice on approaches.