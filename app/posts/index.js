var angular = require('angular');
var routing = require('./routes');
var indexController = require('./controllers/index_ctrl.js');
var showController = require('./controllers/show_ctrl.js');

module.exports = angular.module('app.posts', [])
  .config(routing)
  .controller("postsIndexController", indexController)
  .controller("postsShowController", showController)
  .name