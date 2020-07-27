let goTopButton = document.getElementById("btn-top");
let navbar = document.querySelector(".navbar");
// Top button init
document.addEventListener("DOMContentLoaded", function (event) {
  scrollCallback();
});
// Scroll detection
window.onscroll = function () {
  scrollCallback();
};
function scrollCallback() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopButton.style.display = "block";
    navbar.style.background = "#212121";
  } else {
    goTopButton.style.display = "none";
    navbar.style.background = "none";
  }
}
function scrollToTop() {
  document.querySelector("#home").scrollIntoView({
    behavior: "smooth",
  });
}
