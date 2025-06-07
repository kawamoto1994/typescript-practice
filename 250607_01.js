var snackList = [
    { name: "チョコレート", flavor: "sweet" },
    { name: "ポテトチップス", flavor: "salty" },
    { name: "ビスケット", flavor: "sweet" },
    { name: "せんべい", flavor: "salty" },
];
var targetElement250607_01 = document.querySelector('[data-output]');
var checkList = document.querySelectorAll('[data-flavor]');
if (targetElement250607_01 instanceof HTMLElement) {
    checkList.forEach(function (item) {
        item.addEventListener('change', function () {
            var checkedList = document.querySelectorAll('[data-flavor]:checked');
            if (checkedList.length === 0) {
                targetElement250607_01.innerHTML = '';
            }
            checkedList.forEach(function (item) {
                if (item instanceof HTMLInputElement) {
                    var snack_1 = item.value;
                    var filterSnackList = snackList.filter(function (item) { return item.flavor === snack_1; }).map(function (item) { return [item.name]; });
                    targetElement250607_01.innerHTML += filterSnackList.join('');
                }
            });
        });
    });
}
