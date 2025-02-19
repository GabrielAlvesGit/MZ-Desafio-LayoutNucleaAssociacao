document.addEventListener('DOMContentLoaded', () => {
    
  var menu = document.querySelector(".js-menu");

  menu.addEventListener(("click"), () => {
    const nav = document.querySelector(".js-nav-active");
    menu.classList.toggle("active");
  });
  
});