////////////////////////////////////////////
					/////////////// DOM Elements ///////////////
										////////////////////////////////////////////

/// modal
const modalbg = document.querySelector(".bground");
const modalbg2 = document.querySelector(".bground2");
const modalBtn = document.querySelectorAll(".modal-btn");
/// buttons
const submitBtn = document.querySelectorAll(".btn-submit");
const closeBtn = document.querySelectorAll(".close");
const closeBtn2 = document.querySelectorAll(".close2");
const closeBtn3 = document.querySelectorAll(".close3");
/// form
const form = document.querySelector(".modal-form");

// form inputs 
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const game = document.getElementById("quantity");
const citySelection = document.querySelectorAll(".citySelection");
const condition = document.getElementById("checkbox1");

// connecting alert texts to DOM alerts 
const firstAlert = document.getElementById("firstAlert");
const lastAlert = document.getElementById("lastAlert");
const emailAlert = document.getElementById("emailAlert");
const birthdateAlert = document.getElementById("birthdateAlert");
const gameAlert = document.getElementById("gameAlert");
const citySelectionAlert = document.getElementById("citySelectionAlert");
const conditionsAlert = document.getElementById("conditionsAlert");

// Setting alert texts 
const unvalidAlerts = {
	firstAlert :"Votre prénom doit comporter au moins deux lettres.",
	lastAlert :"Votre nom doit comporter au moins deux lettres.",
	emailAlert :"Veuillez renseigner une adresse mail valide.(ex: n.drake@naughtydog.com)",
	birthdateAlert :"Veuillez entrer une date de naissance valide.",
	gameAlert:"Veuillez entrer un chiffre valide.",
	citySelectionAlert :"Veuillez sélectionner une ville.",
	conditionsAlert :"Veuillez accepter les conditions d'utilisation.",
	default :"Ce champ est obligatoire.",
	};

//Checking if one of the radio button is checked
let radioCheckedOnce = false ;

// Linking JS alerts details to HTML <P> 
firstAlert.innerHTML = (unvalidAlerts.firstAlert);
lastAlert.innerHTML = (unvalidAlerts.lastAlert);
emailAlert.innerHTML = (unvalidAlerts.emailAlert);
birthdateAlert.innerHTML = (unvalidAlerts.birthdateAlert);
gameAlert.innerHTML = (unvalidAlerts.gameAlert);
citySelectionAlert.innerHTML = (unvalidAlerts.citySelectionAlert);
conditionsAlert.innerHTML = (unvalidAlerts.conditionsAlert);

/////////////////////////////////////
					/////////////// Events //////////////
										/////////////////////////////////////

// launch modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// validate modal 2
closeBtn2.forEach((btn) => btn.addEventListener("click", closeModal2));

// close modal 2
closeBtn3.forEach((btn) => btn.addEventListener("click", closeModal2));

// Checking user submission
submitBtn.forEach((btn) => btn.addEventListener("click", formValidation));

// Real time update of user input validity
first.addEventListener("input", isIssueResolved);
last.addEventListener("input", isIssueResolved);
email.addEventListener("input", isIssueResolved);
birthdate.addEventListener("input", isIssueResolved);
game.addEventListener("input", isIssueResolved);
citySelection.forEach((btn) => btn.addEventListener("input", isRadioChecked));
condition.addEventListener("input", isIssueResolved);

//disable alert popus from html/browser while still applying the "required" condition to form
form.addEventListener( "invalid", function( event ) {
	event.preventDefault();
}, true );

/////////////////////////////////////////
					/////////////// Functions ///////////////
									/////////////////////////////////////////

//Responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
 }

 // launch second modal
function launchModal2() {
  modalbg2.style.display = "block";
 }

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  }

// close both modals
function closeModal2() {
   modalbg2.style.display = "none";
}

//radio button checking
function isRadioChecked (){
	radioCheckedOnce = true;
	citySelectionAlert.style.visibility = "hidden";
}

//remove error messages if inputs are valid
function isIssueResolved (){
	if (first.checkValidity()){
  	firstAlert.style.visibility = "hidden";
		first.style.border = "none";
  }
  if (last.checkValidity()){
  	lastAlert.style.visibility = "hidden";
		last.style.border = "none";    
  }
  if (email.checkValidity()){
    emailAlert.style.visibility = "hidden";
		email.style.border = "none";
  }
  if (birthdate.checkValidity()){
    birthdateAlert.style.visibility = "hidden";
		birthdate.style.border = "none";
  }
  if (game.checkValidity()){
    gameAlert.style.visibility = "hidden";
		game.style.border = "none";
  }
  if (condition.checkValidity()){
    conditionsAlert.style.visibility = "hidden";
  }
}

//validate form before submission & display error messages
function formValidation(){
 if (!first.checkValidity()){
  	firstAlert.style.visibility = "visible";
		first.style.border = "2px solid red";
  }
  if (!last.checkValidity()){
  	lastAlert.style.visibility = "visible";
		last.style.border = "2px solid red";
    
  }
  if (!email.checkValidity()){
    emailAlert.style.visibility = "visible";
		email.style.border = "2px solid red";
  }
  if (!birthdate.checkValidity()){
    birthdateAlert.style.visibility = "visible";
		birthdate.style.border = "2px solid red";
  }
  if (!game.checkValidity()){
    gameAlert.style.visibility = "visible";
		game.style.border = "2px solid red";
  }
  if (!radioCheckedOnce){
  	citySelectionAlert.style.visibility = "visible";
  }
  if (!condition.checkValidity()){
    conditionsAlert.style.visibility = "visible";
  }
}

// submit & trigger next timed modal (subscription confirmation)
  function validate() {
  	event.preventDefault();
  	closeModal();
    launchModal2();
    setTimeout(closeModal2, 3500);// Auto-closing of second modal after 3.5 seconds
}