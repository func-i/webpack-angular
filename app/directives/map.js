module.exports = function() {
  return {
    restrict: 'A',
    link: function($scope, $element) {
      var map = new google.maps.Map($element[0], {
        center: {lat: 43.650033, lng: -79.391594},
        zoom: 13
      });
    }
  }
}