const taglines = [ //Toutes les taglines pour le carrousel

	'Impressions tous formats <span>en boutique et en ligne</span>'
	,

	'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
	,

	'Grand choix de couleurs <span>de CMJN aux pantones</span>'
	,

	'Autocollants <span>avec découpe laser sur mesure</span>'
]

let slideIndex = 1; //slide de commencer, Index de la diapositive actuelle, commence à 1

slidesActive(slideIndex); // Affiche la diapositive active


// Sélection des boutons précédent et suivant du carrousel
let precedent = document.querySelector('#precedent');
let suivant = document.querySelector('#suivant');


suivant.addEventListener('click', function () {
	plusSlides(1); // Incrémente l'index pour afficher la diapositive suivante
});

precedent.addEventListener('click', function () {
	plusSlides(-1); // Décrémente l'index pour afficher la diapositive précédente
});

// Fonction pour passer à la diapositive suivante ou précédente
function plusSlides(n) {
	slidesActive(slideIndex += n);
}

// Fonction pour afficher la diapositive active et mettre à jour la tagline
function slidesActive(n) { 
	let slides = document.querySelectorAll('.banner-img'); // Sélectionne toutes les diapositives
	let dots = document.querySelectorAll('.dot'); // Sélectionne tous les indicateurs de diapositives
	
	if (n > slides.length) { slideIndex = 1 } // Revenir à la première diapositive si on dépasse le nombre total de diapositives
	if (n < 1) { slideIndex = slides.length } // Aller à la dernière diapositive si on est avant la première diapositive

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; // Masquer toutes les diapositives
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot_selected');
	} // Supprimer la classe 'dot_selected' de tous les indicateurs de diapositives

	slides[slideIndex - 1].style.display = "block"; // Afficher la diapositive active

	dots[slideIndex - 1].classList.add('dot_selected'); 
	// Ajouter la classe CSS 'dot_selected' à l'indicateur de diapositive active


	let tagline = taglines[slideIndex - 1]; 
    // Récupérer la tagline correspondant à la diapositive active

	let taglineElement = document.querySelector('.tagline');
	// Sélectionner l'élément où afficher la tagline

	taglineElement.innerHTML = tagline;
	// Mettre à jour le contenu avec la tagline correspondante
}