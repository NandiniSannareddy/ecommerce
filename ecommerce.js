// JavaScript to toggle the menu on mobile screens
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});
