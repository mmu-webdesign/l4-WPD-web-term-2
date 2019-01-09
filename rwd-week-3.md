# RWD Week Three

# Working with layout

**Remember**: don’t just copy all the code in the codepens. Read it first before you copy what is required for the project.

## Are you up to date?
Before you proceed [use the Task 1 check list](rwd-task1-checklist.html). Have you completed everything?

- Fix any problems before you continue.
- Keep your browser window small - don't use it at full screen yet. We are still *mobile first*.

---

For next week?

- Apply these different background colours to the *About Me, Work Experience, Image Gallery and Contact Me* sections .

INSERT - CODEPEN ILLUSTRATING BACKGROUND COLOURS VIA SECTION CLASSES. PERHAPS ILLUSTRATE 2, ASKING THEM TO ADD OTHERS. THEY CAN 'TAKE AWAY' THE CSS.

### Things to note

- Your original images, especially the 'big header' image may influence the colour scheme you want to use. 
- always keep in mind the contrast between your text and any background colour (see below).


## Adding a responsive column

- [Add the responsive column of content CSS](https://codepen.io/wilsondmmu/pen/PJQYZG)  illustrated in the lecture, creating the class `.container-content`
- 'tune' the `max-width` with a 65 character line for your typeface using this paragraph:  
`<p>01234567890123456789012345678901234567890123456789012345678912345</p>`
- There's more information about why we do this and how it works [at this codepen on font sizing and column widths](https://codepen.io/wilsondmmu/pen/PJdGyE).

Padding and margins mobile/desktop


---




## Add the 'big header'

- [This is the starting code you'll need](https://codepen.io/wilsondmmu/pen/PJReqy)
- Copy the relevant code into your stylesheet: the 'class names' should already suit the template
- You should have a suitable 'hero' image to add using the CSS background declaration.

INSERT - VIDEO DEMO OF APPLYING ABOVE, ADDING IMAGE, A FEW VARIATIONS ON WHAT THEY COULD DO WITH TEXT/BUTTONS.

### Reminder 

- If you are struggling to create a high quality hero image (you really should try) - you can download and use [a free hero image from Unsplash](https://unsplash.com/search/photos/hero-image). 
- You can [resize the big header image](http://www.simpleimageresizer.com/) and [compress the image](https://tinyjpg.com/) without necessarily needing Photoshop.
- Remember to keep the full size original image.
- *Alt text* - background images do not have (or need) alt text. However, that means you should not *hide* anything in the image you need your user to read.
- You might want to modify the image so that there is enough contrast between the foreground and background. One way of doing this is by using photoshop, or you could [try using a 'background-blend-mode' in CSS](https://codepen.io/wilsondmmu/pen/XZrBzd).

INSERT - DEMO VIDEO OF ABOVE.

INSERT - WE NEED VIDEOS OF BOTH OF THESE PROCESSES FOR THE FIRST TERM ANYWAY. ALSO NEED A VIDEO OF SAVE FOR THE WEB PROCESS IN PHOTOSHOP.

- Style the text of your header. Think about font size, spacing, font weight.

SHOULD WE ADD TEXT SHADOW OR SUCH AS AN OPTION? OR DO WE HAVE A LINK OR TWO OF DIFFERENT TECHNIQUES?

- Test your header by changing the size of the browser window.

ARE WE GOING TO SUGGEST A DIFFERENT SIZE FOR LARGER SCREENS? OR DO WE ADD THIS LATER?

## Add the `flexbox` image gallery layout

- [The image gallery layout code is available here](https://codepen.io/wilsondmmu/pen/VMXxQB). Only copy what you need. 

IT'S NOW https://picsum.photos/


INSERT - A VIDEO GOING THROUGH THE CODE SO THEY KNOW 'WHAT THEY NEED'.

- Check it works by changing the size of the browser window
- Adjust the breakpoint if it doesn't fit your design
- Look at your gallery in the context of the rest of your site. Does it need different background colours? Can you cut your text or otherwise tweak it now you've seen it in the two layouts?

INSERT - VIDEO SHOWING THIS INSERTED IN THE WHOLE PAGE - INC. A SIMPLE TECHNIQUE TO STOP ALL OF CAPTION TEXT BEING CENTRED.

### Further reading - flexbox and media queries
- [A complete guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [How do media queries work?](https://css-tricks.com/logic-in-media-queries/)

## Now insert your own gallery images

### Optimization

All three gallery images should be optimized for the web using Photoshop or the tools linked below under Resources.

- crop if needed
- resize to the size required for your desktop design (do not use the height and width attributes to resize images)
- compress to reduce the file sizes. 

### Adding to the page

- add your optimized images to your media folder
- replace the dummy images with yours
- add the relevant height and width attributes
- add relevant alt text for each image.

## Resources

- [Colour contrast checker](http://leaverou.github.io/contrast-ratio/): check the contrast between foreground and background
- For Macs: [you can use the preview tool to crop and resize images](https://www.wikihow.com/Resize-Pictures-(for-Macs))  
- For PCs: [you can use MS Paint to crop and resize images](https://vle.york.ac.uk/bbcswebdav/institution/E-Learning%20Development%20Team/Guides/MSPaint_Crop-Resize.html)
- [Tiny JPG file size tool](https://tinyjpg.com/): remove extra information your images don't need on the web
- [Image resizer](http://picresize.com/): resize big images to remove the excess pixels. This may not work on all of your laptops: try the other two options first.

## Testing
- [Validate your HTML](https://validator.w3.org/#validate_by_upload) and [validate your CSS](https://jigsaw.w3.org/css-validator/#validate_by_upload). Fix any problems.
- review your page in a variety of browsers
- review you page at mobile and desktop sizes
- if you can, put your page on the web and view on your phone (and friends)
- try to fix any issues.

INSERT - VIDEO SHOWING DEV TOOLS, MOBILE VIEW, PERHAPS A SNEAK LOOK AT PREPROS?

- [Prepros.io](https://prepros.io/)  
- [Using live preview with Prepros](https://prepros.io/help/live-preview)



## Are you up to date?
Before you start Task 3 [use the Task 2 check list](rwd-task2-checklist.html). Have you completed everything?

- Fix any problems before you continue.
