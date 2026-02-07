document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  let current = 0;

  setInterval(() => {

    slides[current].classList.remove("active");
    slides[current].classList.add("exit");
    dots[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.remove("exit");
    slides[current].classList.add("active");
    dots[current].classList.add("active");

  }, 3000);

});
