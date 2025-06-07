"use strict";
const todos = [];
console.log(todos);
const target = document.querySelector("[data-test]");
// target?.innerHTML = "テストだよーん！";
if (target instanceof HTMLElement) {
    target.innerHTML = "こんにちは！";
}
const targetHello = document.querySelector("[data-hello]");
const hello = () => {
    const name = "もっち";
    targetHello.textContent = `こんにちは${name}さん`;
};
if (targetHello instanceof HTMLElement) {
    hello();
}
