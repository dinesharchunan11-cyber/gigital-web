const slides = document.querySelectorAll('.ps2-card');
const dots = document.querySelectorAll('.ps2-dot');
const leftArrow = document.querySelector('.ps2-arrow.left');
const rightArrow = document.querySelector('.ps2-arrow.right');

let index = 0;

function showSlide(i){
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[i].classList.add('active');
  dots[i].classList.add('active');
}

rightArrow.addEventListener('click', ()=>{
  index = (index + 1) % slides.length;
  showSlide(index);
});

leftArrow.addEventListener('click', ()=>{
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

showSlide(index);


