// Set api token
mapboxgl.accessToken = 'API_KEY';

// Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',

  // Positioning the map on a certain longitute + latitude and zooming in
  center: [4.322840, 52.067101],
  zoom: 15,
});

var myCustomMarker = document.createElement('div');
// myCustomMarker.className = 'customMarker';
myCustomMarker.style.backgroundImage = 'url("https://i.pinimg.com/originals/b1/b7/de/b1b7de37299d6d589ba3d7e28652869b.png")';
myCustomMarker.style.backgroundSize = '100%';
myCustomMarker.style.width = '50px';
myCustomMarker.style.height = '50px';

// Adding a marker based on lon lat coordinates
var marker = new mapboxgl.Marker(myCustomMarker).setLngLat([4.324439, 52.067200]).addTo(map);






















/*
myCustomMarker.style.cursor = 'pointer';
myCustomMarker.addEventListener('click', function() {
  alert('You clicked me');
});

*/