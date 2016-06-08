## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 12 - Directives continued

We now have a directive, but it's not doing anything.
We want this directive to load a google map into the div on our show page

### On your own

* Add styles to make the map div: 100% width, 400px height
* Add and complete the following code.
  * Where do you add it?
  * How do you complete it?
  * Look up the google maps documentation to see what I mean

```
var map = new google.maps.Map(/* Reference to the map div DOM element */, {
  center: {lat: 43.650033, lng: -79.391594},
  zoom: 13
});
```

### To continue:

* `git add .`
* `git commit -m "my activity_12 completed work"`
* Activities no longer have completed code, proceed to Activity 13 while keeping your code.



