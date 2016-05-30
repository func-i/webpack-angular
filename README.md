## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 11 - Intro to Directives

Accessing the DOM.  Up until this point we have been interacting with the DOM using data manipulation.
You change some data, our `ng-repeat` consumes that data to display something.

We have not been able to use our JavaScript to select DOM elements with jQuery or use jQuery plugins.


### What is a directive?

We've been using directive's the whole time.  

* ng-app
* ng-controller
* ng-repeat
* ng-class
* etc

Directives are the custom attributes and tags Angular looks for in the DOM, matches them to JS code and executes them.
We can write our own custom tags and attributes and attach custom functionality to them.

### Building a custom Google Map directive

Create the following structure:

```
app/
  directives/
    map.js
```

* Add the following to the root `index.html`

```
<script src="https://maps.googleapis.com/maps/api/js"></script>
```

### Structure of a directive

In `app/directives/map.js` add the following code:

```
module.exports = function() {
  return {
    restrict: 'A',
    link: function($scope, $element) {
      console.log($element)
    }
  }
}
```

* We are defining a function that returns a JSON object.  This JSON object contains the functionality
of our directive.

The first key is `restrict`.  `restrict` tells the directive how we can place it in the DOM.
For example, if our directive was called **jonah-map**, then it can be placed in the DOM in the following ways:

* `restrict: 'E'` (As an element)
  * `<jonah-map></jonah-map>`
* `restrict: 'A'` (As an attribute)
  * `<div jonah-map></div>`
* `restrict: 'C'` (As a class name)
  * `<div class="jonah-map"></div>`

This directive isn't included in our app yet, so add the following to `app/directives/index.js`

```
var angular = require('angular')
var map = require('./map.js');

module.exports = angular.module('app.directives', [])
  .directive("jonahMap", map)
  .name;
```

You will notice that the directive `jonahMap` is camel-cased and will translate to `jonah-map` in our view.
Just a think to be aware of.

### Add the directive 

* Add `<div jonah-map class="map"></div>` to `app/home/views/show.html`.
* import the directives folder into your `app/index.js` file

When it reloads, you should have a `console.log` firing from inside your directive

### Directive link function

The purpose of the link function is to give you access to the DOM after it has rendered.
When we attach a directive such as `ng-click` to an element, in JS we need to bind an eventListener
to that element, then call the function we passed to `ng-click`

In Angular, we do this in the `link` function.


### To continue:

* `git add .`
* `git commit -m "my activity_11 completed work"`
* `git checkout activity_12`



