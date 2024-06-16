document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  const navList = document.querySelector('nav ul');

  mobileMenu.addEventListener('click', () => {
      navList.classList.toggle('showing');
  });
});
