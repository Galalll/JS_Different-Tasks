var prog = document.querySelectorAll(".par");
prog.forEach((element) => {
  element.style.width = element.id + "%";
  element.textContent = element.id + "%";
});
