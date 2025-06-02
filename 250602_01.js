var cakeButton = document.querySelector('#count-button');
var targetElement250602_01 = document.querySelector('[data-output]');
if (cakeButton instanceof HTMLButtonElement && targetElement250602_01 instanceof HTMLElement) {
    cakeButton.addEventListener('click', function () {
        targetElement250602_01.innerHTML = '';
        var cakeLists = document.querySelectorAll('[data-cake]:checked');
        var cakeData = {};
        cakeLists.forEach(function (item) {
            var cakeElement = item;
            var cake = cakeElement.value;
            if (cakeData[cake]) {
                cakeData[cake]++;
            }
            else {
                cakeData[cake] = 1;
            }
        });
        var entries = Object.keys(cakeData).map(function (key) { return [key, cakeData[key]]; });
        entries.forEach(function (_a) {
            var cake = _a[0], num = _a[1];
            targetElement250602_01.innerHTML += "".concat(cake, ": ").concat(num, "\u500B<br>");
        });
        var audio250602_01 = new Audio('250602_01.mp3');
        audio250602_01.currentTime = 0;
        audio250602_01.play();
    });
}
