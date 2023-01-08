const toggleBtn = document.querySelector('.navbar-toggleBtn');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarIcon = document.querySelector('.navbar-icon');

toggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('active')
  navbarIcon.classList.toggle('active')
})