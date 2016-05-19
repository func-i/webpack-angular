module.exports = function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./views/show.html'),
      controller: 'homeShowController',
      controllerAs: 'home'
    });
}