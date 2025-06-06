var fruitButton = document.querySelector('#count-fruits');
var targetElement250606 = document.querySelector('[data-output]');
var fruitData = {};
if (fruitButton instanceof HTMLButtonElement && targetElement250606 instanceof HTMLElement) {
    fruitButton.addEventListener('click', function () {
        var checkedItems = document.querySelectorAll('[data-fruit]:checked');
        checkedItems.forEach(function (item) {
            if (item instanceof HTMLInputElement) {
                var fruit = item.value;
                if (fruitData[fruit]) {
                    fruitData[fruit]++;
                }
                else {
                    fruitData[fruit] = 1;
                }
            }
        });
        var result = Object.keys(fruitData).map(function (key) { return [key, fruitData[key]]; });
        var sum = 0;
        var fruits = [];
        result.forEach(function (_a) {
            var fruit = _a[0], num = _a[1];
            sum = sum + num;
            fruits.push(fruit);
        });
        targetElement250606.innerHTML = "\u9078\u3093\u3060\u30D5\u30EB\u30FC\u30C4\u306F".concat(sum, "\u500B\u3067\u3059\uFF1A").concat(fruits.join('、'));
    });
}
