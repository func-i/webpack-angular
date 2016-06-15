var angular = require('angular');
var favourites = require('./favourites.js');
var gmapService = require('./gmapService.js');

module.exports = angular.module('app.services', [])
  .factory("FavouriteService", favourites)
  .service("gmapService", gmapService)
  .name