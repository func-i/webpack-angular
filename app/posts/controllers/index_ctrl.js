module.exports = function($state, postsResponse, FavouriteService) {
  this.posts = postsResponse;

  this.goToPost = function(post) {
    $state.go('postsShow', {id: post.id});
  }

  this.toggleFavourite = function(post) {
    FavouriteService.toggleFavourite(post);
  }

  this.postFavourited = function(post) {
    return FavouriteService.isInFavourites(post);
  }
}