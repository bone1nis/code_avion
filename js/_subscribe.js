"use strict";

const forms = document.querySelectorAll('.subscribe__form');

forms.forEach((form) => {
    const input = form.querySelector('.subscribe__input');

    if (input) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = input.value.trim();
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

            if (!isValidEmail) {
                alert("Введите корректный email.");
            } else {
                alert("Спасибо за подписку!");
            }

            form.reset();
        });
    }
});