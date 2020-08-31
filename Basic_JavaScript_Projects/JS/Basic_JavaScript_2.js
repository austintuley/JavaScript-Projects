function My_Function() {
	// Naming 1st function
	var str = 'This text is red!'; // assigning variable
	var result = str.fontcolor('red'); // assign variable that changes the first variable's font color
	document.getElementById('Red_Text').innerHTML = result; // implement JS via HTML onclick event
}

function My_Second_Function() {
	// Naming 2nd function
	var sentence = 'I am enjoying the beginning'; // assigning variable
	sentence += ' of my time learning JavaScript!'; // concatenating str to 1st variable
	document.getElementById('concatenate').innerHTML = sentence; // implement JS via HTML onclick event
}
