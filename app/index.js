require("!style!css!sass!./stylesheets/index.scss");

var angular = require('angular');
var uirouter = require('angular-ui-router');
var routing = require('./routes.js');
var ngResource = require('angular-resource');

// modules
var home = require('./home');
var posts = require('./posts');

// resources
var resources = require('./resources');

angular.module('app', [
  uirouter, 
  ngResource,

  // modules
  home,
  posts,

  // resources
  resources
  
]).config(routing)