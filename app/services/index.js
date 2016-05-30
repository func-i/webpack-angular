var angular = require('angular');
var favourites = require('./favourites.js');

module.exports = angular.module('app.services', [])
  .factory("FavouriteService", favourites)
  .name