ctaMobile = document.getElementById("ctaMobile");
navBar = document.getElementById("menu");
menuItems = document.querySelector("#menu ul");
ctaMobile.onclick = function () {
  navBar.classList.toggle("active");
  menuItems.classList.toggle("active");
};

let imag = document.querySelectorAll("img");

for (let i = 0; i < imag.length; i++) {
  if (imag[i].getAttribute("alt") === "") {
    imag[i].setAttribute("alt", "Image");
  }
}
