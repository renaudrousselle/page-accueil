'use strict';
/* ---- Déclaration des variables ---- */
// Navbar
var navBar = document.getElementById('nav-bar');
var navBarSection = document.querySelector('#nav-bar > section');
var loupe = $('#loupe');
var input = $('nav input');
var boutonReturn = $('#bouton-return');

// Encart
var compte;
var compte2;
var compte3;
var encartNoir = $('#conteneur > section:nth-child(2)');
var encartFormulaire = $('#conteneur > section:last-child');

// Formulaire
var regexCp = /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/;
var regexVille = /\D/; // A revoir !
var regexSuperficie = /[0-9]{1,4}/; // A revoir !

// Cookies
var hauteurBarCookies = $('#cookies p').height();

/* ---- Création des fonctions ---- */
// Nav Bar détachable
function detacherNavBar() {
    var positionWindow = window.pageYOffset;
    var positionNavBar = navBar.offsetTop;
    
    if (positionNavBar < positionWindow) {
        $('#nav-bar').addClass("navBarFixed");
        boutonReturn.css({"display": "flex", "flex-direction": "column", "justify-content": "center"});
        $('nav > a:nth-child(2) img').css("display", "block");
    } else {
        $('#nav-bar').removeClass("navBarFixed");
        boutonReturn.css("display", "none");
        $('nav > a:nth-child(2) img').css("display", "none");
    }
}

// Affichage du menu
function afficherMenu() {
    $('#navFullScreen').css({
        "transition": "all 0.5s",
        "left": "0%",
    });
}

// Affichage des Sous-menus
function afficherSousMenu4() {
    $('#navFullScreen section:nth-child(4)').css("display", "block");
    $('#navFullScreen section:nth-child(3)').css("display", "none");
    $('#flecheMenu').css("display", "block");
}
function afficherSousMenu5() {
    $('#navFullScreen section:nth-child(5)').css("display", "block");
    $('#navFullScreen section:nth-child(3)').css("display", "none");
    $('#flecheMenu').css("display", "block");
}
function afficherSousMenu6() {
    $('#navFullScreen section:nth-child(6)').css("display", "block");
    $('#navFullScreen section:nth-child(3)').css("display", "none");
    $('#flecheMenu').css("display", "block");
}
function revenirAuMenu() {
    $('#navFullScreen section:nth-child(3)').css("display", "block");
    $('#navFullScreen section:nth-child(4)').css("display", "none");
    $('#navFullScreen section:nth-child(5)').css("display", "none");
    $('#navFullScreen section:nth-child(6)').css("display", "none");
    $('#flecheMenu').css("display", "none");
}

// Cacher Menu
function cacherMenu() {
    $('#navFullScreen').css({
        "transition": "all 0.5s",
        "left": "-100%",
    });
}

// Bouton loupe du menu
function search() {
    input.fadeToggle();
    input.focus();
}

// Bouton retour haut de page
$(function() {
  $('#bouton-return').click(function(){
    $('html').animate({scrollTop:0}, 'slow');
    return false;
  });
});

// Gestion du formulaire
function verificationCodePostal() {
    // Récupération des données dans un tableau
    var valeurTransaction = $('#transaction option:selected[value]');
    var valeurBien = $('#bien option:selected[value]');
    var valeurNombrePieces = $('#nombre-pieces option:selected[value]');
    var valeurAnneeConstruction = $('#annee-construction option:selected[value]');
    
    var codePostal = $('#code-postal').val();
    var ville = $('#ville').val();
    var superficie = $('#superficie').val();
    
    // Vérification de la validité des données
    if (valeurTransaction.val() == 0) {
        $('#transaction').css({"background": "#e8b4b5", "border": "1px red solid"});
    } else if (valeurBien.val() == 0) {
        $('#bien').css({"background": "#e8b4b5", "border": "1px red solid"});
    } else if (valeurNombrePieces.val() == 0) {
        $('#nombre-pieces').css({"background": "#e8b4b5", "border": "1px red solid"});
    } else if (valeurAnneeConstruction.val() == 0) {
        $('#annee-construction').css({"background": "#e8b4b5", "border": "1px red solid"});
    } else if ((codePostal.length == "") || (!regexCp.test(codePostal))) {
        $('#code-postal').css({"background": "#e8b4b5", "border": "1px red solid"});
    } else if (!regexVille.test(ville)) {
        $('#ville').css({"background": "#e8b4b5", "border": "1px red solid"});      
    } else if (!regexSuperficie.test(superficie)) {
        $('#superficie').css({"background": "#e8b4b5", "border": "1px red solid"});
    }
} 
function disparitionCouleur() {
    if ($(this).length >= 0) {
        $(this).css({"background": "", "border": ""});
    }
}

/* Slide formulaire Encart Image */
function temporisation() {
    compte = setInterval(slide, 2000);
    compte2 = setInterval(slide2, 1000);
    compte3 = setInterval(slide3, 5000);
} 
function slide() {
    clearInterval(compte);
    $(encartNoir).css({"left": "calc(50% - 37.5%)", "transition": "all 1s"});
    
} 
function slide2() {
    clearInterval(compte2);
    $(encartFormulaire).css({"left": "calc(48.5% - 34%)", "transition": "all 1s"});
} 
/* Fin Slide formulaire Encart Image */

// Cookies
function slide3() {
    clearInterval(compte3);
    $('#cookies p').css("display", "flex");
    $('#bouton-return').css("bottom", (hauteurBarCookies + 30) + "px");
} 
function okCooks() {
    $('#cookies p').css("display", "none");
    $('#bouton-return').css("bottom", "20px");
}


// Boutons Je vends / Je loue
function afficherVentes() {
    $('#vendre').css({"background": "#343538", "color": "#fff"});
    $('#venteAppart').css("display", "block");
    $('#venteMaison').css("display", "block");
    $('#locationAppart').css("display", "none");
    $('#locationMaison').css("display", "none");
    $('#louer').css({"background": "#fff", "color": "#343538"});
} 
function afficherLocation() {
    $(this).css({"background": "#343538", "color": "#fff"});
    $('#venteAppart').css("display", "none");
    $('#venteMaison').css("display", "none");
    $('#locationAppart').css("display", "block");
    $('#locationMaison').css("display", "block");
    $('#vendre').css({"background": "#fff", "color": "#343538"});
}


/* ---- Gestionnaire d'événements ---- */
$(document).ready(function() {
    temporisation();
    // Cookies
    $('#cookies button').on('click', okCooks);
    
    // NavBar
    window.addEventListener('scroll', detacherNavBar);
    $('#loupe').on('click', search);
    $('#menuBurger').on('click', afficherMenu);
    $('#croixMenu').on('click', cacherMenu);
    $('#arrow4').on('click', afficherSousMenu4);
    $('#arrow5').on('click', afficherSousMenu5);
    $('#arrow6').on('click', afficherSousMenu6);
    $('#flecheMenu').on('click', revenirAuMenu);
    
    // Formulaire
    $('#buttonFormulaire').on('click', verificationCodePostal);
    
    $('#code-postal').on('keypress', disparitionCouleur);
    $('#ville').on('keypress', disparitionCouleur);
    $('#superficie').on('keypress', disparitionCouleur);
    $('#transaction').on('focus', disparitionCouleur);
    $('#bien').on('focus', disparitionCouleur);
    $('#nombre-pieces').on('focus', disparitionCouleur);
    $('#annee-construction').on('focus', disparitionCouleur);
    
    // Bouton Je vends / Je loue
    afficherVentes();
    $('#vendre').on('click', afficherVentes);
    $('#louer').on('click', afficherLocation);
});