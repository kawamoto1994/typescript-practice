var input = document.querySelector('#name');
var button = document.querySelector('#submit-button');
var targetElement250601_01 = document.querySelector('[data-output]');
var audio250601_01 = new Audio('250601_01.mp3');
var nameOutput = function (name) {
    if (targetElement250601_01 instanceof HTMLElement) {
        targetElement250601_01.innerHTML = name;
    }
};
button.addEventListener('click', function (event) {
    var getName = input.value;
    if (getName) {
        audio250601_01.currentTime = 0;
        audio250601_01.play();
        nameOutput("\u3053\u3093\u306B\u3061\u306F\u3001".concat(getName, "\u3055\u3093\uFF01"));
        input.value = '';
    }
    else {
        nameOutput('名前を入力してください');
    }
});
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        button.click();
    }
});
