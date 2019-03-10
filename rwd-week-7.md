DTS students · Introduction to Web Development unit  
# Adding the JavaScript

## Adding the time-based message code

* The [initial state of the code is available on this codepen](https://codepen.io/wilsondmmu/pen/43ef68f25d5275d02fa51d9e0298b419).
* There are two ways of adding the initial code, inline or as a separate JavaScript file

### Adding the code inline

* Go to the bottom of your HTML page (JavaScript cannot be added to CSS files)
* Just before the ending `<body>` tag, create a `<script></script>` tag
* Go to the codepen above
* Copy the code in the JS box
* Paste this code in between the `<script>` and `</script>` tag
* Refresh the HTML page: the code should now run.

### Adding the code as a separate file

* Go to the bottom of your HTML page (JavaScript cannot be added to CSS files)
* Just before the ending `<body>` tag, create a `<script src=""></script>` tag
* Create a folder to hold your JavaScript file (usually named `js`)
* Create a new file in your text editor
* Go to the codepen above
* Copy the code in the JS box
* Paste the JS code into your new file in your text editor
* Save the code with a sensible filename and a .js file extension, e.g. `time.js`
* Go to your HTML and in the `<script src=""></script>` add the path to your file
* In this example it would look like this: `<script src="js/time.js"></script>`
* Refresh the HTML page: the code should now run.

### Problems you may run into

* Old browsers might not run this code: if so, update your browser if possible
* Internet Explorer may not run the code if the HTML page is not online: Chrome and Firefox seem to be fine
* Don't add this code to the `<head>` of your page, as the DOM needs to be created before the code can work correctly
* Remember you have the console available in the web developer inspector in Chrome and Firefox to help if you are having problems - check the network tab and the console tab for errors.

### Things to try

* Change the message
* Change the hours
* Think about what might happen if the site visitor is not in the same country as you
* Add more options
* Anything else you think might be of use to a site visitor: just make sure that you are progressively enhancing the page, and that users without JavaScript won't be unduly penalised compared to users who do have JavaScript turned on.

## Adding the button code

### Implementing the code

Adding this piece of functionality does require you to add code to your HTML, CSS and JavaScript - but take it slowly and it'll be fine.

### Changes to make to the HTML

In your form section (`.contact-me`):
* For each form field (e.g. `<input id="contact-name" type="text" name="contact-name" />`) add the single word 'required', like so `<input id="contact-name" type="text" name="contact-name" required />`
* Add the same `required` attribute to the textarea as well
* For the phone number, you may wish to add a 'pattern' attribute, which looks like this: `pattern="[0-9 ()+]*"`. The `pattern` attribute only allows users to type in the characters in the quotes. In English, this pattern says - you can only type in the numbers 0 to 9, smooth brackets, a space, or a plus sign (but you can type as many of all of those as you want to).

### Changes to make to the JavaScript

* If you are working inline, just [go to the codepen](https://codepen.io/wilsondmmu/pen/rRmGNV?editors=1010) and cut and paste the code in after last week's
* If you are working with a separate file, either add this week's code to that code, or create a new file as above and link it in to your HTML in the same way.

### Changes to make to the CSS

* You can see the CSS I've used in the codepen CSS box - it looks like this:

``` form input[type="submit"].js-disable-button 
{
color:grey; 
padding-left: 24px; 
background:white url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/923354/Rolling-1s-18px.gif) left center no-repeat;
} 
```
* When the JavaScript adds the class, the CSS will pick it up and restyle the button using the code above.
* The animated gif spinner is the long `amazonaws` URL in the background code line. We will make more spinners available so you can find one to fit your design.

### How to test everything is working

* Try filling all but one of the form fields and clicking 'submit' - it should give you a message to say 'please fill in this field' next to the missing information
* Try messing up the email address - it shouldn't allow you to send the form without a valid email address
* Try messing up or typing text into the phone field - it shouldn't allow you to do this
* The line that says `return true;` in the JavaScript: temporarily change this to `return false;` and fill the form in correctly. The button will then change as if the form is being sent but nothing will happen, so you can check your button styling.
