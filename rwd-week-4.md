# RWD Week Four

## Adding your media

## Task 1 - Edit `page-header`

In the previous class we provided the CSS for the large page header. You may have adjusted this already, especially the background colour.

```
.page-header {
  background: green;
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
}
```
Let's break this down, improve the code and then add our hero image.
```
.page-header {
  background: green;
```
Lets define this clearer. Whilst `background` can be used as the shorthand, as we are only defining one value (the colour) let's do this properly. Change to `background-color`.
```
background-color: #ADD YOUR COLOUR;
```

Next we create a flexbox by applying `display-flex`. 
```
display:flex;
```
 This creates a flexbox. We are applying it to `.page-header` therefore flex is applied to the child. In this case the `<div>` named `.header-content` is the child and becomes a flexbox. In this example we are then using the flex properties to centre our title and tag line. *More about this later*.

We then use the viewport height to create a larger header. 

```
height: 90vh;
```
At `90vh` our header is using 90% of the height of the browser window on the device we are viewing the page. The problem with `90vh` is that on most devices it fills to the bottom of the browser window. It's always good to show something of the rest of the page to your user. 

**Experiment to see that works for you. Start with:**

```
min-height: 40vh;
```
 **Note** - we've changed to `min-height` to future-proof our CSS - if you use height it'll get cut off if the content gets longer than its container. That situation will probably never happen, but better safe than sorry.

Finally we are applying the following to our flexbox.

```
  align-items: center;
  justify-content: center;
 ```
Both of these are sub-properties of flexbox. **Understand** that they are being applied to the flexbox (and the things inside it) - in our case the `.header-content` is the flexbox and therefore the `<h1>` and `<p>` tags that are being influenced by these properties and values. These properties place our header and tag line smack in the middle of our box.

**Note** - In the past it has been very difficult to simply centre items on a page with CSS. These flex properties suddenly make it a lot easier.

If you want to know more about what is going on read the following articles on CSS Tricks.

- `align-items`

>It defines the default behaviour for how flex items are laid out along the cross axis on the current line. You can think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).

See [https://css-tricks.com/almanac/properties/a/align-items/](https://css-tricks.com/almanac/properties/a/align-items/)

- `justify-content`

>It defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

[https://css-tricks.com/almanac/properties/j/justify-content/](https://css-tricks.com/almanac/properties/j/justify-content/)

---

## Task 2 - adding our *hero* image

You need a large image added to your site in an images or media folder. The image needs to be high quality, but that does not mean just use the 3Mb (or larger) file from your camera.
- Resize your image to 3000 pixels wide (this ensures high quality on the best screen). The height should remain relative.
- Optimize your image for the web. At these dimensions it may still be hundreds of kbs.

You can return to this and adjust size and optimisation later.

Insert your image to the class `.page-header `.

```
background-image: url(../images/my-hero.jpg);
```

Obviously use the name of your file. Save and test.

Apply for safety...

```
background-repeat: no-repeat;
```
Then apply the background-size property.

```
background-size: cover;
```

Save and review. How is your *hero* looking?

For more details -  [CSS Trick article on background-size](https://css-tricks.com/almanac/properties/b/background-size/).

And finally read up on background-position on MDN. You then need to decide what position works best for your image/design.

Select either `bottom`, `center`, `left`, `right` or `top`. Or adjust with percentage or length volues.

Perhaps start with `center`.

```
background-position:center; 
```

### Additional notes

- If you are struggling to create a high quality hero image (you really should try) - you can download and use [a free hero image from Unsplash](https://unsplash.com/search/photos/hero-image). 
- You can [resize the big header image](http://www.simpleimageresizer.com/) and [compress the image](https://tinyjpg.com/) without necessarily needing Photoshop or [Figma](https://www.figma.com).
- Remember to keep the full size original image.
- *Alt text* - background images do not have (or need) alt text. However, that means you should not *hide* anything in the image you need your user to read.

---

## Task 3 - Background blend mode

One problem of adding a background image to our header is that the text (our heading and tagline) often gets lost. 
There are a number of clever ways to get around this issue. The first is to simply make the text colour white (or black if the image is pale). The other is to adjust the size of your heading and tagline.

You already have the following CSS fo your `.header-content`.

```
.header-content {
    max-width: 500px;
    font-size: 1.35rem;
    color: #fff;
    text-align: center;
    padding: 10px;
}
```
- Adjust `max-width` as fits your design.
- `font-size: 1.35rem;` can be removed. It's already being trumped in the cascade as he have `font-size` defined for `<h1>` and `<p>` already in our CSS. We can target these particlar items in a minute.
- Change `color` if required. You can also remove it and later specify different colours for the heading and paragraph if needed.
- 




INSERT - DEMO VIDEO OF ABOVE.

INSERT - WE NEED VIDEOS OF BOTH OF THESE PROCESSES FOR THE FIRST TERM ANYWAY. ALSO NEED A VIDEO OF SAVE FOR THE WEB PROCESS IN PHOTOSHOP.

- Style the text of your header. Think about font size, spacing, font weight.

SHOULD WE ADD TEXT SHADOW OR SUCH AS AN OPTION? OR DO WE HAVE A LINK OR TWO OF DIFFERENT TECHNIQUES?

- Test your header by changing the size of the browser window.

ARE WE GOING TO SUGGEST A DIFFERENT SIZE FOR LARGER SCREENS? OR DO WE ADD THIS LATER?

## Contrast &amp; Blend mode

## Gallery using Flexbox

including then adding personal images, optimisation, alt text, figure and fig caption.

un-centre captions.

## Validate

## Checklist

