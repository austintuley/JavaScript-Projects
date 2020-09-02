function add_function() {
	var addition = 2 + 2;
	document.getElementById('Math').innerHTML = '2 + 2 = ' + addition;
}

function subtract_function() {
	var subtraction = 1000 - 334;
	document.getElementById('Subtract').innerHTML = '1000 - 334 = ' + subtraction;
}

function multiplication_function() {
	var multiplication = 3 * 8;
	document.getElementById('Multiply').innerHTML = '3 * 8 = ' + multiplication;
}

function division_function() {
	var division = 100 / 3.14;
	document.getElementById('Divide').innerHTML = '100 / 3.14 = ' + division;
}

function multi_math_function() {
	var multi_math = (1 + 100) * 33 / (7 * 8);
	document.getElementById('Multi_Math').innerHTML =
		'1 plus 100, multiplied by 33, and divided by the result of 7 multiplied by 8 = ' + multi_math;
}

function remainder_function() {
	var remainder = 33 % 10;
	document.getElementById('Remainder').innerHTML = 'The remainder of 33 divided by 10 = ' + remainder;
}

function negation_function() {
	var negation = 666;
	document.getElementById('Negation').innerHTML =
		'The negation operator applied to a variable makes the operand negative, such as turning 666 into ' + -negation;
}

function increment_function() {
	var increment = 0;
	increment++;
	document.getElementById('Increment').innerHTML = 'Using the increment operator I turned 0 into ' + increment;
}

function decrement_function() {
	var decrement = 0;
	decrement--;
	document.getElementById('Decrement').innerHTML = 'Using the decrement operator I turned 0 into ' + decrement;
}

function random_function() {
	document.getElementById('Random').innerHTML = Math.random() * 100;
}

function round_function() {
	document.getElementById('Round').innerHTML = Math.round(13.4);
}
