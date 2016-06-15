module.exports = function($timeout) {
  return {
    restrict: 'E',
    template: require('./views/template.html'),
    link: function($scope, $element) {
      var latLng = { lat: 43.650033, lng: -79.391594 }
      var mapDiv = $element[0].querySelector('.jonah-map');

      var map = new google.maps.Map(mapDiv, {
        center: latLng,
        zoom: 13
      });

      $timeout(function() {
        $scope.$root.$broadcast('geocoder:setLocation', { latLng: map.center });  
      }, 0);


      map.addListener('center_changed', function() {
        $scope.$root.$broadcast('geocoder:setLocation', { latLng: map.center });  
      })
    }
  }
}