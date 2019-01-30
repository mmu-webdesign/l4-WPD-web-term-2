# RWD Week Five

## Navigation with Flexbox

## Task - Reviewing the form HTML

Let's start by reviewing the HTML of your form:

```
<form action="https://formspree.io/[your email address goes here]" method="post">
```
For your project we are using the `formspree` service to process input from your form. This would usually be done by scripting but that is beyond this unit. Simple change from:
```
https://formspree.io/[your email address goes here]
```
to...
```
https://formspree.io/fred.bloggs@stu.mmu.ac.uk
```
using your email address of course!

Next we have each input field for our form.
```
<p>
    <label for="contact-name">Your Name</label>
    <input id="contact-name" type="text" name="contact-name" />
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
the screeen reader user would only *hear* the input form, and not the text describing it.

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

Read [Creating Accessible Forms by WebAIM](https://webaim.org/techniques/forms/controls) for a better understanding of the accessibility issues of HTML forms.

Read [MDN's Forms module for more information on all the form elements and attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms).

>This module provides a series of articles that will help you master HTML forms. HTML forms are a very powerful tool for interacting with users; however, for historical and technical reasons, it's not always obvious how to use them to their full potential. 

---

## Task - Styling the form

Start by copyiny the CSS in Derren's [CodePen - FORMS: styling less boring forms](https://codepen.io/wilsondmmu/pen/yMOjra).

Paste the code into `layout.css` under this comment:

```
/* form styling */
```
Let's now review what you've added and make a few amendedments.

### Styling the form `label`

In the CSS you have cut &amp: pasted from CodePen the first styles we address are for the `label` element.

```
form label {
  display: block;
  /* instead of inline */
  padding-bottom: 0.2em;
  padding-top: 1em;
}
```
In the above we target all the `label`'s within our form. Adding `display: block` to change our `label` into a **block level element**, putting it on its own line. We then add a little padding - *adjust this to best fit your design*.

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
Next Derren's code address the issue of inheritance. We've actually done this already as part of your CSS re-set. You can remove these two lines:
```
    /* these elements do not inherit the font-family from the body tag */
  
  font-family: arial, helvetica, sans-serif;
```
Next Derren styles the border - *adjust this to best fit your design*.
```
  /* lighter grey, less visually heavy */
  border: 1px solid #bbb; 
```
And finally Derren implements both `min-width` &amp; `max-width` to ensure the works both on mobile and desktop. *Of course you can amend these to best fit your design but don't stray far from 90%*.
```
  /* make sure our fields aren't too wide or not wide enough */
  min-width: 90%;
  max-width: 90%;
}
```

## Room for improvement

## Validate

## Checklist