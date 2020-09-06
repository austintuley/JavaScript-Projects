var x = 10;
function addTen() {
	var y = 12;
	document.write(x + 10);
}

function addTwenty() {
	console.log(y + 20);
}

addTen();
addTwenty();

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
