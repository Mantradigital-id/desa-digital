document.querySelectorAll(".dropdown > a").forEach(menu => {
  menu.addEventListener("click", e => {
    e.preventDefault();
    menu.nextElementSibling.classList.toggle("show");
  });
});
