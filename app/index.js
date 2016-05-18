require("!style!css!sass!./stylesheets/index.scss");

var angular = require('angular');
var uirouter = require('angular-ui-router');
var ngResource = require('angular-resource');
var routing = require('./routes.js');

// resources
var resources = require('./resources');

// modules
var home = require('./home');
var posts = require('./posts');

angular.module('app', [
  ngResource,
  uirouter, 

  // resources
  resources,

  // modules
  home,
  posts
  
]).config(routing)