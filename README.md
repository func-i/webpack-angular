## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 13 - Directives, Google Maps, Geocoders, oh my.....

Now that the map is showing, let's use this directive to attach some extra functionality to the map.

### Adding a geocoder

You can use the Google Maps geocoder with `var geocoder = new google.maps.Geocoder();`
Add this to your directive and `console.log` the results of the call.

Refer to [the documentation](https://developers.google.com/maps/documentation/javascript/geocoding#reverse-geocoding-by-location)

### Custom template in your directive

Directive can take a `template` option just like they can take a `restrict` option.
Now our directives have a more complicated structure.  So lets organize them better.

Change the **map** directive to the following structure:

```
app/
  directives/
    map/
      stylesheets/
        index.scss
      views/
        template.html
      directive.js
```

* Add the existing `map` directive code to `directive.js`
* Adjust your import in `app/directives/index.js` accordingly

#### Add the template

In `app/directives/map/views/template.html` add: 

```
<div class="jonah-map-holder">
  <h3 class="jonah-map-geolocation"></h3>
  <div class="jonah-map"></div>
</div>
```

* Add `template: require('./views/template.html')` to your directive as an option.
* Change using your directive in `app/home/views/show.html` to:

```
<jonah-map></jonah-map>
```

* Make your directive work with as an **element** and not just an **attribute**
* Remove the styling from the `home` module
* Add the styling to this directive
* Import it in `app/stylesheets/index.scss`
* Make your map work by selecting the `jonah-map` element in your directive.
  * Jquery isn't loaded, so you have to use the default angular selectors
  * You can reference [this](http://stackoverflow.com/questions/24620128/find-child-element-in-angularjs-directive)
* Make the geolocation for the current **latlng** show up in the `jonah-map-geolocation` div

### To continue:

* `git add .`
* `git commit -m "my activity_13 completed work"`
* `git checkout activity_14`



