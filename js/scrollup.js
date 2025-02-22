document.addEventListener('DOMContentLoaded', () => {

  /* ======== ScrollUp ========*/
  function scrollUp() {
    window.addEventListener("scroll", () => {
      const scroll = document.querySelector('.js-scroll');

      if (window.scrollY > 50) {
        scroll.classList.add("active");
      } else {
        scroll.classList.remove("active");
      }
    });
  }
  scrollUp();
});