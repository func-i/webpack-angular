var angular = require('angular');
var uirouter = require('angular-ui-router');
var routing = require('./routes');
var showController = require('./controllers/show.js');

module.exports = angular.module('app.home', [uirouter])
  .config(routing)
  .controller("homeShowController", showController)
  .name
