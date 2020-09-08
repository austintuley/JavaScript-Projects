function Call_Loop() {
	var digit = '';
	var x = 1;
	while (x < 21) {
		digit += '<br>' + x;
		x++;
	}
	document.getElementById('Loop').innerHTML = digit;
}

function stringLength() {
	var x = 'Dallas Stars play game 2 of the Western Conference Finals tonight! They lead the series 1-0.';
	var y = x.length;
	document.getElementById('length').innerHTML = y;
}

var instruments = [ 'Drums', 'Guitar', 'Bass', 'Piano', 'Vocals' ];
var content = '';
var x;
function forLoop() {
	for (x = 0; x < instruments.length; x++) {
		content += instruments[x] + '<br>';
	}
	document.getElementById('List_of_Instruments').innerHTML = content;
}

function arrayFunction() {
	var difficultyLevel = [];
	difficultyLevel[0] = 'Easy';
	difficultyLevel[1] = 'Medium';
	difficultyLevel[2] = 'Hard';
	document.getElementById('level').innerHTML = 'The level of difficulty is ' + difficultyLevel[0] + '.';
}

function constantFunction() {
	const drumKit = { brand: 'Drum Workshop', type: 'Cocktail Kit', material: 'Mahogany' };
	drumKit.finish = 'Champagne Sparkle';
	drumKit.material = 'Birch';
	document.getElementById('constant').innerHTML =
		'The new ' +
		drumKit.finish +
		' ' +
		drumKit.brand +
		' ' +
		drumKit.type +
		' is made of ' +
		drumKit.material +
		'.';
}

var x = 66;
document.write(x);
{
	let x = 13;
	document.write('<br>' + x);
}
document.write('<br>' + x + '<br>');

function returnFunction(name) {
	return 'Adios, ' + name + '.';
}

document.getElementById('hello').innerHTML = returnFunction('Joe Strummer');

function myFunction(name) {
	return 'Hello ' + name;
}
document.getElementById('demo').innerHTML = myFunction('John');
