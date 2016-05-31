var angular = require('angular')
var map = require('./map/directive.js');

module.exports = angular.module('app.directives', [])
  .directive("jonahMap", map)
  .name;