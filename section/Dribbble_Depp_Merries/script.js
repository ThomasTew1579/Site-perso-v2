
// effacer l'animation d'intro
setTimeout(() => {
    document.getElementById("entrer").style.display ="none";
}, 1800)

// animation des fiche musicien
let membre = document.querySelectorAll(".membre")

membre[0].addEventListener("mouseover", () => {
    changerMembre(0)
})

membre[1].addEventListener("mouseover", () => {
    changerMembre(1)
})

membre[2].addEventListener("mouseover", () => {
    changerMembre(2)
})

function changerMembre (indexMembre){
    for(const index in membre){
        if(index < membre.length){
            membre[index].classList.remove("grow")
            membre[indexMembre].classList.add("grow")
        }
    }
}



// changer d'album dans le lecteur
let albumSelect = document.getElementById("music").getElementsByClassName("select")[0]
let lecteur = document.querySelector("#lecteur")
let listeAlbum = document.querySelector(".listeAlbum");

listeAlbum.querySelector("#WTR").addEventListener("click",() => {
    lecteur.src ="https://open.spotify.com/embed/album/6iyo5dX3zMFtTQJHMhrtPc?utm_source=generator"
    albumSelect.src = "https://i.scdn.co/image/ab67616d00001e02f801a7471a4bbe473730b811"
})

listeAlbum.querySelector("#Gen").addEventListener("click",() => {
    lecteur.src ="https://open.spotify.com/embed/album/07gRPx98IAUeO7detNoJM2?utm_source=generator"
    albumSelect.src = "https://i.scdn.co/image/ab67616d00001e029add3d305878afaa357dce0e";
})

listeAlbum.querySelector("#Night").addEventListener("click",() => {
    lecteur.src ="https://open.spotify.com/embed/album/5Fz3fm8jthYyeN9jCRg7qx?utm_source=generator"
    albumSelect.src = "https://i.scdn.co/image/ab67616d00001e02bc2a775d34c2a2dd000b874d";
})

listeAlbum.querySelector("#Flames").addEventListener("click",() => {
    lecteur.src ="https://open.spotify.com/embed/album/3jc4gH3BxMnDVc7EltJBSP?utm_source=generator"
    albumSelect.src = "https://i.scdn.co/image/ab67616d00001e02abee1c124fc5816f5322cba4";
})


// animation merch

let color = document.getElementById("color");
let model = document.getElementById("model");
let galerie = document.querySelector(".galerie");
let tshirt = document.getElementsByClassName("tshirt")

let left = document.getElementById("goL");
let right = document.getElementById("goR");





    let image = 0;
    
    right.addEventListener("click", () => {
        image++
        if(image >= 4){
            image = 0
            decaler(image)
        } else {
            decaler(image)
        }
    })
    left.addEventListener("click", () => {
        image--
        if (image <= -1) {
          image = 3;
          decaler(image);
        } else {
          decaler(image);
        }
    })


function decaler(image){
    model.textContent ="MODEL : "+ tshirt[image].classList[1]
    color.textContent ="COLOR : "+ tshirt[image].classList[0]
    if(window.innerWidth <= 1200){
        galerie.style.transform = "translateX(calc((-100vw)*"+image+"))";
    } else {
        galerie.style.transform = "translateX(calc((-60vh * 0.9)*"+image+"))";
    }
 
}


// animation menu


let nav =document.querySelector("nav")
let main = document.querySelector("main")
let btnMenu = document.getElementById("menu")

let home = document.getElementById("goHome")
let merch = document.getElementById("goMerch");
let music = document.getElementById("goMusic");
let contact = document.getElementById("goContact");

btnMenu.addEventListener("click", () => {
    ouvrirMenu()
})

home.addEventListener("click", () => {
    fermerMenu()
})

merch.addEventListener("click", () => {
    fermerMenu()
})

music.addEventListener("click", () => {
    fermerMenu()
})

contact.addEventListener("click", () => {
    fermerMenu()
})






function ouvrirMenu () {
    nav.className = "menu_mobile";
    main.className = "menu_mobile";
}

function fermerMenu () {
    nav.classList.remove("menu_mobile");
    main.classList.remove("menu_mobile");
}