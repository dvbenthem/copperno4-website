const menu = document.querySelector(".nav__menu");
const openMenu = document.querySelector(".toggle__menu");
const closeMenu = document.querySelector(".nav__close");
const menuItems = document.querySelectorAll(".nav__item a");
const headerEl = document.querySelector("header");

openMenu.addEventListener("click", () => {
  menu.classList.add("open")
})
closeMenu.addEventListener("click", () => {
  menu.classList.remove("open")
})
menuItems.forEach(menuItem => menuItem.addEventListener("click", () => {
  menu.classList.remove("open") 
}));

// Wanneer je naar beneden scrolt laat de menubalk zien
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  scrollPos > 100 ? headerEl.classList.add("scrolled") : headerEl.classList.remove("scrolled")
});

function setupTabs(){
  document.querySelectorAll(".tabs__button").forEach(button => {
    button.addEventListener("click", () => {
      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-for-tab="${tabNumber}"]`)
    
      sideBar.querySelectorAll(".tabs__button").forEach(button => {
        button.classList.remove("tabs__button--active");
      });
      tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
        tab.classList.remove("tabs__content--active");
      });
      button.classList.add("tabs__button--active");
      tabToActivate.classList.add("tabs__content--active");
  });
});
}
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
});
