module.exports = function($stateProvider) {
  $stateProvider
    .state('postsIndex', {
      url: '/posts',
      template: require('./views/index.html'),
      controller: 'postsIndexController',
      controllerAs: 'indexCtrl',
      resolve: {
        postsResponse: function(Post) {
          return Post.query()
        }
      }
    })

    .state('postsShow', {
      url: '/posts/:id',
      template: require('./views/show.html'),
      controller: 'postsShowController',
      controllerAs: 'showCtrl',
      resolve: {
        postResponse: function(Post, $stateParams) {
          return Post.get({ id: $stateParams.id });
        }
      }
    })
}