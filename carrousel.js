(function () {
  "use strict";
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  const $slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function slideTo(index) {
      currentSlide = index >= $slides.length || index < 0 ? 0 : index;
      const slideWidth = $slides[currentSlide].offsetWidth;
      $slides.forEach(($elt, i) => $elt.style.transform = `translateX(-${currentSlide * slideWidth}px)`);
  }

  prev.addEventListener('click', () => slideTo(currentSlide - 1));
  next.addEventListener('click', () => slideTo(currentSlide + 1));
})();
