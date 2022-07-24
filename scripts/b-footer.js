const clicked = document.getElementsByClassName("f-b-rs-prices-btn");
const myDropDown = document.getElementById("f-b-rs-prices-dropdown");

clicked[0].addEventListener("click", function showDropdown() {
  myDropDown.classList.toggle("show");
});

const ticked = document.getElementsByClassName("f-b-rs-language-btn");
const anotherDrop = document.getElementById("f-b-rs-language-dropdown");

ticked[0].addEventListener("click", function showDropdown2() {
  anotherDrop.classList.toggle("show");
});
