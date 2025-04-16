"use strict";

const viewMoreBtn = document.querySelector('.products__btn');
const hiddenItems = document.querySelectorAll('.products__item.hidden');

if (viewMoreBtn && hiddenItems.length > 0) {
    viewMoreBtn.addEventListener('click', () => {
        hiddenItems.forEach(item => item.classList.remove('hidden'));
        viewMoreBtn.classList.add("hidden");
    });
}