let menu = document.querySelector("#menu-icon");
let cancel = document.querySelector("#cancel");
let navbar = document.querySelector(".navbar");
let nav = document.querySelectorAll("nav");

menu.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  cancel.classList.toggle("hidden");
  navbar.classList.toggle("hidden");
});

cancel.addEventListener("click", function () {
  cancel.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  navbar.classList.toggle("hidden");
});

nav.forEach((e) => {
  e.addEventListener("click", function () {
    menu.classList.toggle("hidden");
    cancel.classList.toggle("hidden");
    navbar.classList.toggle("hidden");
  });
});
