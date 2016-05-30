module.exports = function($stateProvider) {
  $stateProvider
    .state('postsIndex', {
      parent: 'layout',
      url: '/posts',
      template: require('./views/index.html'),
      controller: 'postsIndexController',
      controllerAs: 'indexCtrl',
      resolve: {
        postsResponse: function(Post) {
          return Post.query().$promise
        }
      }
    })

    .state('postsShow', {
      parent: 'layout',
      url: '/posts/:id',
      template: require('./views/show.html'),
      controller: 'postsShowController',
      controllerAs: 'showCtrl',
      resolve: {
        postResponse: function(Post, $stateParams) {
          return Post.get({ id: $stateParams.id }).$promise;
        },

        commentsResponse: function(PostComment, postResponse) {
          return PostComment.query({ post_id: postResponse.id }).$promise;
        }
      }
    })
}