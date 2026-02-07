const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.done) {
          animateCounter(entry.target);
          entry.target.dataset.done = "true";
        }
      });
    }, {
      threshold: 0.6
    });

    counters.forEach(counter => observer.observe(counter));

    function animateCounter(counter) {
      const target = Number(counter.dataset.target);
      const suffix = counter.dataset.suffix || '';
      const speedType = counter.dataset.speed || 'normal';

      let current = 0;

      const duration = speedType === 'slow' ? 2200 : 1200;
      const increment = target / (duration / 16);

      function update() {
        current += increment;

        if (current >= target) {
          counter.textContent = target + suffix;
          return;
        }

        counter.textContent = Math.floor(current) + suffix;
        requestAnimationFrame(update);
      }

      update();
    }



    function close_mobile() {
  document.querySelector(".mobile-menu").style.display = "none";
}

function open_mobile() {
  document.querySelector(".mobile-menu").style.display = "block";
}
