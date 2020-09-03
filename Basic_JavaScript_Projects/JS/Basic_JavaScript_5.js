document.write(typeof 'Valerie Grace'); // Using typeof which displays string in this case
document.write('<br>');

// Trying isNan()
document.write(isNaN('Jackie'));
document.write('<br>');
document.write(isNaN(10));
document.write('<br>');

// Functions to display infinity and -inifinity
function infinity_function() {
	document.getElementById('Infinity').innerHTML = 5e308;
}

function negative_function() {
	document.getElementById('Negative').innerHTML = -6e308;
}

document.write('<br>');

// Comparison operators
document.write(10 > 2);
document.write('<br>');
document.write(10 > 2);

// Displaying results in the browser console
console.log(3 + 3);
console.log(3 + 4);
document.write('<br>');

// Expression combining a string with a number
document.write('66' + 6);
console.log(10 < 3);
document.write('<br>');

// Expressions using Boolean logic
document.write(10 == 10);
document.write('<br>');
document.write(10 == 11);
document.write('<br>');

// Triple = signs check that data type and value are both the same
document.write(10 === 10);
document.write('<br>');
document.write('Bob' === 11);
document.write('<br>');
document.write(10 === '10');
document.write('<br>');
document.write('Jackie' === 'Valerie');
document.write('<br>');
document.write('Boolean Logic');
document.write('<br>');
document.write(10 > 1 && 10 < 20);
document.write('<br>');
document.write(10 > 1 && 11 > 12);
document.write('<br>');
document.write(10 > 100 || 10 > 9);
document.write('<br>');
document.write(10 < 1 || 10 > 100);
document.write('<br>');

// Using the Not(!) operator
function not_function() {
	document.getElementById('Not').innerHTML = !(10 > 100);
}

function not_2_function() {
	document.getElementById('Not_2').innerHTML = !(10 > 3);
}
