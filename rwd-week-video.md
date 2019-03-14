# Making a video header

## Background research on another website

What we are going to do is create something similar to [the video background on the 34sp.com homepage](https://www.34sp.com/). Digging around in the source code we see this:

```
<video autoplay loop muted poster="//34sp.net/videos/hero/hero-home.1.jpg">
      <source src="//34sp.net/videos/hero/hero-home.mp4" type="video/mp4">
      <source src="//34sp.net/videos/hero/hero-home.webm" type="video/webm">
</video>
```

Grabbing the files from their site, we can see the 34sp video is twenty seconds long, provided as .mp4 format and .webm format. The downloaded mp4 file from their site is 5.6MB and is 1920x1080 pixels, so those are the kind of parameters you should be aiming for (or smaller for the file size if possible).

## Creating the video

This is how I created the web version of the video:

* Shot 10 seconds of video on my phone (I would recommend a tripod...)
* Airdropped to my computer, and arrived as a 15MB .mov file
* [Downloaded the Miro video converter](http://www.mirovideoconverter.com/)
* Choose format, then mp4 - this created a 5MB file
* Choose format, then convert to webm SD - this created a 1.1MB file
* Choose format, then convert to webm HD - this created a 2.3MB file
* The video was left as full colour when it was converted

So everything seemed to be within the standard limits for web videos. If you have access to more complex video editing software you may be able to shrink the video even more. 

If you are starting with a longer video, you will need some editing software to chop out just the part you need.

## Adding the video to a web page

I used the code above and modified it for the paths for my video. 

The `poster` as below:

```
<video autoplay loop muted poster="header.jpg">
```

is a still image that replaces the video if it doesn't load. I screenshotted the start of the video and converted that to a jpg.

The attributes are important, as
* `autoplay` makes the video play on loading
* `loop` makes the video loop around
* `muted` turns off the sound.

Once the video tag is working correctly, we then need to add it to our existing header code. 

## Integrating the video with the header of our site.

[There is a codepen with example code](https://codepen.io/wilsondmmu/pen/YgxPJw). 

**Be careful cutting and pasting from the codepen**. You will need to cut and paste the HTML for the `video` tag and the scrim `div`, then carefully add the CSS you need to your CSS file to make things work. 

I would **not** recommend just copying all the CSS from the codepen - you will probably need to add a little at a time around what you already have.

What the CSS is doing in the codepen is creating the space for the header, then pulling the video to the corners of the space. We also need to make sure we have the right layers, something like this (seen side-on):

```
-------- the text       ---------
-------- a 'scrim'      ---------
-------- the video      ---------
-------- the background ---------
```

a 'scrim' is an **optional** semi-transparent layer of colour that sits between the text and video so that there is enough foreground/background contrast.

The really important parts of how this works is the `overflow:hidden` on the header, as that stops the video growing outside of its container, and the `z-index` working alongside `position:relative` to shift the different parts of the header into the right visual order.

## Compatibility

This code has been tested in Safari, Chrome and Firefox and seems to work OK. Please let the tutors know if you have issues.

## Minimum code additions required

These are the parts of the code that do the work - if your site isn't working, have a look at the code below and make sure you can find each line in your site's code.

### HTML that must be in your header

```
<video autoplay loop muted poster="file.jpg">
        <source src="file.mp4" type="video/mp4">
        <source src="file.webm" type="video/webm">
</video>
<div class="scrim"></div>
```

### CSS that must be in your layout file

```
.page-header { 
    overflow:hidden; 
    position:relative;
    }
    
.page-header video {
      position:absolute;
      top:0; 
      right:0; 
      left:0; 
      bottom:0;
      }
      
.page-header .header-content {
      position:relative; 
      z-index: 2;
      }
      
.page-header .scrim {
      position:absolute; 
      top:0; 
      right:0; 
      left:0; 
      bottom:0; 
      z-index: 1; 
      background-color:rgba(0,0,0,0.6); /* or any other colour */
      }
```
    
