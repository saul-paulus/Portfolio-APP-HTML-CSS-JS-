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


// function to skill

const skillCard = document.getElementsByClassName('skill__card');
const skillCardData = document.querySelectorAll('.skill__card-data');


function toggleSkill() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillCard.length; i++) {
        skillCard[i].className = 'skill__card skill__close';
    }

    if (itemClass === 'skill__card skill__close') {
        this.parentNode.className = 'skill__card skill__open'
    }
}

skillCardData.forEach((el) => {
    el.addEventListener('click', toggleSkill)
})