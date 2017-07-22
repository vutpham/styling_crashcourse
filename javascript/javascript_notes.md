# Introduction to JavaScript

- Evaluate JS using the dev console
- 5 JS primitives
- Define variables
- use console.log, alert, and prompt

## Document Object Model (DOM)

The DOM is an object that is the interfeace between Javascript and HTML/CSS.  Your browser turns every HTML tag into a Javascript object that we can manipulate.  Everything is store inside of the *document* object.

### Methods

The document comes with a bunch of methods for selecting elements.

* document.getElementById()
* document.getElementsByClassName()
* document.getElementsByTagName()

* document.querySelector()

Returns the **first element** that matches a given CSS-style selector

```javascript
var tag = document.querySelector("#highlight");
```

* document.querySelectorAll()

### Manipulating Style

#### classList

A read-only list that contains the classes for a given element. It is **not an array**

```css
.another-class {
  color: purple;
  fontSize: 76px;
}
```

```javascript
var tag = document.querySelector("h1");

//ADD A CLASS OT THE SELECTED ELEMENT
tag.classList.add("another-class");

//REMOVE A CLASS
tag.classList.remove("another-class");

//TOGGLE A CLASS
tag.classList.toggle("another-class");
```

#### textContent

Returns a string of all the text contained in a given element

#### innerHTML

Similar to textContent, except it returns a string of all the HTML contained in a given element.

### Manipulating Attributes

#### getAttribute() and setAttribute()

Used to read and write attributes like `src` and `href`

```html
<a href ="www.google.com">I am a link</a>
<img src="logo.png">
```

```javascript
var link = document.querySelector("a");
link.getAttribute("href"); //"www.google.com"

//CHANGE HREF ATTRIBUTE
link.setAttribute("href", "www.dogs.com");
///<a href="www.dogs.com">I am a link</a>

var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
//<img src="corgi.png">
```

### DOM Events

To add an event listener, we use a method called *addEventListener*
```
element.addEventListener(type, functionToCall);
```
```javascript
var button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("SOMEONE CLICKED THE BUTTON!");
});
```
