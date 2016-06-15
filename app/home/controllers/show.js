module.exports = function($scope) {
  this.title = "Webpack Angular Boilerplate";

  $scope.$on('note:changed', function(evt, data) {
    console.log(data.content);
  })

}