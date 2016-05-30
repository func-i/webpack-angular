var config = require("config");

module.exports = function($resource) {
  return $resource(config.apiHost + 'posts/:post_id/comments/:id', {});
};