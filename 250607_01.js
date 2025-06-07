"use strict";
const snackList = [
    { name: "チョコレート", flavor: "sweet" },
    { name: "ポテトチップス", flavor: "salty" },
    { name: "ビスケット", flavor: "sweet" },
    { name: "せんべい", flavor: "salty" },
];
const targetElement250607_01 = document.querySelector('[data-output]');
const checkList = document.querySelectorAll('[data-flavor]');
if (targetElement250607_01 instanceof HTMLElement) {
    checkList.forEach((item) => {
        item.addEventListener('change', () => {
            const checkedList = document.querySelectorAll('[data-flavor]:checked');
            const snackValues = [];
            checkedList.forEach((item) => {
                if (item instanceof HTMLInputElement) {
                    snackValues.push(item.value);
                }
            });
            const filterSnackList = snackList.filter((item) => {
                return snackValues.includes(item.flavor);
            }).map((item) => item.name);
            if (filterSnackList.length) {
                targetElement250607_01.innerHTML = `${filterSnackList.join('と')}が絞り込まれました！`;
            }
            else {
                targetElement250607_01.innerHTML = `絞り込みは0件です`;
            }
        });
    });
}
