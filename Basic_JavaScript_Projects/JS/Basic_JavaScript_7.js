var x = 10;
function addTen() {
	var y = 12;
	document.write(x + 10);
}

function addTwenty() {
	// testing variable local to another function rather than global
	console.log(y + 20);
}

addTen();
document.write('<br>');
//addTwenty(); // Commented out after testing error in browser console

function getDate() {
	// first use of if statement checking to verify if the time on local pc is before 6pn
	if (new Date().getHours() < 18) {
		document.getElementById('Greeting').innerHTML = 'How are you today?';
	}
}

function myFunction() {
	// wrote my own if statement to check if x is less than y
	var x = 2;
	var y = 5;
	if (x < y) {
		document.write(x + ' is less than ' + y);
	}
}

myFunction();

function eligibilityFunction() {
	// Function to determine if a player may enter the NFL Draft
	var seasons = document.getElementById('Seasons').value;
	if (seasons < 2) {
		// Determines response if a player has less than two completed NCAA seasons
		document.getElementById('Response').innerHTML =
			'You must complete 2 years of eligibility in college to qualify for the NFL draft.';
	} else {
		// If the player has two or more completed NCAA seasons, this is the response
		document.getElementById('Response').innerHTML = 'You may enter the NFL draft.';
	}
}

function timeFunction() {
	//Function to respond with morning, afternoon or night based on local user time
	var time = new Date().getHours();
	var reply;
	if (time < 12 == time > 0) {
		// reply if the hours are between 12am and 12pm
		reply = 'It is the morning.';
	} else if (time > 12 == time < 18) {
		// reply if between 12pm and 6pm
		reply = 'It is the afternoon.';
	} else {
		// reply if between 6pm and 12am
		reply = 'It is the evening.';
	}
	document.getElementById('Time_of_Day').innerHTML = reply;
}
