# jQuery

## What is jQuery?

A DOM manipulation library.  It comes with a bunch of useful methods like:

- Select Elements
- Manipulate Elements
- Create Elements
- Add Event Listeners
- Animate Elements
- Add effects
- Make HTTP requests (AJAX)

## What is a library?

Code that is written by somebody else, but is able to be added to our projects.

## Why would you use jQuery?

- Fixes 'broken' DOM API
- Brevity and clarity
- Ease of use
- Cross-browser support
- AJAX
- Widely used:  strong community, lots of resources

## Why would you not use jQuery?

- DOM API is no longer broken:  querySelector, querySelectorAll exists now
- You can do all that jQuery does on your own
- It's an unnecessary dependency
- Performance

## jQuery Preview

```javascript
// when a user clicks on a button with id trigger
$('#trigger').click(function() {

  // change the body's background to yellow
  $('body').css('background', 'yellow');

  // Fade out all imgs over 3 seconds
  $('img').fadeOut(3000, function(){
    // Remove images from page when fadeOut is done
    $(this).remove();
  })
});
```
