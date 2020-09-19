function validateForm() {
	var x = document.forms['myForm']['fName'].value;
	var y = document.forms['myForm']['lName'].value;
	if (x == '') {
		alert('You must enter your first name.');
		return false;
	}
	if (y == '') {
		alert('You must enter your last name.');
		return false;
	}
}
