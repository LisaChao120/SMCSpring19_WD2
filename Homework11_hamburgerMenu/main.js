var switchHamburger = function() {
  var navbar = document.getElementById("hamburgerNavbar");
  var src1 = "images/hamburger.png";
  var src2 = "images/x.png";
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
    document.getElementById("hamburger").src = src1;
  } else {
    navbar.style.display = "block";
    document.getElementById("hamburger").src = src2;
  }
};

document
  .getElementById("toggleSwitch")
  .addEventListener("click", switchHamburger);
