"use strict";
const countButton = document.querySelector('[data-count]');
let countNum = 0;
const targetElement_250531_03 = document.querySelector('[data-test]');
const targetElement0 = document.querySelector('[data-test-0]');
const audio250531 = new Audio('250531_03.mp3');
const audio250531Finish = new Audio('250531_03finish.mp3');
countButton.addEventListener('click', (event) => {
    if (targetElement0 instanceof HTMLElement) {
        targetElement0.remove();
    }
    if (targetElement_250531_03 instanceof HTMLElement) {
        countNum++;
        if (countNum < 10) {
            targetElement_250531_03.innerHTML += `もっちは今${countNum}回ボタンを押しました！<br>`;
            audio250531.currentTime = 0;
            audio250531.play();
        }
        else {
            targetElement_250531_03.innerHTML = `もう十分押したよ〜！`;
            if (countNum === 10) {
                audio250531Finish.currentTime = 0;
                audio250531Finish.play();
            }
        }
    }
});
