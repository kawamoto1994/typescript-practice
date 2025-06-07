"use strict";
const greet250530_02 = (name, num) => {
    const outputHtml = document.querySelector('[data-test]');
    for (let i = 0; i < num; i++) {
        if (outputHtml instanceof HTMLElement) {
            outputHtml.innerHTML += `こんにちは${name}さん<br>`;
        }
    }
};
greet250530_02('もっち', 3);
