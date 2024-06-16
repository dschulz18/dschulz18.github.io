document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: "smooth"
              });
          }
      });
  });

  // Responsive navigation menu toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const nav = document.querySelector("nav ul");

  mobileMenu.addEventListener("click", function () {
      nav.classList.toggle("nav-active");
      mobileMenu.classList.toggle("toggle");
  });
});
