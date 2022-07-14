const navIcons = document.querySelector(".nav-icons");
const children = [].slice.call(navIcons.children);
const icons = navIcons.children;
const navNera = document.querySelector(".nav-nera");
let actualPos = null;
window.addEventListener("scroll", (e) => {
  let windowScroll = window.scrollY;
  if (windowScroll > actualPos) {
    navNera.classList.add("header-invisible");
    children.forEach((element) =>
      element.classList.add("header-invisible", "li-invisible")
    );
    navIcons.classList.add("header-invisible");
    console.log(icons);
  } else {
    navNera.classList.remove("header-invisible");
    console.log(icons);
    children.forEach((element) => element.classList.remove("header-invisible"));
    navIcons.classList.remove("header-invisible");
  }

  actualPos = windowScroll;
});
