# RWD Week Five

## Contents

* [Task 1 - Reviewing the navigation HTML](#Task-1---Reviewing-the-navigation-HTML)
* [Task 2 - Styling the Navigation with Flexbox](#Task-2---Styling-the-Navigation-with-Flexbox)
* [Task 3 - Room for improvement](#Task-5---Room-for-improvement)
* [Checklist](#Week-5---Checklist)

## Task 1 - Reviewing the navigation HTML

A quick reminder of the HTML for our navigation.

```
<nav class="page-nav">
     <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#work">Work Experience</a></li>
        <li><a href="#images">Image Gallery</a></li>
        <li><a href="#contact">Contact Me</a></li>
    </ul>
</nav>
```

We have a simple `unordered list`, containing four list elements, containing links to the four sections of our page.

Everything is contained in the semantic `<nav>` element. This has a class of `page-nav`. 

Yes, we could just target the `nav` element rather than use a class, but on a larger project there will inevitably be more than one `nav`.

---

## Task 2 - Styling the Navigation with Flexbox

There are two approaches to apply these styles. 

**Either** follow the guide below, **applying the styles piece by piece**...

**OR** 

...**by copying &amp; pasting the CSS** from [Derren's Responsive Menu CodePen](https://codepen.io/wilsondmmu/pen/KXRLoW) into `layout.css` and then follow this guide as you read through your CSS.

Either way, add the menu CSS under this comment:
```
/* navigation (using flexbox) */
```

### Reviewing the navigation styles

Add the following comment - a reminder that we are starting by styling mobile first.

```
/* small screen code */
```
### Applying styles to the `<ul>`

```
.page-nav ul {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```

Let's look at this from bottom up. Both
`margin: 0;` and `padding: 0;` *zero out* the margins on our list. 

Then `list-style-type: none;` removes the bullets from our list.

Adding `border-top: 1px solid #ddd;` and `border-right: 1px solid #ddd;` is part of a *clever plan* to add borders to to each of the menu buttons we are creating.  

And then we add `display: flex;` which now means the child items of `<ul>` which are of course all the `<li>` elements are now flex items.

 Now `flex` will by default put each of these flex items in a row. 

And finally by adding `flex-wrap: wrap;` it ensures our *flexible* menu will wrap onto the next line when our screen size is too small to fit all four of our links.

### Applying styles to the `<li>`

Add the following next:

```
.page-nav li {
  flex: 1 1 50%;
  display: flex;
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
}
```

Again, from the bottom, adding `border-bottom: 1px solid #ddd;` and `border-left: 1px solid #ddd;` complete the clever trick that creates a neat border to our buttons. This trick gets around the problem caused if we just add a border to the `<li>` itself. Any time the boxes touch we would have a border double in size.
Next we apply `flex: 1 1 50%;` to determine how this **flexbox** reacts. This style uses the shorthand for `flex-grow`, `flex-shrink` and `flex-basis` combined.

>The `flex-grow` CSS property sets how much of the available space in the flex container should be assigned to that item (the flex grow factor). If all sibling items have the same flex grow factor, then all items will receive the same share of available space, otherwise it is distributed according to the ratio defined by the different flex grow factors. [MDN `flex-grow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow).

In this case `flex-grow` is set to 1, therefore the remaining space in the container will be distributed equally to all children. 

Next is the value for `flex-shrink`, again set to 1. 

>The `flex-shrink` CSS property sets the flex shrink factor of a flex item. If the size of flex items is larger than the flex container, items shrink to fit according to flex-shrink. [MDN `flex-shrink`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink).

The final value is `flex-basis`. 

>The `flex-basis` CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`. [MDN `flex-basis`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis).

Our value of **50%** ensures that we only get two of our buttons per line. This is perfect for mobile. We will change this later as the screen size grows using a *media query*.

Finally, we have applied `display: flex;` to `<li>` which means their children, `<a>` will now also become `flexboxes`.

### Applying styles to the `<a>`

Add the following:

```
.page-nav a {
  padding: 15px 10px;
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  transition: all 0.2s ease;
}
```
We start by adding `padding: 15px 10px;` to the `anchor` elements. Again we apply `display: flex;` so we can continue to control the way everything displays. 

Then applying `text-decoration: none;` removes the lines from under our links.

As with our `header` content, we apply both `align-items: center;` and `justify-content: center;` to get our text into the centre of our button.

Next `flex: 1 1 auto;` applies values for `flex-grow`, `flex-shrink` and `flex-basis`. This time the `flex-basis` is set at `auto` to *automatically* space out the items (in this case the link the text) and  `flex-grow` has a value of `1` to ensure each `<a>` gets the same space.

The last line `transition: all 0.2s ease;` is a simple transition which applies the `hover` we apply in the next style rule.

> You can adjust the transition speed to fit your needs.

### Add a `hover` effect

Next is a simple `hover` effect applying both background and foreground (the font) colours.

Add the following:

```
.page-nav a:hover {
  background: #eee;
  color: #000;
}
```

### Colours

You can apply a background colour for your buttons via `.page-nav li`. You will also need to adjust all `border`s and select a subtle contrasting colour for the `hover` effect.

As with the footer, you may need to target all of the other link states with pseudo links to ensure you have good colour contrast.

Remember they must be in the order `:link — :visited — :hover — :active`.

### Media query for a responsive menu

In its current state our menu looks fine at mobile display sizes. We should have a neat block of four buttons, 2 rows of 2.

As our screen size widens we reach a **breakpoint** where this layout doesn't look right. We've gone for min-width: 760px but you may want to adjust this to match your design.

**Add the media query:**


```
@media screen and (min-width: 760px) {
  .page-nav ul {
    flex-wrap: nowrap;
  }
  .page-nav li {
    flex: 1 1 25%;
  }
}
```
Our media query simply uses the cascade to override `flex-wrap: wrap` with `flex-wrap: nowrap`. Our menu (when the screen size goes past `760px`) now stretches acorss the page in a single row.

The final style rule of `flex: 1 1 25%` applied to each `<li>` element ensures (although it will do this by default) that the `flex-basis` applies an equal **25%** to each button.

### Customise

Test the menu at a variety of screen sizes. Adjust colours, borders and the breakpoint to best fit your design.

---
Video - [Creating a menu with flexbox and media queries](https://youtu.be/PpE_GB2nLsk).

---

## Task 3 - Room for improvement

**Congratulations!** You’ve worked through all the steps to produce a responsive web page.

What happens now?

At this point you need to take stock and review what you’ve done.

In terms of the design, scroll up and down your entire site a few times, and imagine you have never seen it before. If you visited this site for the first time, would you know what it was about? Is the site consistent? Does it communicate something about this person? Do the images work well with your overall colour scheme?

Check the metadata in your HTML page: would it help someone find you if they Googled your name? Location? Occupation? Hobbies?

Your CSS should be nearly complete. Is it readable, and logically ordered? Have you commented your code so that another developer could understand what you've done and why? (You don’t have to comment every single line, but commenting helps to separate sections and describe complex code) Are your breakpoints consistent?

Test and validate your work and fix any errors. Test your site in as many devices as you can find, using tools like [prepros.io](https://prepros.io/) or the [responsive device mode in Chrome](https://developers.google.com/web/tools/chrome-devtools/device-mode/) or the similar [responsive device viewer in Firefox](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode).

At this point you should be critical about your work: is it as good as you can make it? How well does it measure up to other websites you use on a daily basis? What are the differences between what you’ve done and what professional websites look like? 

## Testing

At the end of this session [validate your HTML](https://validator.w3.org/#validate_by_upload) and [validate your CSS](https://jigsaw.w3.org/css-validator/#validate_by_upload). **Fix any problems**.

### A note about browsers

If you check in enough browsers (e.g. really old versions of Internet Explorer) you will notice some issues with the layout, as older browsers either don’t support some of the code we’ve used or interpret it incorrectly. **Do not worry about this**. Thanks to the hard work of many web developers over the last decade the latest versions of all web browsers actually do a pretty good job of supporting the modern techniques we are using. 

We will be viewing your site in the latest version of Chrome, Firefox or mobile Safari when we assess it, and will be able to distinguish between browser bugs – which we don’t expect you to try and fix – and mistakes in your code that should have been caught in your validation and checking – which we do expect you to have removed before you submit your work to us.

## Week 5 - Checklist

- Task 1 reviews the navigation HTML - make sure you understand this before applying the CSS.
- Task 2 styles the navigation with Flexbox.
- Task 3 improvements.

And finally:

- Fix any problems before you continue.

### Are you up to date?

[Return to the Top](#contents)
