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