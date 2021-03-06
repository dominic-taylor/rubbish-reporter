var map
var markers = []
var latitude
var longitude
var address

function initMap() {
  var mapDiv = document.getElementById('map');
  var geocoder = new google.maps.Geocoder
  map = new google.maps.Map(mapDiv, {
    center: {lat: -41.2894828, lng: 174.7759777},
    zoom: 15
  });
  map.addListener('click', function(event){
    deleteMarkers()
    placeMarker(event.latLng, map)
    console.log(event.latLng.lat(), event.latLng.lng())
    latitude = event.latLng.lat()
    longitude = event.latLng.lng()
    geocodeLatLng(geocoder, map)

  })
}

function placeMarker(latLng, map){
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  })
  markers.push(marker)
}
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function deleteMarkers() {
  setMapOnAll(null);
  markers = [];
}

function geocodeLatLng(geocoder, map){
  var latlng = {lat: latitude, lng: longitude}
  geocoder.geocode( {'location': latlng}, function (results, status) {
    console.log(results[0].formatted_address)
    address = results[0].formatted_address
    document.getElementById('address').value = address
  })
}
