var sweetsButton = document.querySelector('#snack-button');
var targetElement250603_01 = document.querySelector('[data-output]');
if (sweetsButton instanceof HTMLButtonElement && targetElement250603_01 instanceof HTMLElement) {
    var pushData_1 = function () {
        var snackCheckedData = [];
        var snackCheckedList = document.querySelectorAll('[data-snack]:checked');
        snackCheckedList.forEach(function (item) {
            var snack = item;
            var value = snack.value;
            snackCheckedData.push(value);
        });
        var snackCheckedDataString = snackCheckedData.join('と');
        if (snackCheckedData.length === 0) {
            targetElement250603_01.innerHTML = '選択されていません！';
        }
        else {
            targetElement250603_01.innerHTML = "".concat(snackCheckedDataString, "\u3067\u3059\u306D\uFF01");
        }
    };
    sweetsButton.addEventListener('click', function () {
        pushData_1();
    });
}
