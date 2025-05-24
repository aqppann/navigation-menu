const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const searchForm = document.getElementById("searchForm");

function toggleMenu() {
  menu.classList.toggle("open");
  searchForm.classList.toggle("open");
}

burger.addEventListener("click", toggleMenu);

burger.addEventListener("keypress", (e) => {
  if (e.key === "Enter") toggleMenu();
});
