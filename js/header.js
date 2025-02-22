document.addEventListener('DOMContentLoaded', () => {
  
  /* ======== Menu Header ========*/
  function menu () {
    var menuOpen = document.querySelector(".js-menu-open");
    var menuClose = document.querySelector(".js-menu-close");
    var nav = document.querySelector(".js-nav");

    menuOpen.addEventListener(("click"), () => {
      nav.classList.toggle("active");
      menuOpen.classList.toggle("active");
      menuClose.classList.toggle("active");
    });

    menuClose.addEventListener(("click"), () => {
      nav.classList.toggle("active");
      menuOpen.classList.toggle("active");
      menuClose.classList.toggle("active");
    });
  }
  menu();
});