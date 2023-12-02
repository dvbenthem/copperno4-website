const headerEl = document.querySelector(".header");

// headerEl.addEventListener("click", function(){
//   console.log("You clicked me!")
// })

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  scrollPos > 100 ? headerEl.classList.add("scrolled") : headerEl.classList.remove("scrolled")
})
