module.exports = function routes($stateProvider) {
  $stateProvider
    .state('postsIndex', {
      parent: 'layout',
      url: '/posts',
      template: require('./views/index.html'),
      controller: 'postIndexController',
      controllerAs: 'indexCtrl',
      resolve: {
        posts: function(Post) {
          return Post.query();
        }
      }
    })

    .state('postsShow', {
      parent: 'layout',
      url: '/posts/:id',
      template: require('./views/show.html'),
      controller: 'postShowController',
      controllerAs: 'showCtrl',
      resolve: {
        post: function($stateParams, Post) {
          return Post.get({ id: $stateParams.id })
        }
      }
    });
}