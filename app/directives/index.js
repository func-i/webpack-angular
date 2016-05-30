var angular = require('angular')
var map = require('./map.js');

module.exports = angular.module('app.directives', [])
  .directive("jonahMap", map)
  .name;