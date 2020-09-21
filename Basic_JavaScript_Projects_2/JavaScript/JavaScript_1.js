function instrumentFunction() {
	var instrumentOutput = '';
	var instrument = document.getElementById('instrument').value;
	var instrumentString = ' is a wonderful choice.';

	switch (instrument) {
		case 'Vocals':
			instrumentOutput = 'Vocals' + instrumentString;
			break;
		case 'Guitar':
			instrumentOutput = 'Guitar' + instrumentString;
			break;
		case 'Bass':
			instrumentOutput = 'Bass' + instrumentString;
			break;
		case 'Drums':
			instrumentOutput = 'Drums' + instrumentString;
			break;
		case 'Piano':
			instrumentOutput = 'Piano' + instrumentString;
			break;
		default:
			instrumentOutput = 'Please enter an instrument exactly as written on the above list.';
	}
	document.getElementById('output').innerHTML = instrumentOutput;
}

function Hello_World_Function() {
	var a = document.getElementsByClassName('click');
	a[0].innerHTML = 'This text HAS changed.';
}

function textFunction() {
	var c = document.getElementById('helloFriend');
	var ctx = c.getContext('2d');
	ctx.font = '50px Arial';
	ctx.strokeText('Hello, Friend!', 100, 125);
}

function gradientFunction() {
	var c = document.getElementById('linearGradient');
	var ctx = c.getContext('2d');
	var myGradient = ctx.createLinearGradient(0, 0, 0, 170);
	myGradient.addColorStop(0, 'orange');
	myGradient.addColorStop(1, 'white');
	ctx.fillStyle = myGradient;
	ctx.fillRect(0, 0, 500, 250);
}
