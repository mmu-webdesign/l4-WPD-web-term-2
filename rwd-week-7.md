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


