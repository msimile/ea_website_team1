const heightModules = 3.5;
const offset = 7;
const greyTopParList = document.querySelectorAll(".nav-wrapper-container-main-element-ul-li");
const hamburgerMenu = document.querySelector(
  ".white-nav__mobile-menu-container"
);
const listNest = document.querySelectorAll(".nav-wrapper-container-main-element-content");
//variabili per il controllo della prima voce per garantirne la giusta grandezza
let maxHeightFirstLastValue = 3.5 * heightModules * listNest.length;
let maxHeightFirst = 3.5;


listNest.forEach((elem,index) => {
  elem.addEventListener("click", (e) => expandWindow(elem,index));
});

hamburgerMenu.addEventListener("click", (e)=> openAsideMenu(document.querySelector(".nav-wrapper")))

document.getElementById("nav-cross-icon")
.addEventListener("click", (e)=>closeAsideMenu(document.querySelector(".nav-wrapper")))

// questa funzione si occupa di gestire opacità, grandezza degli li, overflow e colore del bordo inferiore
// crea una differenza per il primo elemento che posssiede una lista nestata
function expandWindow(elem,index) {
  if(index === 0)
  {if (!elem.parentElement.classList.toggle("nav-content-giochi--open")) {
    elem.nextElementSibling.classList.remove("opacity-up");
    maxHeightFirst = heightModules;
    elem.parentElement.style.maxHeight = `${maxHeightFirst}rem`;
    elem.style.overflowY = `hidden`;
    elem.classList.remove("font--red-color");
    elem.parentElement.lastElementChild.lastElementChild.style.borderColor= "red";
    arrowSlideDown(elem);
} else {
    elem.classList.add("font--red-color");
    elem.nextElementSibling.classList.add("opacity-up");
    maxHeightFirst = maxHeightFirstLastValue;
    elem.parentElement.style.maxHeight = `${maxHeightFirst}rem`;
    elem.parentElement.lastElementChild.classList.add("border-color--red")
    arrowSlideUp(elem);
  }}else{
    if (!elem.parentElement.classList.toggle("nav-content-giochi--open")) {
      elem.nextElementSibling.classList.remove("opacity-up");
      elem.parentElement.style.maxHeight = `${heightModules}rem`;
      elem.parentElement.style.overflowY = `hidden`;
      elem.classList.remove("font--red-color");
      elem.parentElement.lastElementChild.lastElementChild.style.borderColor= "red";
      arrowSlideDown(elem);
  } else {
      elem.classList.add("font--red-color");
      elem.nextElementSibling.classList.add("opacity-up");
      elem.parentElement.style.maxHeight = `${listNest.length * heightModules + offset}rem`;
      elem.parentElement.lastElementChild.classList.add("border-color--red")
      arrowSlideUp(elem);
    }
  }
}

// evento per la rotazione del + della sezione Giochi dell'aside
greyTopParList.forEach(elem => elem.addEventListener("click",()=> {
  const plusIcon = elem.querySelector(".nav-wrapper-container-main-element-ul-li-content-plus");
  plusIcon.classList.toggle("rotate-45");
  openNestedMenu(elem);
}))

//funzione per la gestione dei menù ESPLORA I GIOCHI e PIATTAFORME

function openNestedMenu(elem){
  const liNumbers = elem.lastElementChild.querySelectorAll("li");
  const giochiLi = document.querySelector(".nav-wrapper-container-main-element");
  elem.querySelector("div > p").classList.toggle("title-pressed--dark");
  elem.querySelectorAll("div > div").forEach(liElem => liElem.classList.toggle("plus-pressed--dark"));
  
  if (elem.classList.toggle("nav-content-giochi--open")) {
  maxHeightFirst += liNumbers.length * heightModules + offset;
  giochiLi.style.maxHeight = `${maxHeightFirst}rem`;
  elem.style.maxHeight = `${liNumbers.length * heightModules + offset}rem`;
  maxHeightFirstLastValue += liNumbers.length * heightModules + offset;
  }else{
  maxHeightFirst -= liNumbers.length * heightModules + offset;
  giochiLi.style.maxHeight = `${maxHeightFirst}rem`;
  elem.style.maxHeight = `${heightModules}rem`;
  maxHeightFirstLastValue -= liNumbers.length * heightModules +offset;
  }
}

function closeNestedMenu(elem){
  const liNumbers = elem.lastElementChild.querySelectorAll("li");
  const giochiLi = document.querySelector(".nav-wrapper-container-main-element");
  maxHeightFirst -= liNumbers.length * heightModules + offset;
  giochiLi.style.maxHeight = `${maxHeightFirst}rem`;
  elem.style.maxHeight = `${heightModules}rem`;
}
//script per ruotare la freccia dei menù

function arrowSlideUp(elem) {
    elem.lastElementChild.firstElementChild.classList.add("arrow-left--slide-up");
    elem.lastElementChild.lastElementChild.classList.add("arrow-right--slide-up");
}

function arrowSlideDown(elem) {
    elem.lastElementChild.firstElementChild.classList.remove("arrow-left--slide-up");
    elem.lastElementChild.lastElementChild.classList.remove("arrow-right--slide-up");
}

darkenBg.addEventListener("click", (e)=> closeAsideMenu(document.querySelector(".nav-wrapper")))