module.exports = function($stateProvider) {
  $stateProvider
    .state('postsIndex', {
      url: '/posts',
      template: require('./views/index.html'),
      controller: 'postsIndexController',
      controllerAs: 'indexCtrl'
    })
}