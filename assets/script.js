const taglines = [ //Toutes les taglines pour le carrousel

	'Impressions tous formats <span>en boutique et en ligne</span>'
	,

	'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
	,

	'Grand choix de couleurs <span>de CMJN aux pantones</span>'
	,

	'Autocollants <span>avec découpe laser sur mesure</span>'
]

let slideIndex = 1; //slide de commencer

slidesActive(slideIndex);

let precedent = document.querySelector('#precedent');
let suivant = document.querySelector('#suivant');

suivant.addEventListener('click', function () {
	plusSlides(1); // Incrémente l'index pour afficher la diapositive suivante
});

precedent.addEventListener('click', function () {
	plusSlides(-1); // Décrémente l'index pour afficher la diapositive précédente
});

function plusSlides(n) {
	slidesActive(slideIndex += n);
}

function slidesActive(n) {
	let slides = document.querySelectorAll('.banner-img');
	let dots = document.querySelectorAll('.dot');
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot_selected');
	}

	slides[slideIndex - 1].style.display = "block";

	dots[slideIndex - 1].classList.add('dot_selected');

	let tagline = taglines[slideIndex - 1];

	let taglineElement = document.querySelector('.tagline');
	taglineElement.innerHTML = tagline;
}