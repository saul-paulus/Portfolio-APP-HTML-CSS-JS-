// Ambil id menu

const navMenu = document.getElementById('nav-menu');
const navBurger = document.getElementById('nav-burger');


navBurger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
})

const navLink = document.querySelectorAll('#nav-link');


function lickAction() {
    navMenu.classList.remove('open');
}

navLink.forEach(n => n.addEventListener('click', lickAction));