var angular = require('angular')
var map = require('./map/directive.js');
var notepad = require('./notepad/directive.js');
var geocoder = require('./geocoder/directive.js');

module.exports = angular.module('app.directives', [])
  .directive("jonahMap", map)
  .directive("notepad", notepad)
  .directive("geocoder", geocoder)
  .name;