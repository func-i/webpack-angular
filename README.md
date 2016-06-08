## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 14 - Adding another Directive

Now that the map is showing, let's use this new directive to show the **geocoded address** using the LatLng at center of the map

### Adding a geocoder

You can use the Google Maps geocoder with `var geocoder = new google.maps.Geocoder();`

Refer to [the documentation](https://developers.google.com/maps/documentation/javascript/geocoding#reverse-geocoding-by-location)

Create a new `Geocoder` directive that can be used like this:

`<geocoder lat="latitude" lng="longitude"></geocoder>`

This activity is all on your own

#### More Google Map functionality

Use google map listeners to do the following:

* Create the geocoder directive
  * Give it a template and styling
* Add the geocoder directive to the template of your `jonah-map` directive
* Pass the center of the map to this directive as lat lng
* When the center of the map changes, the `geocoder` directive should use the new lat lng to display the new address

### To continue:

* `git add .`
* `git commit -m "my activity_14 completed work"`
* Activities no longer have completed code, proceed to Activity 15 while keeping your code.



