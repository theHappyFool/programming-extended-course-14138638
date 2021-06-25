// Set api token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93a3JvayIsImEiOiJja3BwYzkxOGUwNXgwMnBrOXJyYWNzbmw3In0.OevONfEss23IufYJnmribA';

// Initialate map
var map = new mapboxgl.Map
(
	{
	  container: 'map',
	  style: 'mapbox://styles/shadowkrok/ckqblwozq0wu917li1o71gme6',
	  center: [4.3996122,52.0798176],
	  zoom:16,
	  pitch:45
	}
);

//add controls
map.addControl(new mapboxgl.NavigationControl());

//add directions
map.addControl
(
  new MapboxDirections
  (
    {
      accessToken:mapboxgl.accessToken
    }
  ),
  'top-left'
);

//add search
map.addControl
(
  new MapboxGeocoder
  (
    {
      accessToken:mapboxgl.accessToken,
      mapboxgl:mapboxgl
    }
  )
  ,'bottom-left'
);


var markerText = new mapboxgl.Popup().setHTML('<h3>De Haagse Hogeschool</h3><p>Closed right now</p>');
var marker = new mapboxgl.Marker().setLngLat([4.324439,52.067200]).setPopup(markerText).addTo(map);

var myCustomMarker2 = document.createElement('div');
var myCustomMarker3 = document.createElement('div');
var myCustomMarker4 = document.createElement('div');

myCustomMarker2.style.backgroundImage = 'url("https://icon-library.com/images/pokemon-ball-icon/pokemon-ball-icon-28.jpg")';
myCustomMarker3.style.backgroundImage = 'url("images/pokemon.jpg")';
myCustomMarker4.style.backgroundImage = 'url("images/heart.png")';
myCustomMarker2.style.backgroundSize = '100%';
myCustomMarker3.style.backgroundSize = '100%';
myCustomMarker4.style.backgroundSize = '100%';
var markerText2 = new mapboxgl.Popup().setHTML('<h3>David</h3><p>Bro</p>');
var markerText3 = new mapboxgl.Popup().setHTML('<h3>Secret Base</h3>');
var markerText4 = new mapboxgl.Popup().setHTML('<h3>Dewi</h3><p>Knuffeltje</p>');
var marker2 = new mapboxgl.Marker(myCustomMarker2).setLngLat([4.397671,52.080776]).setPopup(markerText2).addTo(map);
var marker3 = new mapboxgl.Marker(myCustomMarker3).setLngLat([4.396807,52.082413]).setPopup(markerText3).addTo(map);
var marker4 = new mapboxgl.Marker(myCustomMarker4).setLngLat([4.392918,52.080032]).setPopup(markerText4).addTo(map);
//var marker4 = new mapboxgl.Marker(myCustomMarker4).setLatLng([52.080032,4.392918]).addTo(map);   OMGEDRAAIDE COÖRDINATEN WERKEN NIET

function getAPIdata2() 
{
  // construct request
  var request2 = 'https://api.nasa.gov/planetary/apod?api_key=EhqRXPfeyTniCVir16c1PR1fmpPFK4mo17FjrRXm';

  // get current weather
  fetch(request2) 
  
  // parse response to JSON format
  .then
  (
    function(response) 
    { 
      return response.json();
    }
  )
  
  // do something with response
  .then
  (
    function(response) 
    {
      // show full JSON object
      console.log(response);

      //var degC = Math.floor(response.main.temp - 273.25);

      var body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = 'url("' + response.hdurl + '")';

      document.getElementById('weather').innerHTML = response.weather[0].description;
    }
  );
}

// init data stream
getAPIdata2();

function getAPIdata() 
{
	// construct request
	var cityName = document.getElementById('cityName').value;
	var request = 'http://api.openweathermap.org/data/2.5/weather?appid=baaedac942883702775c4f7e2e01ac99&q='+cityName;

	// get current weather
	fetch(request)	
	
	// parse response to JSON format
	.then
	(
		function(response) 
		{ 
			if(!response.ok)
			{
				throw Error(response.statusText);
			} 
			return response.json();
		}
	)
	
	// do something with response
	.then
	(
		function(response) 
		{
			// show full JSON object
			console.log(response);

			//document.getElementById('weather').innerHTML = response.weather[0].description;

			var degC = Math.floor(response.main.temp - 273.15);

			document.getElementById('weather').innerHTML = response.name + '<br>';
			document.getElementById('weather').innerHTML += degC + '&#176;C <br>';
			document.getElementById('weather').innerHTML += response.weather[0].description + '<br>';
			document.getElementById('weather').innerHTML += response.wind.speed + ' m/s Wind Speed';
		}
	)	
		
	//error handling
	.catch(
		function()
		{
			document.getElementById('weather').innerHTML = 'Wrong city name input';
		}
	);
}

// init data stream
document.getElementById('getWeather').onclick = function()
{
	getAPIdata();
}
