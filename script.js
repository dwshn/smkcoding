// nav menu 
const navMenu = document.querySelector('#navbar');
const navMenuBtn = document.querySelector('#btn-nav');

navMenuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('hidden');
});