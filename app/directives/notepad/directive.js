module.exports = function() {
  return {
    restrict: 'E',
    template: require('./views/template.html'),
    scope: true,
    link: function($scope, $element) {
      $scope.editing = false;
      $scope.contentEle = $element[0].querySelector('.notepad-content');

      $scope.setEditing = function() {
        $scope.editing = true;
        
        setTimeout(function() {
          $scope.contentEle.focus();
        }, 0);
      }

      $scope.save = function() {
        $scope.editing = false;

        $scope.$emit('note:changed', { content: $scope.contentEle.innerText });
      }

      // Handle saving when unfocused
      angular.element($scope.contentEle).bind('blur', function(e) {
        $scope.save();

        // Required because not using ng-click
        $scope.$apply();
      });
    }
  }
}