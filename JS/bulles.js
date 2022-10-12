
let contenu = document.getElementById("contenu");
let background = document.getElementById("color");

let compteurBulles = 0;

function activeContenu(){
    setInterval(creeParticule, 900);
    contenu.style.display = "flex";
}

function positionAleatoire() {
  let top = Math.floor(Math.random() * visualViewport.height * 0.8);
  let left = Math.floor(Math.random() * visualViewport.width * 0.8);
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
  compteurBulles++
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
    compteurBulles--
  }, timing * 1500);
  // console.log(compteurBulles)
}


let theme = document.querySelectorAll(".themeBox");


function changerColor(color){
  background.className =color;
}

theme[0].addEventListener("click", () => {
  changerColor(theme[0].classList[1]);
})

theme[1].addEventListener("click", () => {
  changerColor(theme[1].classList[1]);
})

theme[2].addEventListener("click", () => {
  changerColor(theme[2].classList[1]);
})

theme[3].addEventListener("click", () => {
  changerColor(theme[3].classList[1]);
})

theme[4].addEventListener("click", () => {
  changerColor(theme[0].classList[1]);
})

theme[5].addEventListener("click", () => {
  changerColor(theme[1].classList[1]);
})

theme[6].addEventListener("click", () => {
  changerColor(theme[2].classList[1]);
})

theme[7].addEventListener("click", () => {
  changerColor(theme[3].classList[1]);
})


let settingBtn = document.querySelector("#settingBtn");
let setting = document.querySelector("#SB");


settingBtn.addEventListener("click", () => {
  if (setting.className == "disparition_setting") {
    setting.className = "apparition_setting";
    decalerSetting("add")
  } else {
    setting.className = "disparition_setting";
    decalerSetting("remove")
  }
})

function decalerSetting(action){
  if(action == "add"){
    settingBtn.classList.replace("fa-gear", "fa-xmark");
    listeCarteD.classList.add("setting");
    retourPresentation.classList.add("setting");
    for (const index in section){
      if(index < section.length){
        section[index].classList.add("setting");
      }
    }
  } else {
    settingBtn.classList.replace("fa-xmark","fa-gear");
    listeCarteD.classList.remove("setting");
    retourPresentation.classList.remove("setting");
    for (const index in section){
      if(index < section.length){
        section[index].classList.remove("setting");
      }
    }
  }
}