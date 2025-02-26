document.addEventListener('DOMContentLoaded', () => {
  var carousel = document.querySelector('.js-boxs-carousel');
  var box = document.querySelectorAll('.js-box');
  var dots = document.querySelectorAll('.js-dot');

  /* ======== Slick ======== */
  function slick() {
    const updateActiveDot = () => {
      const slideWidth = box[0].offsetWidth;
      const scrollPosition = carousel.scrollLeft;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      const activeIndex = Math.min(Math.max(Math.round(scrollPosition / slideWidth), 0), dots.length - 1);

      if (scrollPosition >= maxScroll - 5) {
        dots.forEach((dot, index) => dot.classList.toggle('active', index === box.length - 2));
      } else {
        dots.forEach((dot, index) => dot.classList.toggle('active', index === activeIndex));
      }
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        carousel.scrollTo({ left: box[0].offsetWidth * index, behavior: 'smooth' });
      });
    });

    carousel.addEventListener('scroll', updateActiveDot);
    updateActiveDot();
  }

  slick();
});