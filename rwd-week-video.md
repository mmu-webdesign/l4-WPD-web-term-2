# How to add a video background to your header

** These instructions are under constant revision and will change over the course of this week **

To do this, you will need

* An mp4 file, or other short video file
* A jpg or other still graphic file
* Your HTML and CSS files for the current version of your site (make a backup copy just in case).

## An example

Here is [an example of what we will create](http://55060509.webdevmmu.uk/apprentice-mosquito/). This is the code that we need to create it:

### HTML

```
<header class="page-header">
          
            <!-- video from https://coverr.co/ -->
            <video id="bgvid" playsinline autoplay muted loop>
                <!--
                  - Video needs to be muted, since Chrome 66+ will not autoplay video with sound.
                  WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the "Pause" button  -->
                  
                <source src="i/28.webm" type="video/webm">
                <source src="i/28.mp4" type="video/mp4">

            </video>
            <div class="header-content">

                <h1>Your header content</h1>
                <p>will probably already be in place</p>
            </div>
        </header>
```

### CSS

```
header.page-header {
    position: relative;
    overflow: hidden;
}

.header-content {
    position: relative;
    z-index: 10001;
}

header.page-header video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 100%;
}


```
