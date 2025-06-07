"use strict";
const colorTarget = document.querySelector('[data-color]');
const colorButtons = document.querySelectorAll('[data-color-button]');
if (colorButtons.length && colorTarget) {
    colorButtons.forEach((button) => {
        const btn = button;
        btn.addEventListener('click', (event) => {
            const color = btn.dataset.colorButton;
            if (color) {
                colorTarget.style.backgroundColor = color;
            }
        });
    });
}
