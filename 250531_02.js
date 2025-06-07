"use strict";
const targetElement = document.querySelector('[data-result]');
const outputAnimal = (animal) => {
    if (targetElement instanceof HTMLElement) {
        targetElement.textContent = `あなたは${animal}が好きなんですね！`;
    }
};
const animalButtons = document.querySelectorAll('[data-animal]');
if (animalButtons.length) {
    animalButtons.forEach((button) => {
        const btn = button;
        const animalName = btn.dataset.animal;
        button.addEventListener('click', () => {
            if (animalName) {
                outputAnimal(animalName);
            }
        });
    });
}
