function fullSentence() {
	// Using concat() to build a full sentence
	var part1 = 'Cam Newton ';
	var part2 = 'will start his first ';
	var part3 = 'game as a Patriot ';
	var part4 = 'one week from today!';
	var wholeSentence = part1.concat(part2, part3, part4); // tacking on parts 2-4 to part1
	document.getElementById('Concatenate').innerHTML = wholeSentence;
}

function sliceMethod() {
	// Slicing sentence to only display the name, Johnny
	var sentence = 'All work and no play makes Johnny a dull boy.';
	var section = sentence.slice(27, 33); // 'y' falls on 32 but must go one index further to include the y
	document.getElementById('Slice').innerHTML = section;
}

function sliceMethod2() {
	// function to slice out 'Tom'
	var sentence2 = 'Tom is still the greatest QB to ever play the game.';
	var noQuestion = sentence2.slice(0, 3);
	document.getElementById('Greatest_Ever').innerHTML = noQuestion;
}

function makeAllCaps() {
	// Function will turn variable cheer into all capital letters when displayed within the browser
	var cheer = "Let's go Pats!";
	document.getElementById('Upper').innerHTML = cheer.toUpperCase();
}

function searchFunction() {
	// Funtion will tell us which index 'Pats!' begins
	var cheer = "Let's go Pats!";
	document.getElementById('Search').innerHTML = cheer.search('Pats!');
}

function numberToStringFunction() {
	// Function will return the variable s as a string although it was originally a number, notice the lack of parantheses
	var s = 666;
	document.getElementById('Number_to_String').innerHTML = s.toString();
}

function precisionFunction() {
	// Precision function will only return my specified number of digits, leaving off the excess decimal places not desired for display
	var t = 456456456.123123123;
	document.getElementById('Precise').innerHTML = t.toPrecision(10);
}

function fixedFunction() {
	// Using this function will display variable z with only 3 decimal places, rounded
	var z = 10.5618154621544;
	document.getElementById('Fixed').innerHTML = z.toFixed(3);
}

function valueOfFunction() {
	// Returns the primitive value of the variable statement
	var statement = 'Stars, beat the Knights tonight!';
	document.getElementById('Value').innerHTML = statement.valueOf();
}
