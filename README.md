## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 18 - Using listeners

There are very few instances where we need to use `$scope`

1. In a directive
1. Using a listeners to $emit or $broadcast
1. Using $watch for changes on the scope

#### Changing our Geocoder directive to not be nested

Right now the geocoder receives the `latLng` via props.
Let's change this to be a standalone directive that receives the information via `events`

That way we can put the geocoder directive anywhere we want and send a new address for it to update.
Also, I want to use `new google.maps.places.PlacesService` to find a number of locations nearby.

The result being this:

![](https://photos-5.dropbox.com/t/2/AAB4Q9GWKQF4HZW0xx1Of6zPiZC8Cdb0tLUBwoDGWFOobA/12/40938512/png/32x32/3/1466031600/0/2/Screenshot%202016-06-15%2012.20.27.png/ENLYoB8YwQsgBygH/wpZai2cKOCmicIzYWhDyMjDcd4A6mQ-fkplM_TAWi_c?size_mode=3&size=2048x1536)

#### On your own:

* Remove `geocoder` from `jonah-map`
* Change the layout the map is rendered in, like this:

```
<div class='row'>
  <div class='col-md-8'>
    <jonah-map></jonah-map>
  </div>
  <div class='col-md-4'>
    <geocoder></geocoder>
  </div>
</div>
```

* Have the `jonah-map` send `latLng` using events to the `geocoder`
  * `$on`
  * `$emit`
  * `$broadcast`
* use `new google.maps.places.PlacesService` to query locations nearby and display them

### To continue:

* `git add .`
* `git commit -m "my activity_18 completed work"`
* Activities no longer have completed code, proceed to Activity 16 while keeping your code.



