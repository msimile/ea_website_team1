const checkboxButtons = document.getElementById("hover-checkbox-buttons");
const checkboxLogos = document.getElementById("hover-checkbox-logos");
const checkboxElements = document.getElementById("hover-checkbox-elements");

checkboxButtons.addEventListener("click", () => {
  const buttons = document.querySelectorAll("button");
  if (checkboxButtons.checked) buttons.forEach(element => element.classList.add("myCustomHover"))
  else buttons.forEach((element) => element.classList.remove("myCustomHover"));
})

checkboxLogos.addEventListener("click", () => {
  const logoLightGrey = document.querySelector(
    ".nav-icons .square-icon:first-child svg"
  );
  const logoWhite1 = document.querySelector(
    ".nav-icons .square-icon:nth-child(2) svg"
  );
  const logoWhite2 = document.querySelector(
    ".nav-icons .square-icon:nth-child(3) svg"
  );
  const logoKebab = document.querySelector(".nav-icons .kebab svg");
  console.log(logoWhite1);
  if (checkboxLogos.checked) {
    logoLightGrey.classList.add("myCustomHover-lightgrey");
    setTimeout(() => {
      logoWhite1.classList.add("myCustomHover-white");
    }, 100);
    setTimeout(() => {
      logoWhite2.classList.add("myCustomHover-white");
    }, 200);
    setTimeout(() => {
      logoKebab.classList.add("myCustomHover-kebab");
    }, 300);
  } else {
    logoLightGrey.classList.remove("myCustomHover-lightgrey");
    logoWhite1.classList.remove("myCustomHover-white");
    logoWhite2.classList.remove("myCustomHover-white");
    logoKebab.classList.remove("myCustomHover-kebab");
  }
});

checkboxElements.addEventListener('click', () => {
    const squareCard = document.querySelector('.elements .game-card-wrapper .trasparente');
    if (checkboxElements.checked) squareCard.classList.add('myCustomHover-square-card');
    else squareCard.classList.remove('myCustomHover-square-card');
}
)
