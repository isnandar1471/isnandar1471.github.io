window.onscroll = function () {
  const header = document.querySelector("header");
  const back_top = document.querySelector("#back-top");

  if (window.scrollY > header.offsetTop) {
    header.classList.add("navbar-fixed");

    back_top.classList.remove("hidden");
    back_top.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");

    back_top.classList.add("hidden");
    back_top.classList.remove("flex");
  }
};

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  menu.classList.toggle("hidden");
});

// click if outside humberger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != menu) {
    hamburger.classList.remove("hamburger-active");
    menu.classList.add("hidden");
  }
});

const dark_toggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
dark_toggle.addEventListener("click", function () {
  if (dark_toggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Move the toggle according to localstorage mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  dark_toggle.checked = true;
} else {
  dark_toggle.checked = false;
}
