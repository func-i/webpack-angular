var angular = require('angular');
var favourites = require('./favourites.js');
var geocoder = require('./geocoder.js');

module.exports = angular.module('app.services', [])
  .factory("FavouriteService", favourites)
  .service("Geocoder", geocoder)
  .name