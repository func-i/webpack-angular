module.exports = function(Post, $stateParams) {
  var that = this;

  Post.get({ id: $stateParams.id }, function(response) {
    that.post = response;
  });
}