function getReceipt() {
	// This initializes our string so it can get passed from
	// function to function, growing line by line into a full receipt
	var text1 = '<h3>You Ordered:</h3>';
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName('size');
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1 + selectedSize + '<br>'; // Adds the size of pie to running order
		}
	}
	// Size total gives us the price of the different sizes
	if (selectedSize === 'Personal Pizza') {
		sizeTotal = 6;
	} else if (selectedSize === 'Medium Pizza') {
		sizeTotal = 10;
	} else if (selectedSize === 'Large Pizza') {
		sizeTotal = 14;
	} else if (selectedSize === 'Extra Large Pizza') {
		sizeTotal = 16;
	} else if (selectedSize === 'Deep Dish Pizza') {
		sizeTotal = 22;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize + ' = $' + sizeTotal + '.00');
	console.log('size text1: ' + text1);
	console.log('subtotal: $' + runningTotal + '.00');
	// These variables will get passed on to each function.
	getTopping(runningTotal, text1);
}

// Loop to add all selected toppings to an array
// Also adds each topping to running order
function getTopping(runningTotal, text1) {
	var toppingTotal = 0;
	var selectedTopping = [];
	var toppingArray = document.getElementsByClassName('toppings');
	for (var j = 0; j < toppingArray.length; j++) {
		if (toppingArray[j].checked) {
			selectedTopping.push(toppingArray[j].value);
			console.log('selected topping item: (' + toppingArray[j].value + ')');
			text1 = text1 + toppingArray[j].value + '<br>';
		}
	}
	// Each pie comes with 1 free topping, this accounts for removing
	var toppingCount = selectedTopping.length;
	if (toppingCount > 1) {
		toppingTotal = toppingCount - 1;
	} else {
		toppingTotal = 0;
	}
	// Keeps a running tab in the console as well as printing the order info and price for the customer
	runningTotal = runningTotal + toppingTotal;
	console.log('total selected topping items: ' + '$' + toppingTotal + '.00');
	console.log(toppingCount + ' topping - 1 free topping = ' + '$' + toppingTotal + '.00');
	console.log('topping text1: ' + text1);
	console.log('Purchase Total: ' + '$' + runningTotal + '.00');
	document.getElementById('showText').innerHTML = text1;
	document.getElementById('totalPrice').innerHTML = '<h3>Total: <strong>' + runningTotal + '.00' + '</strong></h3>';
}
