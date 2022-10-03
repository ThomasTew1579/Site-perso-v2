
// evenement page acceuil======================================================

let acceuilSlideR       = document.getElementById("masqueR");
let entrer              = document.getElementById("entrer");
let acceuil             = document.getElementById("acceuil");



entrer.addEventListener("click", () => {
  
  acceuilSlideR.className = "animationFermeture";
  setTimeout(() => {
    // window.location.replace("section/Liste_Carte.html");
    acceuil.style.display ="none"
    activeContenu();
    acceuilSlideR.style.display ="none"
  }, 600);
});

// ======================================================evenement page acceuil

