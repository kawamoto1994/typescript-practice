"use strict";
// 🎯 条件：
// 味とタイプの両方でチェックされた条件に合うスイーツだけを表示する
// チェックを外したらすぐにリストが変わる（リアルタイム更新）
// 表示は <p data-output> にカンマ区切りでスイーツ名を表示
const snackList2 = [
    { name: "クッキー", flavor: "sweet", type: "baked" },
    { name: "アイス", flavor: "sweet", type: "cold" },
    { name: "ポテチ", flavor: "salty", type: "baked" },
    { name: "ゼリー", flavor: "sweet", type: "cold" },
    { name: "せんべい", flavor: "salty", type: "baked" },
];
const targetElement250607_02 = document.querySelector('[data-output]');
const checkList2 = document.querySelectorAll('[data-flavor],[data-type]');
if (targetElement250607_02 instanceof HTMLElement) {
    checkList2.forEach((item) => {
        item.addEventListener('change', () => {
            if (item instanceof HTMLInputElement) {
                const flavorList = document.querySelectorAll('[data-flavor]:checked');
                const typeList = document.querySelectorAll('[data-type]:checked');
                const flavorData = [];
                const typeData = [];
                flavorList.forEach((item) => {
                    if (item instanceof HTMLInputElement) {
                        flavorData.push(item.value);
                    }
                });
                typeList.forEach((item) => {
                    if (item instanceof HTMLInputElement) {
                        typeData.push(item.value);
                    }
                });
                const filterSnackList = snackList2.filter((item) => {
                    if (flavorData.length) {
                        return flavorData.includes(item.flavor);
                    }
                    else {
                        return true;
                    }
                }).filter((item) => {
                    if (typeData.length) {
                        return typeData.includes(item.type);
                    }
                    else {
                        return true;
                    }
                }).map((item) => item.name);
                if (filterSnackList.length) {
                    targetElement250607_02.innerHTML = `${filterSnackList.join('と')}が絞り込まれました！`;
                }
                else {
                    targetElement250607_02.innerHTML = `絞り込みは0件です`;
                }
            }
        });
    });
}
