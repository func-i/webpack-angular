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

* directives folder
* map.js
* link function
* compile function
* directive controller
* console.log when mapBounds change

Next activity:

* Use map to get current latLng of center
* use geolocation from gmaps API to display current address in a div

Future activities:

* Using loaded ngResource to update directly instead of calling the model
* shared services, directives vs local to folder
* ui-router back functionality
* 



### To continue:

* `git add .`
* `git commit -m "my activity_10 completed work"`
* `git checkout activity_11`



