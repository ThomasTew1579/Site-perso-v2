
// evenement page acceuil======================================================

let acceuilSlideR       = document.getElementById("masqueR");
let entrer              = document.getElementById("entrer");
let acceuil             = document.getElementById("acceuil");



entrer.addEventListener("click", () => {
  
  acceuilSlideR.className = "animationFermeture";
  setTimeout(() => {
    acceuil.style.display ="none"
    activeContenu();
    acceuilSlideR.style.display ="none"
  }, 600);
});

// ======================================================evenement page acceuil

