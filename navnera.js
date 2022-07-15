const navIcons = document.querySelector("header");
let actualPos = null;
window.addEventListener("scroll", (e) => {
  let windowScroll = window.scrollY;
  if (windowScroll > actualPos) {
    navIcons.classList.add("header-invisible");
  } else { 
    navIcons.classList.remove("header-invisible");
  }
  actualPos = windowScroll;
});
