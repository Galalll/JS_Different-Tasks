var btn = document.querySelectorAll(".header");
var panal = document.querySelectorAll(".panal");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    panal[i].classList.toggle("active");
  });
}
