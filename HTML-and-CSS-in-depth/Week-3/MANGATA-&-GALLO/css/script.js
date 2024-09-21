const hamburgerIcon = document.querySelector('.hamburger-menu');
const menuItems = document.querySelector('.menu-items');

hamburgerIcon.addEventListener('click', function() {
    menuItems.classList.toggle('show');
});
