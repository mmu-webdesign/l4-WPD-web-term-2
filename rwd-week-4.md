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

>It defines the default behaviour for how flex items are laid out along the cross axis on the current line. You can think of it as the justify-content version for the cross-axis (perpendicular to the main-axis). [`align-items` property on CSS Tricks](https://css-tricks.com/almanac/properties/a/align-items/).

- `justify-content`

>It defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line. [`justify-content` property on CSS Tricks](https://css-tricks.com/almanac/properties/j/justify-content/).

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

>The background-blend-mode CSS property sets how an element's background images should blend with each other and with the element's background color. [`background-blend-mode` on CSS Tricks](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode)

We can use a combination of the hero image and the background colour to provide a better platform for your title and tag line.

Add `background-blend-mode` to the class `.page-header`.

```
background-blend-mode: multiply;
```
Now adjust your page header `background-color` to get a blend that works for both your hero image and your design.

You can also try out a number of the *blend modes*. Some work better than others. This [CodePen from CCS Tricks illustrates the differences](https://codepen.io/team/css-tricks/full/GgavOP). Read the full [background-blend-mode article](https://css-tricks.com/almanac/properties/b/background-blend-mode/) for more detail.

---

## Task 4 - The `header-content`

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
- `text-align: center;` centres our content. **Note** that if your *tag line* is more than a line or two long that you should consider applying a more specific style (see below) to left align for better readability.
- Apply `padding` as fits your design. 

**Tip** - adding `border: 1px solid red;` to this class may help you see how both `max-width` and the `padding` is working as you adjust them.

### Getting specific

You can target your heading and tagline with more specific styles.

```
.header-content h1 {
    font-size: 3rem;
}

.header-content p {
    font-size: 1.5rem;
}

```
You could adjust things like `font-size`, `color`, `padding-bottom`, `line-height` (if your heading wraps on mobile and there is a big gap between the words) and others that enhance your design. 

### Adding the `text-shadow` property

The text-shadow property can help enhance the visibility of our headline text.

There are two methods:

```
.header-content h1 {
    font-size: 3rem;
    text-shadow: 2px 2px 0 #000; 
}
```
>The first two values specify the length of the shadow offset. The first value specifies the horizontal distance and the second specifies the vertical distance of the shadow. The third value specifies the blur radius and the last value describes the color of the shadow - [CSS Text Shadow on CSS Tricks](https://css-tricks.com/snippets/css/css-text-shadow/)

Second - for a more subtle approach you can use rgba colours with our `text-shadow`.

```
.header-content h1 {
    font-size: 3rem;
    text-shadow: 0 0 10px rgba(0,0,0,0.5);
}
```

You can apply either of these techniques to your tagline paragraph as well. Adjust `offset`, `blu` and `shadow colour` to best fit you design.


---

**Video** - [Derren demonstrates the various properties applied to our page header](https://youtu.be/2W-epxO_Xvs)  including the hero image, `text-shadow` and `background-blend-mode`.

**CodePen** - View Derren's CodePen - [Tuning your background to suit your site](https://codepen.io/wilsondmmu/pen/ZwEvLo) for a demonstration of both `text-shadow` and `background-blend-mode`.

---

## Task 5 - Using `figure` &amp; `figcaption`


You already have the following structure for your image gallery.

```
<section id="images" class="image-gallery container">
  <div class="container-content">
    <h2>Image Gallery</h2>
    <div class="image-container">

    </div>
  </div>
</section>
```
Inside the `image-container` you currently have  **three** `<div class="an-image">` divs containing the dummy images.

```
<div class="an-image">
    <img src="https://unsplash.it/600">
        <div class="image-caption">
             <p>A caption for your first image.</p>
        </div>
</div>
```

We would like you to remove these divs and replace them with two semantic elements. The `figure` and `figcaption` elements. Whilst `class="an-image` gives us a hook to style, the actual `div` has no semantic meaning. Using both `figure` and `figcaption` provides some meaning to these elements of the page. 

>The HTML `<figure>` element represents self-contained content, frequently with a caption (`<figcaption>`), and is typically referenced as a single unit.

The code you need for each of your images is as follows:

```
<figure class="an-image">
    <img src="images/your-file.jpg" alt="Relevant alt text" />
        <figcaption class="image-caption">
          <p>Your 150 word caption.</p>
        </figcaption>
</figure>
```
- Repeat the above for each of your three images.
- Adjust the file name and paths for your own images.
- Add your captions when available.

See the HTML in [Derren's image gallery CodePen](https://codepen.io/wilsondmmu/pen/mvVWVj) for reference.

Read MDN articles for more information on the [`<figure>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) and [`<figcaption>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption).

---

## Task 6 - Introduction to media queries

Get a basic overview of [How media queries work in your CSS](https://www.youtube.com/watch?v=1Zaz51J4Sv0) from Derren's Video.

### MDN Resources

For more information.

- [`min-width` demonstration](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
>The min-width CSS property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.
- [`max-width` demonstration](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
>The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.

- [Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
>Media queries are useful when you want to modify your site or app depending on a device's general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width).

---

## Task 7 - A responsive image gallery










---

## Testing

At the end of this session [validate your HTML](https://validator.w3.org/#validate_by_upload) and [validate your CSS](https://jigsaw.w3.org/css-validator/#validate_by_upload). **Fix any problems**.

---

## Week 4 Checklist
### Are you up to date?

