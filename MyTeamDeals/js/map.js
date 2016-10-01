var map;
function initialize() {
  var myLatlng = new google.maps.LatLng(-33.8678500, 151.2073200);
  var mapOptions = {
    zoom: 12,
    center: myLatlng,
    disableDefaultUI: true
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);