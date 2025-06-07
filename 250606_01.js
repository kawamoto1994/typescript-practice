"use strict";
const fruitButton = document.querySelector('#count-fruits');
const targetElement250606 = document.querySelector('[data-output]');
const fruitData = {};
if (fruitButton instanceof HTMLButtonElement && targetElement250606 instanceof HTMLElement) {
    fruitButton.addEventListener('click', () => {
        const checkedItems = document.querySelectorAll('[data-fruit]:checked');
        checkedItems.forEach((item) => {
            if (item instanceof HTMLInputElement) {
                const fruit = item.value;
                if (fruitData[fruit]) {
                    fruitData[fruit]++;
                }
                else {
                    fruitData[fruit] = 1;
                }
            }
        });
        const result = Object.keys(fruitData).map((key) => [key, fruitData[key]]);
        let sum = 0;
        const fruits = [];
        result.forEach(([fruit, num]) => {
            sum = sum + num;
            fruits.push(fruit);
        });
        targetElement250606.innerHTML = `選んだフルーツは${sum}個です：${fruits.join('、')}`;
    });
}
