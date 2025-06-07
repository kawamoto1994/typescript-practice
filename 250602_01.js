"use strict";
const cakeButton = document.querySelector('#count-button');
const targetElement250602_01 = document.querySelector('[data-output]');
if (cakeButton instanceof HTMLButtonElement && targetElement250602_01 instanceof HTMLElement) {
    cakeButton.addEventListener('click', () => {
        targetElement250602_01.innerHTML = '';
        const cakeLists = document.querySelectorAll('[data-cake]:checked');
        const cakeData = {};
        cakeLists.forEach((item) => {
            const cakeElement = item;
            const cake = cakeElement.value;
            if (cakeData[cake]) {
                cakeData[cake]++;
            }
            else {
                cakeData[cake] = 1;
            }
        });
        const entries = Object.keys(cakeData).map((key) => [key, cakeData[key]]);
        entries.forEach(([cake, num]) => {
            targetElement250602_01.innerHTML += `${cake}: ${num}個<br>`;
        });
        const audio250602_01 = new Audio('250602_01.mp3');
        audio250602_01.currentTime = 0;
        audio250602_01.play();
    });
}
