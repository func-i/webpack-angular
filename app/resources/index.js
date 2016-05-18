var angular = require('angular')
var post = require('./post.js');

module.exports = angular.module('app.resources', [])
  .factory('Post', post)
  .name;
