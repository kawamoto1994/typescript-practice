"use strict";
const sweetsButton = document.querySelector('#snack-button');
const targetElement250603_01 = document.querySelector('[data-output]');
if (sweetsButton instanceof HTMLButtonElement && targetElement250603_01 instanceof HTMLElement) {
    const pushData = () => {
        const snackCheckedData = [];
        const snackCheckedList = document.querySelectorAll('[data-snack]:checked');
        snackCheckedList.forEach((item) => {
            const snack = item;
            const value = snack.value;
            snackCheckedData.push(value);
        });
        const snackCheckedDataString = snackCheckedData.join('と');
        if (snackCheckedData.length === 0) {
            targetElement250603_01.innerHTML = '選択されていません！';
        }
        else {
            targetElement250603_01.innerHTML = `${snackCheckedDataString}ですね！`;
        }
    };
    sweetsButton.addEventListener('click', () => {
        pushData();
    });
}
