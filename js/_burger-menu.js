"use strict";

const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.header__nav');
const navList = document.querySelector(".header__nav-list");
const navLinks = document.querySelectorAll(".header__nav-link");

if (burgerMenu && nav && navList && navLinks.length > 0) {
    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('open');
        navList.classList.toggle("open");
        navLinks.forEach(link => link.classList.toggle("open"));
    });
}