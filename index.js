var GoogleMapsLoader = require('google-maps');
var dotenv = require('dotenv')

//load env variables
dotenv.load()

var map = new google.maps.Map();

GoogleMapsLoader.KEY = process.env.MAPS_API_KEY,
GoogleMapsLoader.LANGUAGE = 'en',
GoogleMapsLoader.REGION = 'NZ'

GoogleMapsLoader.load(function(google){
  new google.maps.Map(mapDiv, {
    center: {lat: -41.2894828, lng: 174.7759777},
      zoom: 15
  })
})


// function initMap(){
//   var mapDiv = document.getElementById('map')
//   var map = new google.maps.Map(mapDiv. {
//     center: {lat: -41.2894828, lng: 174.7759777},
//       zoom: 15
//   })
// }
