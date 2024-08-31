content = [
  {
    title: "Ibro Dirka",
    url: "https://youtu.be/ebqrbfvtm-U?si=3MvAJ0LfEmB4NvNZ",
  },
];

let titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    console.log(title.parentElement);
    title.parentElement.querySelector(".video iframe").style.display = "block";
  });
});
