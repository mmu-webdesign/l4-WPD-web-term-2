# RWD Week Four

## Adding your media

## Contents

* [Task 1 - Review `page-header`](#Task-1---Review-page-header)
* [Task 2 - Adding our *hero* image](#Task-2---adding-our-hero-image)
* [Task 3 - Background blend mode](#Task-3---Background-blend-mode) 
* [Task 4 - The `header-content`](#Task-4---The-header-content)
* [Task 5 - Using `figure` and `figcaption`](#Task-5---Using-figure-and-figcaption)
* [Task 6 - Introduction to media queries](#Task-6---introduction-to-media-queries)
* [Task 7 - A responsive image gallery](#Task-7---A-responsive-image-gallery)
* [Checklist](#Week-4-Checklist)

---

## Task 1 - Review `page-header`

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
Lets define this more clearly. Whilst `background` can be used as the shorthand, as we are only defining one value (the colour) let's do this properly. 

Edit your CSS - Change to `background-color`.
```
background-color: #ADD YOUR COLOUR;
```

Next in our CSS is `display-flex`. 

This creates a flexbox. We are applying it to `.page-header` therefore flex is applied to the child. In this case the `<div>` named `.header-content` is the child and becomes a flexbox. In this example we are then using the flex properties to centre our title and tag line. *More about this later*.

We are then using the viewport height (`height: 90vh`) to create a larger header. 

At `90vh` our header is using 90% of the height of the browser window on the device we are viewing the page. The problem with `90vh` is that on most devices it fills to the bottom of the browser window. It's always good to show something of the rest of the page to your user. 

**Experiment to see that works for you. Start with:**

```
min-height: 40vh;
```
 **Note** - we've changed to `min-height` to future-proof our CSS - if you use height it'll get cut off if the content gets longer than its container. That situation will probably never happen, but better safe than sorry.

Finally we have applied `align-items: center` and `justify-content: center` to our flexbox.


Both of these are sub-properties of flexbox. **Understand** that they are being applied to the flexbox (and the things inside it) - in our case the `.header-content` is the flexbox and therefore the `<h1>` and `<p>` tags that are being influenced by these properties and values. These properties place our header and tag line smack in the middle of our box.

In the past it has been very difficult to simply centre items on a page with CSS. These flex properties suddenly make it a lot easier.

If you want to know more about what is going on read the following articles on CSS Tricks.

#### `align-items`

>It defines the default behaviour for how flex items are laid out along the cross axis on the current line. You can think of it as the justify-content version for the cross-axis (perpendicular to the main-axis). [Article - `align-items` property on CSS Tricks](https://css-tricks.com/almanac/properties/a/align-items/).

#### `justify-content`

>It defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line. [Article - `justify-content` property on CSS Tricks](https://css-tricks.com/almanac/properties/j/justify-content/).

---

## Task 2 - adding our *hero* image

You need a large image added to your site in an images or media folder. The image needs to be high quality, but that does not mean just use the 3Mb (or larger) file from your camera.
- Resize your image to 3000 pixels wide (this ensures high quality on the best screen). The height should remain relative.
- Optimize your image for the web. At these dimensions it may still be hundreds of kbs. If it is 1mb or more it is probably too big and can be further optimised.

You can return to this and adjust size and optimisation later.

Insert your image to the class `.page-header `.

```
background-image: url(../images/my-hero.jpg);
```

> **Image path** - the path above drops out of the css folder (`../`) which takes you back to the root. It then moves up into the `images` folder to find the hero image. There are other ways of writing paths - use this one - it keeps everything relative to the root of your site and will work when you hand it over for marking. 

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
How you position your hero image will depend on the image you have chosen and the positioning of your heading and tag line. Experiment with a few images if you can.

### Additional notes

> Before you start - Remember to keep the full size original image. Edit and optimise a copy.

- Squoosh is an excellent online image optimisation tool. [Visit squoosh.app](https://squoosh.app) to resize and compress your images.
- There are some more online tools to both [resize the big header image](http://www.simpleimageresizer.com/) and [compress the image](https://tinyjpg.com/) without necessarily needing Photoshop or [Figma](https://www.figma.com).
- *Alt text* - background images do not have (or need) alt text. However, that means you should not *hide* anything in the image you need your user to read.

If you haven't yet sorted an original high quality hero image (you really should try) - you can download and use [a free hero image from Unsplash](https://unsplash.com/search/photos/hero-image). 

For the final submission we expect your own, original images for this assignment.

---

## Task 3 - Background blend mode

>The background-blend-mode CSS property sets how an element's background images should blend with each other and with the element's background color. [`background-blend-mode` on CSS Tricks](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode)

We can use a combination of the hero image and the background colour to provide a better platform for your title and tag line.

Add `background-blend-mode` to the class `.page-header`.

```
background-blend-mode: multiply;
```
Now adjust your page header `background-color` to get a blend that works for both your hero image, your heading and tagline, and your design.

You can also try out a number of the *blend modes*. Some work better than others. This [CodePen from CCS Tricks illustrates the differences](https://codepen.io/team/css-tricks/full/GgavOP). Read the full [background-blend-mode article](https://css-tricks.com/almanac/properties/b/background-blend-mode/) for more detail.

Have a play with the options. Ultimately you can leave out the blend if it doesn't work for you.

---

## Task 4 - The `header-content`

One problem of adding a background image to our header is that the text (our heading and tagline) often gets lost. 
There are a number of clever ways to get around this issue. The first is to simply make the text colour white (or black if the image is pale). This is so obvious but many fail to implement this simple solution.

The other simple method is to adjust the size of your heading and tagline.

> Once you've mastered media queries you could for example make your header text much bigger on desktop sizes.

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
- `font-size: 1.35rem;` should already have been removed as it's  being trumped in the cascade as we have `font-size` defined for `<h1>` and `<p>` already in our CSS. We can target these particular items in a minute.
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
You could adjust things like `font-size`, `color`, `padding-bottom` and `line-height` (if your heading wraps on mobile and there is a big gap between the words) and others that enhance your design. 

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

**Articles** - As usual, CSS tricks has a number of articles that show you how to take this further:

- [Design Considerations: Text on Images](https://css-tricks.com/design-considerations-text-images/)
- [Methods for Contrasting Text Against Backgrounds](https://css-tricks.com/methods-contrasting-text-backgrounds/)

---

## Task 5 - Using `figure` and `figcaption`


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

We would like you to remove these divs and replace them with two semantic elements. 

The `figure` and `figcaption` elements. 

Whilst `class="an-image` gives us a hook to style, the actual `div` has no semantic meaning. Using both `figure` and `figcaption` provides some meaning to these elements of the page. 

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

### Figure
Using `<figure>` provides a semantic structure for what is described as *self contained content*.

```
<figure class="an-image">

</figure>
```



### Figcaption
MDN describes `<figcaption>` as 'a caption or legend describing the rest of the contents of its parent `<figure>` element'.

```
<figcaption class="image-caption">

<p>Your 150 word caption.</p>

</figcaption>

```



- Add your captions when available.

Read MDN articles for more information on the [`<figure>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) and [`<figcaption>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption).

---

## Your gallery images

> Your own images should be fully optimised ready for the web, and sat in the images folder. Optimised means cropped, resized and compressed as best fits you and your users needs.

**Don't have your images yet?** Continue to use Usplash -  `<img src="https://unsplash.it/600">`

### How big should my gallery images be?

You gallery images need to be *as wide as the largest size they need to be*. 

**What does that mean?** 

On this project it means the width of your images will be dictated by the largest size you are going to display them at. 

As we implement our gallery using `flexbox` (see below) you will have three images across the screen (at desktop size) and in a single column on mobile. 

For some, the images may be largest on desktop sizes, but for many it will be on mobile. For example, if the image is never displayed wider than 800px, resize the actual image to 800px width.

#### Image optimisation

Once you have your images at the correct dimensions you should optimise each image to improve download speeds. **And don't forget** the `alt` text for each image. 

See the HTML in [Derren's image gallery CodePen](https://codepen.io/wilsondmmu/pen/mvVWVj) for reference.


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

With adjustment of margins and padding (more to come below) and the use of `max-width: 100%;` in the images, our gallery will happily work in a single column on mobile.

We are now going to make adjustments with media queries and the use of flexbox in our CSS to ensure our gallery also displays well at larger screen sizes.

Add following CSS to `layout.css` at this point:

```
/* image gallery media queries and size overrides */
```
Start by adding the usual red border but only to the gallery section so you can see the area we are dealing with.

```
.image-gallery {border:1px solid red;}
```
Save and view your page (mobile size). The whole gallery should be within a red border.

If you now stretch out your browser window to desktop size you will see that your gallery, because it (like all the other sections) wraps the content with `<div class="container-content">` has a `max-width` that you have already defined.

As we want our gallery to make more use of the screen space we should make the gallery section wider. Add the following:

```
.image-gallery .container-content {
    max-width: 1200px;
}
```
Save and review your page. At desktop size the gallery now uses more space across the page than the rest of your content. We've chosen a `max-width` of `1200px` as it will later give us room to display our gallery in three boxes across the page. You can adjust this as best fits your design later.

>**Note** - Quite often we find students end up with very small images and/or a small gallery. MAKE USE OF THE SPACE AVAILABLE. 

Use the following to centre the section header.

```
.image-gallery h2 {
    text-align: center;
}
```
Save and view.

By default our `<figure>`s have margins all around. We can target and remove these by applying `margin: 0;` to all the `figure`'s with a class of `.an-image`. 

```
.image-gallery .an-image {
    margin: 0;
}
```
Save and view.

Resize your page back to a mobile size. Check your page. We can now add a little padding to our captions. Adding a little padding on the top of the caption to push the text away from the image above. Zero padding on the right, 50px on the bottom (to create space before the next image), and zero on the left.

```
.image-gallery .image-caption {
    padding: 8px 0 50px 0;
}
```
Save and review your page (mobile size). Make adjustments as best fits your design. **You should now have a gallery that works well on mobile**.

Remove `.image-gallery {border:1px solid red;}`

### Adding our breakpoint

Add the media query.
```
@media screen and (min-width: 500px) {
    .image-gallery .image-container {
        border:1px solid red;
    }
}
```
Save and review your page. At mobile size there should be no *red border*. As you stretch the browser window, the *red border* will appear once you reach and pass `500px` width. **We now know our media query is working**.

### Adding flexbox to the gallery

To make a *flex* item we target the parent. In the gallery we apply flex to `class="image-container"` so that the child elements (the three `figure`'s) become flex items.

Replace the red border with `display: flex;`

```
@media screen and (min-width: 500px) {
    
.image-gallery .image-container {
        display: flex;
    }

}
```
Save and view your page. As soon as you reach the 500px width our `flex` items (our images and captions) line up next to each other. Whilst it looks a bit rubbish (500px is too small) this is fantastic news. 

>One line of code - `display:flex` has enabled this. In the past, this was only achieved by fudges and hacks in CSS.

Adjust the `min-width` at which our media query kicks in - `@media screen and (min-width: 750px)` will work. You might want to adjust this a little later.

---

> Which bit is the media query?

This is the actual media query.

`@media screen and (min-width: 500px) {`
    

`}`

>These are the styles we are applying with this media query.

`.image-gallery .image-container {
        display: flex;
    }`

---

### Add another style to the media query

We are next going to target each of our `<figure>`s (with a class of `an-image`). 

Add this within the media query:

```
.image-gallery .an-image {
    flex: 33%;
    padding: 20px;
    background: white;
}
```

- `flex: 33%;` ensures that each of our `<figure>`s takes up a third of the space. With three images of the same size we won't see much difference.
- `padding: 20px;` gives each of our `<figure>`s some padding all around.
- and finally `background: white;` applies a background to each `<figure>`.

*The padding and colour can be adjusted later to best fit your design as your work progresses*.

>Save and view. 

Once we expand past our `min-width` our three `<figure>`s now sit nicely side by side. *If they don't, rewind to see what has gone wrong*.


The only remaining issue is that our background colour (white) looks like one big block. We can remedy this with a little clever CSS.

The final touch is to add a left margin to any of your `<figure>`s (with their class of `.an-image`) that come after another `<figure>`. 

To do this we add the following to your media query:
```
.image-gallery .an-image+.an-image {
     margin-left: 20px;
}
```
In our example this means this style affects the 2nd and 3rd `<figure>`. 

For this we use the Adjacent sibling combinator. 

>The adjacent sibling combinator (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element. See [MDN Adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator).


Save and reload. Your gallery should look something like [Derren's CodePen - Breakpoints and media queries](https://codepen.io/wilsondmmu/pen/mvVWVj).

**If you want more than three images, you will need to add `flex-wrap:wrap` and modify the code as in the codepen above.**

If it doesn't, check that you have been putting this code within the media query. The full media query should look something like this:

```
@media screen and (min-width: 750px) {

    .image-gallery .image-container {
        display: flex;
    }
    .image-gallery .an-image {
        flex: 33%;
        padding: 20px;
        background: white;
    }
    .image-gallery .an-image+.an-image {
        margin-left: 20px;
    }

}
```
### Your design

Once the gallery is working you can make adjustments to best fit your design. This might include dimensions, colours, padding and margins. *Remember, start mobile first*. 

### Your images

Experiment with your image sizes. Work out the largest image dimensions for your gallery on desktop and mobile. Edit and optimise your original images.

---

[Video - Implementing your gallery with flexbox and media queries](https://youtu.be/w76iCw6f_g0). Demonstration from Derren on the whole process.

---

## Testing

At the end of this session [validate your HTML](https://validator.w3.org/#validate_by_upload) and [validate your CSS](https://jigsaw.w3.org/css-validator/#validate_by_upload). **Fix any problems**.

---

## Week 4 Checklist

### Are you up to date?

- Task 1 reviewed and explained the header.
- We added the hero image and introduced `background-size`.
- Task 3 added `Background blend mode` as an option to make your hero a better background for your header and tag line.
- Task 4 focussed on the heading and tagline. Adjusting them for improved readability.
- Task 5 improved the semantics of your gallery with `figure` &amp; `figcaption`.
- Task 6 provided an introduction to media queries.
- The final task used a media query and flexbox to create a responsive gallery - 1 column to 3 columns.

And finally:

- Fix any problems before you continue.

**End**

[Return to the Top](#contents)
