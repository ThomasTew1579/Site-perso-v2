// evenement page liste cartes=================================================

// animation menu--------------------------------------------------------------

let btnMenu = document.getElementById("menuLogo");

let lineMenuH = document.getElementById("haut");
let lineMenuC = document.getElementById("centre");
let lineMenuB = document.getElementById("bas");


let presentationMenu = document.querySelector(".S1");
let experienceMenu = document.querySelector(".S2");
let formationMenu = document.querySelector(".S3");
let logicielsMenu = document.querySelector(".S4");
let retourPresentation = document.querySelector(".retour_presentation");


let menu = document.getElementById('menu')




// modification du logo menu en Xmark
function menuOuvertFermer (){
    if (lineMenuH.className == "line") {
      lineMenuH.className = "";
      lineMenuC.className = "";
      lineMenuB.className = "";
    } else {
      lineMenuH.className = "line";
      lineMenuC.className = "line";
      lineMenuB.className = "line";
    }
}




// ferme toute les section sauf celle selectionné
function fermerSection(indexSection){
  for (const index in section) {
    if (index <= section.length - 1) {
      section[index].style.display = "none";
    }
  }
  decaler();
  menu.classList.add("disparition_menu");
  listeCarte.classList.replace("apparition_liste_carte_section","disparition_liste_carte_section");
  listeCarte.classList.replace("flexL", "pasFlexL");
  retourPresentation.classList.replace("flexX", "pasFlexX");
  setTimeout(() => {
    menu.style.display = "none";
    if(indexSection === "m"){
      listeCarte.classList.replace("disparition_liste_carte_section","apparition_liste_carte_section");
      retourPresentation.classList.replace("flexX", "pasFlexX");
      listeCarte.classList.replace("pasFlexL", "flexL");
    } else {
      section[indexSection].style.display = "flex";
      retourPresentation.classList.replace("pasFlexX", "flexX");;
    }
  }, 200);
}





btnMenu.addEventListener("click", () => {
  
  if(menu.style.display == "flex"){
    menu.style.opacity ="100%"
    menu.style.animationName = "disparition_menu";
    retourPresentation.classList.replace("pasFlexX", "flexX");
    setTimeout( () => { menu.style.display = "none"},200)
  }else{
    retourPresentation.classList.replace("flexX" , "pasFlexX");
    menu.style.opacity ="0%"
    menu.style.animationName = "apparition_menu";
    menu.style.display = "flex"
  }
  
  menuOuvertFermer()
});




presentationMenu.addEventListener("click", () => {
  fermerSection("m");
  menuOuvertFermer();
});

retourPresentation.addEventListener("click", () => {
  fermerSection("m")
  listeCarteD.classList.add("origine")
});


experienceMenu.addEventListener("click", () => {
  fermerSection(0)

  menuOuvertFermer();
});

formationMenu.addEventListener("click", () => {
  fermerSection(2)

  menuOuvertFermer();
});

logicielsMenu.addEventListener("click", () => {
  fermerSection(1)

  menuOuvertFermer();
});


// --------------------------------------------------------------animation menu

// annimation carte section----------------------------------------------------


let contenuCarte      = document.getElementsByClassName("contenu_carte");
let carte             = document.getElementsByClassName("carte")
let listeCarte        = document.querySelector(".liste_cartes");
let listeCarteD        = document.querySelector(".liste_cartes_descktop");
let section           = document.getElementsByClassName("section");


function decaler () {
        listeCarteD.classList.remove("origine");
}

// affichage du contenu des cartes de presentation
function activationCarte(indexCarte) {
  for (const index in carte) {
    if (index <= carte.length - 1) {
      carte[index].classList.remove("activeCarte");
      carte[indexCarte].classList.add("activeCarte");
    }
  }
}

document.querySelector(".C2 .titre_carte").addEventListener("click", () => {
  activationCarte(0);
});
    
contenuCarte[0].addEventListener("click", () => {
      fermerSection(0)
})

document.querySelector(".C2 .descktop").addEventListener("click", () => {
  activationCarte(4);
});
    
contenuCarte[4].addEventListener("click", () => {
      fermerSection(0)
      decaler();
})

// ==================

document.querySelector(".C3 .titre_carte").addEventListener("click", () => {
  activationCarte(1);
});

contenuCarte[1].addEventListener("click", () => {
  fermerSection(1);
});

document.querySelector(".C3 .descktop").addEventListener("click", () => {
  activationCarte(5);
});

contenuCarte[5].addEventListener("click", () => {
  fermerSection(1)
});

// ====================

document.querySelector(".C4 .titre_carte").addEventListener("click", () => {
  activationCarte(2);
});

contenuCarte[2].addEventListener("click", () => {
  fermerSection(2);
});

document.querySelector(".C4 .descktop").addEventListener("click", () => {
  activationCarte(6);
});

contenuCarte[6].addEventListener("click", () => {
  fermerSection(2);
   decaler();
});

document.querySelector(".C1 .titre_carte").addEventListener("click", () => {
  activationCarte(3);
});

document.querySelector(".C1 .descktop").addEventListener("click", () => {
  activationCarte("7");
});



// ----------------------------------------------------annimation carte section

// =================================================evenement page liste cartes


//Animation galerie ============================================================



let decalageSlide = 0;
var decalage = 0;


function gallerySlide (signe, nomSlider) {
    let image = document.querySelectorAll("#"+nomSlider+" .image_galerie");
    let slider = document.querySelector("#"+nomSlider);
    let largeurImage = image[0].width + 20;
    decalage = largeurImage

    if (!signe) {
        decalageSlide = decalageSlide + decalage;
        if(decalageSlide > 0){
            decalageSlide = decalage - image.length * decalage;
        }
    } else {
        decalageSlide = decalageSlide - decalage;
        if (decalageSlide <= image.length * -decalage) {
          decalageSlide = 0;
        }
    };
    
    slider.style.transform ="translateX("+decalageSlide+"px)";

};

function regarderVideo (adresse){
    let player = document.createElement("div");
    player.className = "player_video";
    player.innerHTML =
      '<iframe width="100%" height="70%" src="https://www.youtube.com/embed/' +
      adresse +
      '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><i class="fa-solid fa-x" onclick="fermerVideo()"></i>';
      document.body.prepend(player)
}

function fermerVideo (){
    let player = document.querySelector(".player_video");
    player.remove();
}






//============================================================Animation galerie 