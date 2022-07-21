// evento tramite il quale viene rimossa la classe aside-wrapper--hidden per far  
// apparire l'aside mediante il click sull'icona dei 3 puntini

const tripleDotMenu = document.querySelector("body > header > nav.white-nav > div:nth-child(1) > svg");
tripleDotMenu.addEventListener("click", (e)=> openAsideMenu());

function openAsideMenu(){
    const  asideMenu = document.querySelector(".aside-wrapper");
  
    asideMenu.classList.remove("aside-wrapper--hidden");
    navIcons.classList.remove("header-invisible");

// assegno la classe per evitare che tutta la pagina eccetto l'aside possa scrollare
    document.querySelector("body").classList.add("aside-wrapper--overflow-hidden")
}



// evento legato all'svg della Cross per chiudere l'aside menù tramite assegnazione
// della classe aside-wrapper--hidden
const crossIcon = document.querySelector(".eapl-local-nav__close-icon");
crossIcon.addEventListener("click", (e)=> closeAsideMenu() )

function closeAsideMenu(){
    const navIcons = document.querySelector("header");
    const asideMenu = document.querySelector(".aside-wrapper");

    navIcons.classList.add("header-invisible");
    asideMenu.classList.add("aside-wrapper--hidden")
    // rimuovo la classe per riportare la pagina a poter scrollare 
    document.querySelector("body").classList.remove("aside-wrapper--overflow-hidden")

}


// evento tramite il quale viene rimossa la classe aside-wrapper--hidden per far  
// apparire l'aside mediante il click sull'icona dei 3 puntini

const hamburgerMenu = document.querySelector("body > header > nav.white-nav > div:nth-child(1) > svg");
hamburgerMenu.addEventListener("click", (e)=> openAsideMenu());

function openAsideMenu(){
    const  asideMenu = document.querySelector(".aside-wrapper");
    const navIcons = document.querySelector("header");

    navIcons.classList.remove("header-invisible");
    asideMenu.classList.remove("aside-wrapper--hidden");

// assegno la classe per evitare che tutta la pagina eccetto l'aside possa scrollare
    document.querySelector("body").classList.add("aside-wrapper--overflow-hidden")
}