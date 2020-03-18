Glitch Collection Gallery lets you add a gallery of your Glitch projects in a specific collection to your website (or wherever JavaScript and HTML works!).
___
## Demo
View the demo of the gallery at https://glitch-collection-gallery.glitch.me. In the website, you will see two textboxes. In the first one, enter your Glitch username (without the `@`) Example: `khalby786`. In the second textbox, enter your collection name. Now, collection names should be entered according to the URL of the collection. If the collection's name is "My Big Collection", then you should type it as "my-big-collection'. It is better to copy the name from the url of the collection page on Glitch. Click 'Submit' and you'll see all the projects of that collection in the form of a slideshow!

## Using it in your website
Here's how you use it in your website:

1. Make sure you have a `<div>` element in your HTML file with a proper id where you want the collection gallery.
```
<div id = "collection-gallery"></div>
```

2. Download the script from https://glitch.com/edit/#!/glitch-collection-gallery-script?path=script.js:1:0 into a new `.js` file in your project.

3. Call the script in your HTML file.
```html
<script src = "collectionembed.js"></script>
<script>
   createEmbed("element-id", "username", "collection-name");
</script>
```
4. The `createEmbed()` function has 4 parameters: `element-id`, `username` and `collection-name`.
`element-id` is the id of the element where you want the gallery to be. (Only id elements right now :slight_smile:)
`username` is your username. (the username to whom the collection belongs)
`collection-name` is the name of the collection you want to display.

5.  Aaaand you're good to go!

### Inspiration
The GeoGlitches blog had a view called web-ring that allowed you to display projects in a collection in a similar way. Check out the GeoGlitches blog here: https://glitch.com/~geoglitchies
