## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 14 - More Directive functionality!!

This activity is all on your own

#### More Google Map functionality

Use google map listeners to do the following:

* When the center changes, get the new latlng and change the geolocation to display the new address
* Drop a pin on the center of the map
* Change the geolocation to a text input it so that:
  * If the map is moved manually, it changes the address in that text input to the center address
  * If the address is changed in the text input and submitted, it geocodes it and changes the center to the new location
* Separate out the geocoding part to another directive
* Change a bunch of the logic in the `link` function to be inside a controller in the directive
  * Load this controller from a `controllers` folder in the directive
  * Share the controller between the `map` directive and the `geocoder` directive

### To continue:

* `git add .`
* `git commit -m "my activity_14 completed work"`
* `git checkout activity_15`



