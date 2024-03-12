const headerEl = document.querySelector(".header");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");
const menuItems = document.querySelectorAll(".nav-list li");


// Wanneer je naar beneden scrolt laat de menubalk(header) zien
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  scrollPos > 200 ? headerEl.classList.add("scrolled") : headerEl.classList.remove("scrolled")
});

// Open het menu als je op hamburgerBtn klikt
hamburgerBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  console.log("jfkdjakfl")
})

// Verberg het menu zodra je buiten het menu klikt
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && e.target !== hamburgerBtn){
      menu.classList.remove("open")
    }
  });

  // Haal alle menuItems op en wanneer je erop klikt verberg het menu
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () =>{
      if (menuItem.classList.contains("nav-item")){
        menu.classList.remove("open")
    }
  })
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
