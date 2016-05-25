var config = require("config");

module.exports = function($resource) {
  return $resource(config.apiHost + 'posts/:id', {});
};