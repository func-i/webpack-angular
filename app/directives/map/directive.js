module.exports = function(Geocoder) {
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

      var geocoderDiv = $element[0].querySelector('.jonah-map-geolocation');

      Geocoder.coder.geocode({ location: latLng }, function(results, status){
        geocoderDiv.innerHTML = results[0].formatted_address;
      });
    }
  }
}