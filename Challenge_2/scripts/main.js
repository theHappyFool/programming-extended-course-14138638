var blink = true;
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//var secondsPassedEarthTime = 0;
//var secondsPassedMarsTime = 0;
//var hoursPassedOnMars = 0;
//var minutesPassedOnMars = 0;
var temp = 0;
var temp2 = 0;
var temp3 = 0;

function blinking () 
{
	var today = new Date();
	temp2 = Math.floor(today.getTime()/88800000);		// days passed on mars since 1970; 1 mars day = 1 earth day and 40 minutes
	temp2 = today.getTime() - temp2 * 88800000; 		// Milliseconds passed on mars since today (mars time)
	temp2 = temp2/1000;									// seconds passed on mars since today (mars time)
	temp3 = Math.floor(temp2/3600);						// hours passed on mars since today (mars time)
	temp2 = temp2/60 - temp3 * 60;						// minutes passed on mars since today (max 60, mars time)

	document.getElementById('marsTime').innerHTML = addLeadingZero(temp3) + ':' + addLeadingZero(Math.floor(temp2));

	//secondsPassedEarthTime = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
	//secondsPassedMarsTime = Math.round(secondsPassedEarthTime * 1.0274912517); // 1 full earth day = 24 hours and 40 minutes on Mars
	//hoursPassedOnMars = Math.floor(secondsPassedMarsTime / 3600);
	//temp = secondsPassedMarsTime - hoursPassedOnMars*3600;
	//minutesPassedOnMars = Math.floor(temp / 60);

	//document.getElementById('marsTime').innerHTML = addLeadingZero(hoursPassedOnMars) + ':' + addLeadingZero(minutesPassedOnMars);

	if (blink == true)
	{
		document.getElementById('timeHours').innerHTML = addLeadingZero(today.getHours());
		document.getElementById('semicolon').classList.replace('visible','hidden');
		document.getElementById('timeMinutes').innerHTML = addLeadingZero(today.getMinutes());
		blink = false;
	} 
	else if (blink == false) 
	{
		document.getElementById('timeHours').innerHTML = addLeadingZero(today.getHours());
		document.getElementById('semicolon').classList.replace('hidden','visible');
		document.getElementById('timeMinutes').innerHTML = addLeadingZero(today.getMinutes());
		blink = true;
	}
	if(today.getDate()==1)
	{
		document.getElementById('date').innerHTML = today.getDate() + "st of " + months[today.getMonth()] + " " + today.getFullYear();
	}
	else if(today.getDate()==2)
	{
		document.getElementById('date').innerHTML = today.getDate() + "nd of " + months[today.getMonth()] + " " + today.getFullYear();
	}
	else if(today.getDate()==3)
	{
		document.getElementById('date').innerHTML = today.getDate() + "rd of " + months[today.getMonth()] + " " + today.getFullYear();
	}
	else if(today.getDate() < 32)
	{
		document.getElementById('date').innerHTML = today.getDate() + "th of " + months[today.getMonth()] + " " + today.getFullYear();
	}
};

function addLeadingZero(number)
{
	if(number < 10)
	{
		number = '0' + number;
	}
	return number;
}
blinking();
setInterval(blinking, 1000);





