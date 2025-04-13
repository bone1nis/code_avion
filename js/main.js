"use strict"

const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.header__nav');
const navList = document.querySelector(".header__nav-list");
const navLinks = document.querySelectorAll(".header__nav-link");

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('open');
    navList.classList.toggle("open");
    navLinks.forEach(link => link.classList.toggle("open"));
});

const form = document.querySelector('.subscribe__form');
const input = document.querySelector('.subscribe__input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = input.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
        alert("Введите корректный email.");
        form.reset();
    } else {
        alert("Спасибо за подписку!");
        form.reset();
    }
});

const viewMoreBtn = document.querySelector('.products__btn');
const hiddenItems = document.querySelectorAll('.products__item.hidden');

viewMoreBtn.addEventListener('click', () => {
    hiddenItems.forEach(item => item.classList.remove('hidden'));
    viewMoreBtn.style.display = 'none';
});