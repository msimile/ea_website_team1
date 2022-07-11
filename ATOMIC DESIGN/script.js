window.addEventListener("load", loading);

function loading() {
  const col1 = document.querySelector(".col-1");
  const col3 = document.querySelector(".col-3");
  const log = document.querySelector(".logos-icons");
  const typ = document.querySelector(".typography");
  const title = document.querySelector(".atomic-title");
  col1.style.visibility = "hidden";
  col3.style.visibility = "hidden";
  log.style.visibility = "hidden";
  typ.style.visibility = "hidden";
  title.style.cursor = "pointer";

  const loader = document.querySelector(".loader");
  title.addEventListener("click", showcols);
  function showcols() {
    title.style.cursor = "initial";
    loader.style.display = "none";
    col1.style.visibility = "visible";
    col3.style.visibility = "visible";
    log.style.visibility = "visible";
    typ.style.visibility = "visible";
    const colorsContent = document.querySelector(".colors-content");
    colorsContent.style.visibility = "hidden";
    const buttonsContent = document.querySelector(".buttons-content");
    buttonsContent.style.visibility = "hidden";
    const iconsContent = document.querySelector(".icons-content");
    iconsContent.style.visibility = "hidden";
    const typoContent = document.querySelector(".typo-content");
    typoContent.style.visibility = "hidden";
    const elementsContent = document.querySelector(".elements-content");
    elementsContent.style.visibility = "hidden";

    //preparo per mostrare il contenuto dei colori

    const colors = document.querySelector(".colors");
    colors.style.cursor = "pointer";
    colors.addEventListener("click", showColors);
    function showColors() {
      colors.style.cursor = "initial";
      colorsContent.style.visibility = "initial";
    }

    //preparo per mostrare il contenuto dei bottoni

    const buttons = document.querySelector(".buttons");
    buttons.style.cursor = "pointer";
    buttons.addEventListener("click", showButtons);
    function showButtons() {
      buttons.style.cursor = "initial";
      buttonsContent.style.visibility = "initial";
    }

    //preparo per mostrare il contenuto dei loghi

    const logos = document.querySelector(".logos-icons");
    logos.style.cursor = "pointer";
    logos.addEventListener("click", showLogos);
    function showLogos() {
      logos.style.cursor = "initial";
      iconsContent.style.visibility = "initial";
    }

    //preparo per mostrare il contenuto della tipografia

    const typo = document.querySelector(".typography");
    typo.style.cursor = "pointer";
    typo.addEventListener("click", showTypo);
    function showTypo() {
      typo.style.cursor = "initial";
      typoContent.style.visibility = "initial";
    }

    //preparo per mostrare il contenuto di elements
    const elements = document.querySelector(".elements");
    elements.style.cursor = "pointer";
    elements.addEventListener("click", showElements);
    function showElements() {
      elements.style.cursor = "initial";
      elementsContent.style.visibility = "initial";
    }
  }
}
