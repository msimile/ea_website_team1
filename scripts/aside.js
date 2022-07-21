// evento tramite il quale viene rimossa la classe aside-wrapper--hidden per far  
// apparire l'aside mediante il click sull'icona dei 3 puntini

const kebabMenu = document.querySelector("body > header > nav.white-nav > div:nth-child(1) > svg");
kebabMenu.addEventListener("click", (e)=> openAsideMenu());

function openAsideMenu(){
    const  asideMenu = document.querySelector(".aside-wrapper");
  
    asideMenu.classList.remove("aside-wrapper--hidden");

// assegno la classe per evitare che tutta la pagina eccetto l'aside possa scrollare
    document.querySelector("body").classList.add("aside-wrapper--overflow-hidden")
}



// evento legato all'svg della Cross per chiudere l'aside menù tramite assegnazione
// della classe aside-wrapper--hidden
const crossIcon = document.querySelector(".eapl-local-nav__close-icon");
crossIcon.addEventListener("click", (e)=> closeAsideMenu() )

function closeAsideMenu(){
    
    const asideMenu = document.querySelector(".aside-wrapper");
    asideMenu.classList.add("aside-wrapper--hidden")

    // rimuovo la classe per riportare la pagina a poter scrollare 
    document.querySelector("body").classList.remove("aside-wrapper--overflow-hidden")

}