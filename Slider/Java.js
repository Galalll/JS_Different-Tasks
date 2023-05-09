function x() {
  var rightBtn = document.querySelector(".fa-chevron-right");
  var leftBtn = document.querySelector(".fa-chevron-left");
  var images = document.querySelectorAll(".image");
  var Bullets;
  addBullet();
  var count = 0;
  var x;
  function addBullet() {
    for (let i = 0; i < images.length - 1; i++) {
      document
        .querySelector(".bullet")
        .insertAdjacentHTML(
          "beforeend",
          `<li><a href="#"><i class="fa-solid fa-circle"></i></a></li>`
        );
      Bullets = document.querySelectorAll(".fa-circle");
    }
    for (let i = 0; i < images.length; i++) {
      Bullets[i].setAttribute("id", i);
      Bullets[i].addEventListener("click", (e) => {
        let elementId = e.target.id;
        images[count].classList.remove("active");
        Bullets[count].classList.remove("act");
        images[elementId].classList.add("active");
        Bullets[elementId].classList.add("act");
        count = elementId;
      });
    }
  }
  function slideRight() {
    images[count].classList.remove("active");
    Bullets[count].classList.remove("act");
    count++;
    if (count == images.length) {
      count = 0;
    }
    images[count].classList.add("active");
    Bullets[count].classList.add("act");
  }
  function slideLeft() {
    images[count].classList.remove("active");
    Bullets[count].classList.remove("act");
    count--;
    if (count < 0) {
      count = images.length - 1;
    }
    images[count].classList.add("active");
    Bullets[count].classList.add("act");
  }

  rightBtn.addEventListener("click", slideRight);
  leftBtn.addEventListener("click", slideLeft);
}
x();
