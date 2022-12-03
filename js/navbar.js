document.getElementById("menu").addEventListener("click", (e) => {
  e.target.nextElementSibling.classList.toggle("translate-x-full");
  e.target.nextElementSibling.classList.add("min-w-full");
  e.target.nextElementSibling.classList.add("ease-out");
});
for (el of document.getElementsByClassName("close")) {
  el.addEventListener("click", (e) => {
    document.getElementById("closeHam").classList.toggle("translate-x-full");
  });
}
