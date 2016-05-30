module.exports = function() {
  
  var favourites = [];

  return {

    toggleFavourite: function(post) {
      if(this.isInFavourites(post))
        favourites.splice(this.getFavouriteIndex(post), 1);
      else
        favourites.push(post)
    },

    isInFavourites: function(post) {
      return this.getFavouriteIndex(post) > -1;
    },

    getFavouriteIndex: function(post) {
      var ids = favourites.map(function(fav) { return fav.id });
      return ids.indexOf(post.id);
    }
    
  }
}