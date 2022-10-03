
let contenu = document.getElementById("contenu");
let background = document.getElementById("color");

function activeContenu(){
    setInterval(creeParticule, 500);
    contenu.style.display = "flex";
}

function positionAleatoire() {
  let top = Math.floor(Math.random() * visualViewport.height * 0.8);
  let left = Math.floor(Math.random() * visualViewport.width * 0.8);
  // descktop(visualViewport.width);
  return [top, left];
}

function tailleAleatoire() {
  let taille = Math.floor(Math.random() * 50);
  return taille;
}

function rotationAleatoire() {
  let rotation = Math.floor(Math.random() * 360);
  return rotation;
}

function timingAleatoire() {
  let timing = Math.floor(Math.random() * 10) + 10;
  return timing;
}

function nomAleatoire() {
  let nom = Math.floor(Math.random() * 0x10000)
    .toString(16)
    .substring(1);
  return nom;
}

function creeParticule() {
  let position = positionAleatoire(); //[top, left]
  let taille = tailleAleatoire();
  let rotation = rotationAleatoire();
  let timing = timingAleatoire(); // entre 10 et 30s
  let nom = nomAleatoire(); // numero entre 1 et 100

  let bulleA = document.createElement("div");
  bulleA.className = "a" + nom;

  bulleA.style.position = "absolute";

  bulleA.style.rotate = rotation + "deg";

  bulleA.style.top = position[0] + "px";
  bulleA.style.left = position[1] + "px";

  bulleA.style.width = taille + "vw";
  bulleA.style.height = taille + "vw";

  let bulleB = document.createElement("div");
  bulleB.className = "bulle b" + nom;

  bulleB.style.animationName = "particule";
  bulleB.style.animationTimingFunction = "linear";
  bulleB.style.animationDuration = timing + "s";

  bulleA.append(bulleB);

  background.append(bulleA);

  setTimeout(() => {
    bulleA.remove();
  }, timing * 1500);
}

