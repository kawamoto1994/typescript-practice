var apperanceButton = document.querySelector('#show-button');
var targetElement250601_03 = document.querySelector('[data-output]');
if (apperanceButton instanceof HTMLButtonElement && targetElement250601_03 instanceof HTMLElement) {
    apperanceButton.addEventListener('click', function () {
        var fruitItems = document.querySelectorAll('[data-fruit]:checked');
        var fruitData = [];
        fruitItems.forEach(function (item) {
            var checkBox = item;
            var fruit = checkBox.value;
            fruitData.push(fruit);
        });
        var fruitDataString = fruitData.join('と');
        targetElement250601_03.textContent = "\u3042\u306A\u305F\u306F".concat(fruitDataString, "\u304C\u597D\u304D\u306A\u3093\u3067\u3059\u306D\uFF01");
        // fruitData.length = 0;
    });
}
