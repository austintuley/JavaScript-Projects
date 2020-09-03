function my_dictionary() {
	// create function
	var dog = {
		//create dictionary
		Name: 'Sadie Mae',
		Breed: 'Pitbull',
		Age: 5,
		Color: 'Black'
		// Age: 9  <-- Tested duplicate kvp
	};
	delete dog.Breed; // Utilize delete operator
	document.getElementById('Dictionary').innerHTML = dog.Breed; // Returns undefined after using the delete statement and trying to return the value of deleted key
}
