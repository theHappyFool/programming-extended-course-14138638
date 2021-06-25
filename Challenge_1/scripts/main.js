
const start = Date.now();
var time = 0;
var startSeconds = 59;
var startMinutes = 59;
var months = 5;
var days = 13;
var hours = 12;
var minutes = 0;
var seconds = 0;
var minutesPassed = 0;
var secondsPasses = 0;
var fuelCapacity = 174815962;
var oldFuelCapacity = 174815962;
var currentSpeed = 50000;
var oldSpeed = 50000;
var foodLeft = 0;
var parameters = document.getElementsByTagName('h1')[0];
var environment = document.getElementsByTagName('h1')[1];
var supplies = document.getElementsByTagName('h1')[2];
var metrics = document.getElementsByTagName('h1')[3];
var fuel = document.getElementsByTagName('p')[0];
var throttle = document.getElementsByTagName('p')[1];
var speed = document.getElementsByTagName('p')[2];
var acceleration  = document.getElementsByTagName('p')[3];
var gravity = document.getElementsByTagName('p')[4];
var distanceTraveled = document.getElementsByTagName('p')[5];
var timeTillArrival= document.getElementsByTagName('p')[6];
var atmosphere = document.getElementsByTagName('p')[7];
var food = document.getElementsByTagName('p')[8];
var water = document.getElementsByTagName('p')[9];
var convertButton = document.getElementById('convert');

var updateTime = function() 
{
	time = Date.now() - start;
	time = Math.floor(time/1000);
	minutesPassed = Math.floor(time / 60);
	secondsPassed = time - minutesPassed * 60;
};

parameters.onclick = function()
{
	if(parameters.className == 'active')
	{
		parameters.className = 'neutral';
		fuel.innerHTML = '';
		throttle.innerHTML = '';
		speed.innerHTML = '';
		acceleration.innerHTML = '';
	}else{
		parameters.className = 'active';
		metrics.className = 'neutral';
		environment.className = 'neutral';
		supplies.className = 'neutral';

		updateTime();
		fuelCapacity = oldFuelCapacity * (100 - time / 14342400);
		fuelCapacity = Math.round(fuelCapacity);
		currentSpeed = oldSpeed + 7 * time;

		fuel.innerHTML = 'FUEL: 87%; ' + fuelCapacity + ' Liters fuel left.';
		throttle.innerHTML = '10% of max throttle power';
		speed.innerHTML = 'SPEED: ' + currentSpeed + ' KM/H';
		acceleration.innerHTML = 'Acceleration: 0.2 G';
	}	
};

environment.onclick = function()
{
	if(environment.className == 'active')
	{
		environment.className = 'neutral';
		gravity.innerHTML = '';
		distanceTraveled.innerHTML = '';
		timeTillArrival.innerHTML = '';
		atmosphere.innerHTML = '';
	}else{
		environment.className = 'active';
		parameters.className = 'neutral';
		metrics.className = 'neutral';
		supplies.className = 'neutral';

		updateTime();
		minutes = startMinutes - minutesPassed;
		seconds = startSeconds - secondsPassed;

		gravity.innerHTML = 'Current Gravity: 0.02 G';
		distanceTraveled.innerHTML = 'Distance Traveled: 12.1 / 54.6 Million Kilometers';
		timeTillArrival.innerHTML = 'Time Till Arrival: ' + months + ' Months, ' + days + ' Days, ' + hours + ' Hours, ' + minutes + ' minutes, ' + seconds + ' seconds.';
		atmosphere.innerHTML = 'Current Atmosphere: null';
	}	
};

supplies.onclick = function()
{
	if(supplies.className == 'active')
	{
		supplies.className = 'neutral';
		food.innerHTML = ' ';
		water.innerHTML = ' ';
	}else{
		supplies.className = 'active';
		parameters.className = 'neutral';
		environment.className = 'neutral';
		metrics.className = 'neutral';
		foodLeft = (months * 30.5 + days) * 3 * 102;
		food.innerHTML = foodLeft + ' meals left';
		water.innerHTML = foodLeft / 3 * 4 + ' Liters of clean drinking water left';
	}	
};

metrics.onclick = function()
{
	if(metrics.className == 'active')
	{
		metrics.className = 'neutral';
	}else{
		metrics.className = 'active';
		parameters.className = 'neutral';
		environment.className = 'neutral';
		supplies.className = 'neutral';
	}	
};

convertButton.onclick = function ()
{
	var userInputRight = parseInt(document.getElementById('userInputRight').value);
	var userInputLeft = parseInt(document.getElementById('userInputLeft').value);

	//alert(userInputLeft);
	//alert(userInputRight);

	//if(Number.isInteger(userInputLeft) == true)
	//{
	//	alert('succes');
	//}else{
	//	alert(userInputLeft);
	//}

	if (Number.isInteger(userInputLeft) == true && userInputLeft != 0 && Number.isInteger(userInputRight) == true && userInputRight != 0) 
	{
		alert('Error: Both fields have a value');
	} else if (Number.isInteger(userInputLeft) == true && userInputLeft != 0)
	{
		userInputRight = userInputLeft * 0.376;
		alert(userInputLeft + ' Earth KG will be converted to Mars KG');
		document.getElementById('converterResult').innerHTML = userInputRight;
	} else if (Number.isInteger(userInputRight) == true && userInputRight != 0) 
	{
		userInputLeft = userInputRight / 0.376;
		alert(userInputRight + ' Mars KG will be converted to Earth KG');
		document.getElementById('converterResult').innerHTML = userInputLeft;
	}else{
		alert('Wrong input. Check if input is an integer and not 0.');
	}
};
