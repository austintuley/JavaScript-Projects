//While Loop
function Call_Loop() {
	var digit = '';
	var x = 1;
	while (x < 21) {
		// Will continue until the parameter is no longer true
		digit += '<br>' + x;
		x++;
	}
	document.getElementById('Loop').innerHTML = digit;
}

// To find length of a string
function stringLength() {
	var x = 'Dallas Stars play game 2 of the Western Conference Finals tonight! They lead the series 1-0.';
	var y = x.length;
	document.getElementById('length').innerHTML = y;
}

// For loop
var instruments = [ 'Drums', 'Guitar', 'Bass', 'Piano', 'Vocals' ];
var content = '';
var x;
function forLoop() {
	for (x = 0; x < instruments.length; x++) {
		// Will print every element because of .length
		content += instruments[x] + '<br>';
	}
	document.getElementById('List_of_Instruments').innerHTML = content;
}

// Array Function
function arrayFunction() {
	var difficultyLevel = []; // Creating an array
	difficultyLevel[0] = 'Easy';
	difficultyLevel[1] = 'Medium';
	difficultyLevel[2] = 'Hard';
	document.getElementById('level').innerHTML = 'The level of difficulty is ' + difficultyLevel[0] + '.';
}

// Constant Function
function constantFunction() {
	// Constant keys always stay but the value can be changed
	const drumKit = { brand: 'Drum Workshop', type: 'Cocktail Kit', material: 'Mahogany' };
	drumKit.finish = 'Champagne Sparkle'; // A new kvp may be added
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

// Defining Scope and let keyword
var x = 66; //Global Scope
document.write(x);
{
	let x = 13; //Block scope
	document.write('<br>' + x);
}
document.write('<br>' + x + '<br>'); // x reverts to Globally defined variable

// Return Functions
function returnFunction(name) {
	return 'Adios, ' + name + '.';
}

document.getElementById('hello').innerHTML = returnFunction('Joe Strummer');

function myFunction(name) {
	return 'Hello ' + name;
}
document.getElementById('demo').innerHTML = myFunction('John');

// Creating an object with properties and a method
let motorcycle = {
	make: 'Honda',
	model: 'Shadow',
	year: 1999,
	engineSize: '650cc',
	description: function() {
		return (
			'This motorcycle is a ' +
			motorcycle.year +
			' ' +
			motorcycle.make +
			' ' +
			motorcycle.model +
			' with a ' +
			motorcycle.engineSize +
			' engine.'
		);
	}
};

document.getElementById('motorcycle').innerHTML = motorcycle.description();

// Break Statement
var text = '';
var i;
for (i = 20; i > 0; i--) {
	if (i === 5) {
		// If this condition is met it breaks out of the loop
		break;
	}
	text += 'The number is ' + i + '.' + '<br>';
}
document.getElementById('break').innerHTML = text;

// Continue Statement
var text2 = '';
var j;
for (i = -11; i < 12; i++) {
	if (i === 0) {
		// If this condition is met it breaks for this iteration and then continues through the loop
		continue;
	}
	text2 += 'The number is ' + i + '. <br>';
}
document.getElementById('continue').innerHTML = text2;
