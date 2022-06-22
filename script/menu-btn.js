let menuClick = document.querySelector(".hamburguer-menu");

let areaMenu = document.getElementById("mobile-menu");
let areaMenuList = document.getElementById("mobile-menu-list");

menuClick.addEventListener("click", () => {
  if (areaMenu.getAttribute("class") === "header-menu-area") {
    openMenu();
  } else {
    closeMenu();
  }
});

function openMenu() {
  areaMenu.classList.remove("header-menu-area");
  areaMenu.classList.add("header-menu-area-mobile");
  areaMenuList.classList.remove("header-menu-list");
  areaMenuList.classList.add("header-menu-list-mobile");
}
function closeMenu() {
  areaMenu.classList.remove("header-menu-area-mobile");
  areaMenu.classList.add("header-menu-area");
  areaMenuList.classList.remove("header-menu-list-mobile");
  areaMenuList.classList.add("header-menu-list");
}
