var angular = require('angular')
var post = require('./post.js');
var postComment = require('./post_comment.js');

module.exports = angular.module('app.resources', [])
  .factory('Post', post)
  .factory('PostComment', postComment)
  .name;