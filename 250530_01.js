"use strict";
const greet = (name) => {
    const outputHtml = document.querySelector('[data-test]');
    if (outputHtml instanceof HTMLElement) {
        outputHtml.textContent = `こんにちは${name}さん！`;
    }
};
greet('もっち');
