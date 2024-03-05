///////////////////////////////////////////////////////////
// Selectors
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

///////////////////////////////////////////////////////////
// Make mobile navigation work
btnNavEl.addEventListener("click", () => headerEl.classList.toggle("nav-open"));
