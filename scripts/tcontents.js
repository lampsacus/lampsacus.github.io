const toggle = document.querySelector(".toggle");
const nav_bar = document.querySelector(".table-of-contents");
const list = document.querySelector(".table__list");

toggle.addEventListener("click", ()=>{
  if (toggle.textContent === "hide") {
    toggle.textContent = "show";
  }
  else {
    toggle.textContent = "hide";
  }
  
  list.classList.toggle("list-invisible");
  nav_bar.classList.toggle("table-narrow");
});