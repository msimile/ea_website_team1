// evento legato all'svg della Cross per chiudere la sessione passata per parametro
// tramite assegnazione della classe aside-wrapper--hidden

const crossIcon = document.querySelector(".eapl-local-nav__close-icon");
crossIcon.addEventListener("click", (e)=> closeAsideMenu(document.querySelector(".aside-wrapper")) )

function closeAsideMenu(asideMenu){
    asideMenu.classList.add("aside-wrapper--hidden");

    // rimuovo la classe per riportare la pagina a poter scrollare 
    document.querySelector("body").classList.remove("aside-wrapper--overflow-hidden")
    document.querySelector(".darken-bg").classList.remove("darken-bg--visible");
}


// evento tramite il quale viene rimossa la classe aside-wrapper--hidden per far  
// apparire l'aside mediante il click sull'icona dei 3 puntini

const tripleDotMenu = document.querySelector("body > header > nav.white-nav > div:nth-child(1) > svg");
tripleDotMenu.addEventListener("click", (e)=> openAsideMenu());

tripleDotMenu.addEventListener("click", (e)=> openAsideMenu(document.querySelector(".aside-wrapper")));

const darkenBg = document.querySelector(".darken-bg");
darkenBg.addEventListener("click", (e)=> closeAsideMenu(document.querySelector(".aside-wrapper")))

function openAsideMenu(asideMenu){
    const navIcons = document.querySelector("header");

    navIcons.classList.remove("header-invisible");
    asideMenu.classList.remove("aside-wrapper--hidden");

// assegno la classe per evitare che tutta la pagina eccetto l'aside possa scrollare
    document.querySelector("body").classList.add("aside-wrapper--overflow-hidden")
    document.querySelector(".darken-bg").classList.add("darken-bg--visible");
}