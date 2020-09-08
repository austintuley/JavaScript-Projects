// The initial nested functions are for the countdown timer exercise

function countdown() {
	var seconds = document.getElementById('Seconds').value; // Variable to hold user input

	function tick() {
		seconds = seconds - 1; // Decrementing variable by 1 each time
		Timer.innerHTML = seconds;
		setTimeout(tick, 1000); // 1000ms = 1s
		if (seconds == -1) {
			alert("Time's up!"); // Will display after counting down past 0
		}
	}

	tick();
}

// Beginning of JavaScript for Slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail Image Controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

// Function begins once a user clicks any dot after first opening page in browser
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		// If user tries to go to the next slide while on final slide in container, the slideshow will start back over with the 1st slide in container
		slideIndex = 1;
	}
	if (n < 1) {
		// If user tries to go to a back from the 1st slide, it will revert to the last slide in container
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}
