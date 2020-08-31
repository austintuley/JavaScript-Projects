/* window.alert('Hello, World!');

document.write('Hello, World!');

var A = 'This is a string.';
document.write(A); */

var A = 'This is a string value for variable A'; // created window alert with ok button
window.alert(A);
document.write('<br>'); // create line break

var B = 'Brian sang, "I saw tail lights from Maria\'s car."'; // wrote variable B to Body of site
document.write(B);
document.write('<br>');

document.write('This is part 1 of my concatenated string,' + ' making this line part 2.'); // concatenated two strings
document.write('<br>');

var C = 'Concatenated' + ' string!';
document.write(C);
document.write('<br>');

var D = 'Dog',
	E = 'Elephant',
	F = 'Frog';
document.write(E);
document.write('<br>');

var D = D.fontcolor('red'); // changed the string font color when printed on screen
var E = E.fontcolor('purple');
var F = F.fontcolor('green');
document.write(D + ' ' + E + ' ' + F);
document.write('<br>');

document.write(3 + 3); // Entire line is a statement, (3+3) is an expression
