require('./stylesheets/index.scss');

var angular = require('angular');
var uirouter = require('angular-ui-router');
var routing = require('./routes');
var indexController = require('./controllers/index.js');
var showController = require('./controllers/show.js');

module.exports = angular.module('app.posts', [uirouter])
  .config(routing)
  .controller("postIndexController", indexController)
  .controller("postShowController", showController)
  .name
