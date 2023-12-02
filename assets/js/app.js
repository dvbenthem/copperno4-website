const headerEl = document.querySelector(".header");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");
const menuItems = document.querySelectorAll(".nav-list li");


// Wanneer je naar beneden scrolt laat de menubalk(header) zien
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  scrollPos > 100 ? headerEl.classList.add("scrolled") : headerEl.classList.remove("scrolled")
});

// Open het menu als je op hamburgerBtn klikt
hamburgerBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
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
})
