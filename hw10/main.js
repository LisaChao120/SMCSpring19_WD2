const CTA = document.querySelector(".cta");
const ALERT = document.querySelector(".hide");

function reveal(e) {
  e.preventDefault();
  CTA.classList.toggle("hide");
  ALERT.classList.toggle("hide");
}

CTA.onclick = reveal;
