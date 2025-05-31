var printFoods = function (foods) {
    var outputHtml = document.querySelector('[data-test]');
    for (var i = 0; i < foods.length; i++) {
        if (outputHtml instanceof HTMLElement) {
            outputHtml.innerHTML += foods[i];
        }
    }
};
printFoods(['フレンチトースト', 'りんご飴', 'けけ']);
