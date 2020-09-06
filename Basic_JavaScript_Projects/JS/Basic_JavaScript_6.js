function Ride_Function() {
	// Ternary function to do determine if user can ride
	var Height, Can_Ride;
	Height = document.getElementById('Height').value;
	Can_Ride = Height < 52 ? 'You are too short' : 'You are tall enough'; // Will determine if user is tall enough to ride
	document.getElementById('Ride').innerHTML = Can_Ride + ' to ride.';
}

function Vote_Function() {
	//Ternary function to determine if user can vote
	var Age, Can_Vote;
	Age = document.getElementById('Age').value;
	Can_Vote = Age < 18 ? 'You are too young' : 'You are old enough'; // Will determine if user can vote based on age
	document.getElementById('Vote').innerHTML = Can_Vote + ' to vote.';
}

function Vehicle(Make, Model, Year, Color) {
	//Constructor for the vehicle class
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}

var Jack = new Vehicle('Dodge', 'Viper', 2020, 'Red'); // intializing 3 new objects within Vehicle class
var Emily = new Vehicle('Jeep', 'Trail Hawk', 2019, 'White and Black');
var Erik = new Vehicle('Ford', 'Pinto', 1971, 'Mustard');

function myFunction() {
	/*will display Erik's vehicle information*/
	document.getElementById('Keywords_and_Constructors').innerHTML =
		'Erik drives a ' +
		Erik.Vehicle_Color +
		'-colored ' +
		Erik.Vehicle_Model +
		' manufactured in ' +
		Erik.Vehicle_Year;
}

var Jackie = new Vehicle('Chevy', 'Camaro', 1999, 'Silver'); // Added Jackie to list of drivers
function myFunction2() {
	document.getElementById('New_and_This').innerHTML =
		'Jackie drives a ' + Jackie.Vehicle_Year + ' ' + Jackie.Vehicle_Make + ' ' + Jackie.Vehicle_Model;
}

function Student(Major, GPA) {
	// Initiated STudent function
	this.Student_Major = Major;
	this.Student_GPA = GPA;
}

var Valerie = new Student('Nursing', 4.0); //Added Valerie to the Student Class
function myFunction3() {
	document.getElementById('Student').innerHTML =
		"Valerie's major is " + Valerie.Student_Major + ' and her GPA is ' + Valerie.Student_GPA;
}

function countFunction() {
	// First go at Nested functions
	document.getElementById('Nested_Function').innerHTML = Count();
	function Count() {
		//Nested withing countFunction
		var startingPoint = 5;
		function plusOne() {
			//Nested within Count function which is nested within countFunction
			startingPoint += 1; //Will add 1 to the startingPoint
		}
		plusOne(); // Using plusOne function to add 1 to the starting point
		return startingPoint; // will display new startingPoint value
	}
}
