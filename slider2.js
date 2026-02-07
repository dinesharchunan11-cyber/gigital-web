const sliderTrack = document.querySelector('.person-slider-track');
const sliderDots = document.querySelectorAll('.person-slider-dot');
const gap = 40;

let currentIndex = 0;

function moveSlider() {
  const firstCard = sliderTrack.children[0];
  const cardWidth = firstCard.offsetWidth + gap;

  // slide left by ONE card
  sliderTrack.style.transition = 'transform 0.8s ease-in-out';
  sliderTrack.style.transform = `translateX(-${cardWidth}px)`;

  setTimeout(() => {
    sliderTrack.style.transition = 'none';
    sliderTrack.style.transform = 'translateX(0)';
    sliderTrack.appendChild(firstCard);

    // update dots
    sliderDots.forEach(dot => dot.classList.remove('active'));
    sliderDots[currentIndex].classList.add('active');

    currentIndex = (currentIndex + 1) % sliderDots.length;
  }, 800);
}

setInterval(moveSlider, 3000);


