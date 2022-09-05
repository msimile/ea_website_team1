const accediButton = document.querySelector("#accediBtn");
const navNeraExtension = document.querySelector(".nav-nera-extension");
const crossButton = document.querySelector(".nav-nera-extension-cross");
const infoButton = document.querySelector("#infoBtn");
const bodyToShift = document.querySelector("body");

const accediIcons = document.querySelector(".nav-nera-icons-container");
const infoIcons = document.querySelector(
  ".nav-nera-extension-two-icons-container"
);

accediIcons.classList.add("going-up");
infoIcons.classList.add("going-up-perc");

accediIcons.classList.add("fade-away");
infoIcons.classList.add("fade-away");

accediButton.addEventListener("click", () => {
  accediButton.classList.toggle("nav-icons-active");
  infoButton.classList.remove("nav-icons-active");

  if (
    (!navNeraExtension.classList.contains("toggle") &&
      !infoIcons.classList.contains("going-up-perc")) ||
    (navNeraExtension.classList.contains("toggle") &&
      !infoIcons.classList.contains("going-up-perc"))
  ) {
    infoIcons.classList.add("going-up-perc");
    infoIcons.classList.add("fade-away");
    accediIcons.classList.remove("going-up");
    accediIcons.classList.remove("fade-away");
    navNeraExtension.classList.remove("toggle");
  } else
    navNeraExtension.classList.toggle("toggle"),
      accediIcons.classList.remove("going-up");
  accediIcons.classList.remove("fade-away");

  if (
    bodyToShift.classList.contains("body-block") &&
    !navNeraExtension.classList.contains("toggle")
  ) {
  } else document.querySelector("body").classList.toggle("body-block");
});
infoButton.addEventListener("click", () => {
  infoButton.classList.toggle("nav-icons-active");
  accediButton.classList.remove("nav-icons-active");

  if (
    (!navNeraExtension.classList.contains("toggle") &&
      !accediIcons.classList.contains("going-up")) ||
    (!accediIcons.classList.contains("going-up") &&
      navNeraExtension.classList.contains("toggle"))
  ) {
    navNeraExtension.classList.remove("toggle");
    accediIcons.classList.add("going-up");
    accediIcons.classList.add("fade-away");
    infoIcons.classList.remove("going-up-perc");
    infoIcons.classList.remove("fade-away");
  } else
    navNeraExtension.classList.toggle("toggle"),
      infoIcons.classList.remove("going-up-perc");
  infoIcons.classList.remove("fade-away");
  if (
    bodyToShift.classList.contains("body-block") &&
    !navNeraExtension.classList.contains("toggle")
  ) {
  } else document.querySelector("body").classList.toggle("body-block");
});

crossButton.addEventListener("click", (e) => {
  navNeraExtension.classList.add("toggle");
  accediButton.classList.remove("nav-icons-active");
  infoButton.classList.remove("nav-icons-active");
  document.querySelector("body").classList.remove("body-block");
});

let shiftedBody = Array.from(bodyToShift.children);
shiftedBody.shift();

shiftedBody.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (!navNeraExtension.classList.contains("toggle")) {
      navNeraExtension.classList.add("toggle");
      document.querySelector("body").classList.remove("body-block");
      accediButton.classList.remove("nav-icons-active");
      infoButton.classList.remove("nav-icons-active");
    }
  });
});
window.addEventListener("click", (e) => console.log(e.target));
