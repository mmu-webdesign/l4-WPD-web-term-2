# RWD Week Five

## Contents

* [Task 1 - Reviewing the navigation HTML](#Task-1---Reviewing-the-navigation-HTML)
* [Task 2 - Styling the Navigation with Flexbox](#Task-2---Styling-the-Navigation-with-Flexbox)
* [Task 3 - Reviewing the form HTML](#Task-3---Reviewing-the-form-HTML) 
* [Task 4 - Styling the form](#Task-4---Styling-the-form)
* [Task 5 - Room for improvement](#Task-5---Room-for-improvement)
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

## Task 3 - Reviewing the form HTML

Let's start by reviewing the HTML of your form:

```
<form action="https://formspree.io/[your email address goes here]" method="post">
```
For your project we are using the `formspree` service to process input from your form. This would usually be done by scripting but that is beyond this unit. 

Simply change from this...

```
https://formspree.io/[your email address goes here]
```
To this, using your email address of course!

```
https://formspree.io/fred.bloggs@stu.mmu.ac.uk
```


Next we have each input field for our form.
```
<p>
    <label for="contact-name">Your Name</label>
    <input id="contact-name" type="text" name="contact-name">
</p>
```
You can see visually in your browser how the label *Your name* sits by the relevant field. We wrap our label in the `<label>` element rather than a paragraph or such for better accessibility.

When a screen reader user enters *forms mode* to use a form and enter data, because we are using `<label>` the screen reader understands the relationship between our label and form. The relationship is established by the `for="contact-name"` and `id="contact-name"` attributes.

If we missed out the `<label>` element and these attributes, 
```
<p>
    Your Name
    <input id="contact-name" type="text" name="contact-name" />
</p>
```
the screen reader user would only *hear* the input form, and not the text describing it.

It is also the same if you replace the label with *placeholder* text. 
```
<p>
    <input id="contact-name" type="text" name="contact-name" placeholder="Your Name" />
</p>
```

Whilst this looks cool, again a screen reader cannot *see* this text in forms mode.

Read [Eric Bailey's article Don’t Use The Placeholder Attribute](https://www.smashingmagazine.com/2018/06/placeholder-attribute/) for more detail.

### Form `<input>` types

Each of our `<input>` elements have different **types attributes**. These were introduced in **HTML5** and are what, on your phone, changes to the relevant keyboard for phone numbers or email addresses. 

```
<input id="contact-name" type="text" name="contact-name" />`
```
- `type="text"` - [A single-line text field. Line-breaks are automatically removed from the input value. MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)

```
<input id="contact-email" type="email" name="contact-email" />
```

- `*type="email"` - [A field for editing an e-mail address. MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)

```
<input id="contact-phone" type="tel" name="contact-phone" />
```

- `type="tel"` - [A control for entering a telephone number. MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel)

For information on all  [Form `<input>` types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) see MDN.

### The `textarea` element

Our next form element is a `textarea` rather than `input` element.
```
<textarea id="contact-message" name="contact-message" rows="5"> </textarea>
```
>The HTML `<textarea>` element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form. [MDN `<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

### The `submit` type value

Our form's final `input type` has the value of `submit`. 

```
<input type="submit" value="send my message" /> 
```
>`<input>` elements of type submit are rendered as buttons. When the click event occurs (typically because the user clicked the button), the user agent attempts to submit the form to the server. [MDN `<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit)

### Additional information

Read [MDN's Forms module for more information on all the form elements and attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms).

>This module provides a series of articles that will help you master HTML forms. HTML forms are a very powerful tool for interacting with users; however, for historical and technical reasons, it's not always obvious how to use them to their full potential. 

---

## Task 4 - Styling the form

Start by copying the CSS in Derren's [CodePen - FORMS: styling less boring forms](https://codepen.io/wilsondmmu/pen/yMOjra).

Paste the code into `layout.css` under this comment:

```
/* form styling */
```
Let's now review what you've added and make a few amendedments.

### Styling the form `label`

In the CSS you have cut & pasted from CodePen the first styles we address are for the `label` element.

```
form label {
  display: block;
  /* instead of inline */
  padding-bottom: 0.2em;
  padding-top: 1em;
}
```
In the above we target all the `label`s within our form. Adding `display: block` to change our `label` into a **block level element**, putting it on its own line. We then add a little padding - *adjust this to best fit your design*.

### Styling `input` &amp; `textarea`

Next we apply styles to our input boxes.

```
form input,
form textarea {
  padding: 0.4em 0.3em;
```
First we have added some padding - *adjust this to best fit your design*.

Next we can adjust the font size for the text we type inside our form input boxes - *adjust this to best fit your design*.

```
  font-size: 1.5em;
```
Next Derren's code addresses the issue of inheritance. We've actually done this already as part of your CSS re-set. You can remove these two lines:
```
    /* these elements do not inherit the font-family from the body tag */
  
  font-family: arial, helvetica, sans-serif;
```
Next Derren styles the border - *adjust this to best fit your design*.
```
  /* lighter grey, less visually heavy */
  border: 1px solid #bbb; 
```
You could also round/smooth the corners of each input box. **Insert the following at this point** and *adjust amount to best fit your design*.

```
border-radius: 0.2em;
```

And finally Derren implements both `min-width` &amp; `max-width` to ensure the works both on mobile and desktop and makes better use of the space available.

 *Of course you can amend these to best fit your design but don't stray far from 90%*.
```
  min-width: 90%;
  max-width: 90%;
}
```
### Styling `submit` - the button

Our selector uses an `attribute` selector to target `submit` (otherwise we would be apply these styles to all `input` elements).

```
form input[type="submit"] {
```
>The CSS attribute selector matches elements based on the presence or value of a given attribute. [MDN Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors). 

A nifty method of targeting your CSS at specific elements, with specific attributes.

Next we apply a `min-width` of zero to our button. Without this our button will stretch to fill the space available like the rest of the form `input` fields.
```  
min-width:0;
```
Then we have a variety of styles for our button. **You must adjust these to best it your design**.

```
  background-color: #d30;
  border: 0;
  border-radius: 0.2em;
  padding: 13px 30px;
  margin-top: 10px;
  /* top and bottom, left and right */
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
```

And finally we implement a less jarring transition from initial colour to hover colour (applied in the next style rule).

```
  transition: background-color 0.2s ease;
}
```
Again, adjust the speed of transition.

>The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes. [MDN transition-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay).

### Adding a `hover` to the `submit` button

Finally we make a subtle change of colour for the hover state of our button.
```
form input[type="submit"]:hover {
  background-color: #c30;
}
```
*Adjust the colour to complement your button colour*. You don't have to change the colour too much for hover states - just make it a little bit lighter or darker.

**Customise the form to complement your design**. Ensure it remains accessible. Ensure the labels stay in place (even if you change the actual text). Tab order - test by tabbing through your form - does it move in a logical order, from box to box to submit?

---

**Video** - [Styling form fields - a full demonstration of the above CSS](https://youtu.be/G0K-k-vdvQQ).

---

### Additional information

Read [Creating Accessible Forms by WebAIM](https://webaim.org/techniques/forms/controls) for a better understanding of the accessibility issues of HTML forms.

[More information on styling forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Styling_HTML_forms) from MDN.

## Task 5 - Room for improvement

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
- Task 3 reviews the form HTML elements and attributes.
- Task 4 applies styles to the form.
- Task 5 improvements.

And finally:

- Fix any problems before you continue.

### Are you up to date?

[Return to the Top](#contents)
