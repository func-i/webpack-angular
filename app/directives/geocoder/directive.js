module.exports = function(gmapService) {
  return {
    restrict: 'E',
    template: require('./views/template.html'),
    link: function($scope, $element) {
      var locationHolder = $element[0].querySelector('.jonah-map-geolocation');
      var placesHolder = $element[0].querySelector('.places-holder');
      var nearbyHolder = $element[0].querySelector('.geocoder-nearby');
      
      $scope.$on('geocoder:setLocation', function(evt, data) {
        gmapService.geocoder.geocode({ location: data.latLng }, function(results, status) {
          locationHolder.innerHTML = results[0].formatted_address;
        });

        service = new google.maps.places.PlacesService(placesHolder);
        service.nearbySearch({
          location: data.latLng,
          radius: 50
        }, function(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            $scope.nearbyLocations = results;
            $scope.$apply();
          }
        });

      });
    }
  }
}