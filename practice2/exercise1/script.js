let semafor = document.querySelector(".semafor");

trenutnoSvijetlo = 0;

function updateSvijetlo() {
  let boje = ["green", "yellow", "red"];
  let svijetla = document.querySelectorAll(".svijetla");
  svijetla.forEach((s) => (s.style.backgroundColor = ""));
  svijetla[trenutnoSvijetlo].style.backgroundColor = boje[trenutnoSvijetlo];
}
semafor.addEventListener("click", () => {
  trenutnoSvijetlo >= 2 ? (trenutnoSvijetlo = 0) : trenutnoSvijetlo++;
  updateSvijetlo();
});

updateSvijetlo();
