// DECLARATION DE MA FNCTION DERRIERE ACTION BTN DU MENU
// DANS CETTE PARTI NOUS AFFICHONS ET MASQUONS LE MENU
const openMenu = () => {
  const menu = document.querySelector(".header-menu"); // RECUP LA CLASSE DU MENU
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    document.querySelector("header .material-icons").innerHTML = "close";
  } else {
    document.querySelector("header .material-icons").innerHTML = "menu";
  }
};
