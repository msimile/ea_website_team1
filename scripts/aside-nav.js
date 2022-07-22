const greyTopPar = document.querySelectorAll(
  ".nav-wrapper-container-main-element"
);
const greyTopParList = document.querySelectorAll(
  ".nav-wrapper-container-main-element-ul-li"
);

// greyTopPar.forEach(elem => elem.style.maxHeight = "unset" )
// greyTopParList.forEach(elem => elem.style.maxHeight = "unset")

const listNest = document.querySelectorAll(
  ".nav-wrapper-container-main-element-content"
);

listNest.forEach((elem) => {
  elem.addEventListener("click", (e) => expandWindow(elem));
});

function expandWindow(elem) {
  if (elem.parentElement.classList.toggle("nav-content--open")) {
    elem.nextElementSibling.classList.remove("opacity-up");
    elem.parentElement.style.maxHeight = `3.4rem`;
    elem.parentElement.style.overflowY = `hidden`;
    arrowSlideDown();
  } else {
    elem.nextElementSibling.classList.add("opacity-up");
    elem.parentElement.style.maxHeight = `${listNest.length * 3.4 + 7}rem`;
    arrowSlideUp();
  }
}

function collapseWindow() {}

//script per ruotare la freccia dei menù

function arrowSlideUp() {
    console.log
  document
    .querySelector(".nav-wrapper-container-main-element-content-arrow-left")
    .classList.add("arrow-left--slide-up");
  document
    .querySelector(".nav-wrapper-container-main-element-content-arrow-right")
    .classList.add("arrow-right--slide-up");
}

function arrowSlideDown() {
  document
    .querySelector(".nav-wrapper-container-main-element-content-arrow-left")
    .classList.remove("arrow-left--slide-up");
  document
    .querySelector(".nav-wrapper-container-main-element-content-arrow-right")
    .classList.remove("arrow-right--slide-up");
}
