var angular = require('angular');
var routing = require('./routes');
var indexController = require('./controllers/index_ctrl.js');

module.exports = angular.module('app.posts', [])
  .config(routing)
  .controller("postsIndexController", indexController)
  .name