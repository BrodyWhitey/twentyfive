let button = document.querySelector(".menu-button");
button.addEventListener("click", toggleMenu);

let layer = document.querySelector(".fade-layer");
if (layer) {
  layer.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  let menu = document.querySelector("#aside");
  menu.classList.toggle("show");

  if (layer) {
    layer.classList.toggle("visible");
  }
}

