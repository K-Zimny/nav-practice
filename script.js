const hamburgerBtn = document.querySelector(".hamburger-icon");
const navUl = document.querySelector(".nav-list ul");

hamburgerBtn.addEventListener("click", function () {
  if (navUl.classList.contains("hidden")) {
    navUl.classList.remove("hidden");
    navUl.style.height = auto;
  } else {
    navUl.classList.add("hidden");
    navUl.style.height = 0;
  }
});
