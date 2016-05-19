require("!style!css!sass!./stylesheets/index.scss");

var angular = require('angular');
var uirouter = require('angular-ui-router');
var routing = require('./routes.js');

// modules
var home = require('./home');

angular.module('app', [
  uirouter, 

  // modules
  home
  
]).config(routing)