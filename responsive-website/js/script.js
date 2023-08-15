burger = document.querySelector(".burger");
navbarResp = document.querySelector(".responsive");
navbar = document.querySelector(".navbar");

burger.addEventListener("click", (e) => {
  if (navbarResp.style.opacity == "1") {
    navbarResp.style.opacity = "0";
    navbar.style.height = "40px";
  } else {
    navbarResp.style.opacity = "1";
    navbar.style.height = "fit-content";
  }
});
