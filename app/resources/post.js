module.exports = function($resource) {
  return $resource("http://jsonplaceholder.typicode.com/" + 'posts/:id', {});
};