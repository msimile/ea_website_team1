const checkboxButtons = document.getElementById("hover-checkbox-buttons");
const checkboxLogos = document.getElementById("hover-checkbox-logos");
const checkboxElements = document.getElementById("hover-checkbox-elements");

console.log(checkboxButtons)
checkboxButtons.addEventListener("click", () => {
  const buttons = document.querySelectorAll(".buttons button");
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

  const logoSocialIcons = document.querySelectorAll('.social-icons svg')
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
    setTimeout(() => {
      logoSocialIcons.forEach(elem =>
        elem.classList.add("myCustomHover-social-icons"))
    }, 400);
  } else {
    logoLightGrey.classList.remove("myCustomHover-lightgrey");
    logoWhite1.classList.remove("myCustomHover-white");
    logoWhite2.classList.remove("myCustomHover-white");
    logoKebab.classList.remove("myCustomHover-kebab");
    logoSocialIcons.forEach(elem =>
      elem.classList.remove("myCustomHover-social-icons"))
  }
});

checkboxElements.addEventListener('click', () => {
    const squareCard = document.querySelector('.elements .game-card-wrapper .trasparente');
    const hoverEffect = document.querySelector('.dropdown .hover-effect');
    const dropdownList = document.querySelector('.dropdown .dropdown-list');
   const rotate = document.querySelector('.rotate');
   const articleCard = document.querySelector('.article-card');
   const bannersButton = document.querySelector('.banners button');
    if (checkboxElements.checked) {
      bannersButton.classList.add('myCustomHover-button');
      articleCard.classList.add('myCustomHover-article-card');
      rotate.classList.add('myCustomHover-rotate');
      hoverEffect.classList.add('myCustomHover-hover-effect');
      dropdownList.classList.add('myCustomHover-dropdown-list');
      squareCard.classList.add('myCustomHover-square-card');
    }
    else {
        bannersButton.classList.remove('myCustomHover-button');
      articleCard.classList.remove('myCustomHover-article-card');
      rotate.classList.remove('myCustomHover-rotate');
      hoverEffect.classList.remove('myCustomHover-hover-effect');
      dropdownList.classList.remove('myCustomHover-dropdown-list');
      squareCard.classList.remove('myCustomHover-square-card');
    }
}
)
