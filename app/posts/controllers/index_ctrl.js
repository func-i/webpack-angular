module.exports = function(Post) {
  var that = this;

  Post.query(function(response) {
    that.posts = response;
  });
}