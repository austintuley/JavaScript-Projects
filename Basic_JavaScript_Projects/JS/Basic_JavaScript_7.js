var x = 10;
function addTen() {
	var y = 12;
	document.write(x + 10);
}

function addTwenty() {
	console.log(y + 20);
}

addTen();
document.write('<br>');
//addTwenty();

function getDate() {
	if (new Date().getHours() < 18) {
		document.getElementById('Greeting').innerHTML = 'How are you today?';
	}
}

function myFunction() {
	var x = 2;
	var y = 5;
	if (x < y) {
		document.write(x + ' is less than ' + y);
	}
}

myFunction();

function eligibilityFunction() {
	var seasons = document.getElementById('Seasons').value;
	if (seasons < 2) {
		document.getElementById('Response').innerHTML =
			'You must complete 2 years of eligibility in college to qualify for the NFL draft.';
	} else {
		document.getElementById('Response').innerHTML = 'You may enter the NFL draft.';
	}
}

function timeFunction() {
	var time = new Date().getHours();
	var reply;
	if (time < 12 == time > 0) {
		reply = 'It is the morning.';
	} else if (time > 12 == time < 18) {
		reply = 'It is the afternoon.';
	} else {
		reply = 'It is the evening.';
	}
	document.getElementById('Time_of_Day').innerHTML = reply;
}
