function displayType(frontPerson) {
	var bandMember = frontPerson.getAttribute('data-band_person');
	alert(bandMember + ' is the frontperson of the band ' + frontPerson.innerHTML + '!');
}
