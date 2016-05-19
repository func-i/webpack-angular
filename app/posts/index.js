var angular = require('angular');
var routing = require('./routes');

module.exports = angular.module('app.posts', [])
  .config(routing)
  .name