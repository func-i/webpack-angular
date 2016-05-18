module.exports = function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('layout', {
      abstract: true,
      template: require('./layouts/app.html')
    });
}