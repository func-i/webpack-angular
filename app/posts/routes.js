module.exports = function($stateProvider) {
  $stateProvider
    .state('postsIndex', {
      url: '/posts',
      template: require('./views/index.html'),
      controller: 'postsIndexController',
      controllerAs: 'indexCtrl'
    })

    .state('postsShow', {
      url: '/posts/:id',
      template: require('./views/show.html'),
      controller: 'postsShowController',
      controllerAs: 'showCtrl'
    })
}