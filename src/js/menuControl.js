const menuBox = document.querySelector(".bx-iconMenuHamburguese");
const searchOther = document.querySelector(".bx-search-btnsPage-aureaDream");
const closeMenuBox = document.querySelector(".bx-x");
const navBar = document.querySelector(".navbarPage-aureaDreamMobile");

// EVENTO PARA ABRIR
menuBox.addEventListener("click", () => {
  menuBox.classList.add("activeMenuBox");
  searchOther.classList.add("activeSearchBox");
  navBar.classList.add("activeNavbarHeader");
});

// EVENTO PARA CERRAR
closeMenuBox.addEventListener("click", () => {
  menuBox.classList.remove("activeMenuBox");
  searchOther.classList.remove("activeSearchBox");
  navBar.classList.remove("activeNavbarHeader");
});
