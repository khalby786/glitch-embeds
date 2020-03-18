# Under construction!

# Glitch Embeds

Glitch Embeds are a bunch of embeds that you can add to your website for [Glitch](https://glitch.com) profiles, projects, teams and collections!

## Collection.js

To embed a Glitch collection in your project,

1. Make sure you have a `<div>` element in your HTML file with a proper id where you want the collection gallery.
```
<div id = "collection-gallery"></div>
```

2. Download the script from https://github.com/khalby786/glitch-embeds/blob/main/scripts/collection.js into a new `.js` file in your project or use the CDN link: https://cdn.jsdelivr.net/gh/khalby786/glitch-embeds/scripts/collection.js

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

By Khaleel Gibran
@khalby786
