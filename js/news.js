document.addEventListener('DOMContentLoaded', () => {
  
  /* ======== Slick News ========*/
  function slickNew() {
    const box = document.querySelectorAll(".js-box");
    const dots = document.querySelectorAll(".js-dot");
    dots[0].classList.add("active");
    
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        dots.forEach(d => d.classList.remove("active"));
        dot.classList.toggle("active");
        box[index].scrollIntoView({ 
          behavior: "smooth",
          inline: "start" 
        });
      });
    });
  }
  slickNew();
});