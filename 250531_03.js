var countButton = document.querySelector('[data-count]');
var countNum = 0;
var targetElement_250531_03 = document.querySelector('[data-test]');
var targetElement0 = document.querySelector('[data-test-0]');
var audio250531 = new Audio('250531_03.mp3');
var audio250531Finish = new Audio('250531_03finish.mp3');
countButton.addEventListener('click', function (event) {
    if (targetElement0 instanceof HTMLElement) {
        targetElement0.remove();
    }
    if (targetElement_250531_03 instanceof HTMLElement) {
        countNum++;
        if (countNum < 10) {
            targetElement_250531_03.innerHTML += "\u3082\u3063\u3061\u306F\u4ECA".concat(countNum, "\u56DE\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u307E\u3057\u305F\uFF01<br>");
            audio250531.currentTime = 0;
            audio250531.play();
        }
        else {
            targetElement_250531_03.innerHTML = "\u3082\u3046\u5341\u5206\u62BC\u3057\u305F\u3088\u301C\uFF01";
            if (countNum === 10) {
                audio250531Finish.currentTime = 0;
                audio250531Finish.play();
            }
        }
    }
});
