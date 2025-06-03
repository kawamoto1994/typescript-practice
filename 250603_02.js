var snackButton = document.querySelector('#snack-button');
var targetElement250603_02 = document.querySelector('[data-output]');
if (snackButton instanceof HTMLButtonElement && targetElement250603_02 instanceof HTMLElement) {
    var snackObject_1 = {};
    snackButton.addEventListener('click', function () {
        targetElement250603_02.innerHTML = '';
        var checkedItem = document.querySelectorAll('[data-snack]:checked');
        checkedItem.forEach(function (item) {
            var snackElement = item;
            var snack = snackElement.value;
            if (snackObject_1[snack]) {
                snackObject_1[snack]++;
            }
            else {
                snackObject_1[snack] = 1;
            }
        });
        var result = Object.keys(snackObject_1).map(function (key) { return [key, snackObject_1[key]]; });
        var ranking = result.sort(function (b, a) { return a[1] - b[1]; });
        ranking.forEach(function (_a) {
            var snack = _a[0], num = _a[1];
            targetElement250603_02.innerHTML += "<li>".concat(snack, ": ").concat(num, "\u500B</li>");
        });
    });
}
