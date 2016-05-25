module.exports = function($stateProvider) {
  $stateProvider
    .state('home', {
      parent: 'layout',
      url: '/',
      template: require('./views/show.html'),
      controller: 'homeShowController',
      controllerAs: 'home'
    });
}