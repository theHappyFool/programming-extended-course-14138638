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

var myPopup = new mapboxgl.Popup().setHTML('<h3>De Haagse Hogeschool</h3><p>Closed right now</p>');

// Adding a marker based on lon lat coordinates
var marker = new mapboxgl.Marker().setLngLat([4.324439, 52.067200]).setPopup(myPopup).addTo(map);





