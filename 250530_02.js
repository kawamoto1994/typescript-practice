var greet250530_02 = function (name, num) {
    var outputHtml = document.querySelector('[data-test]');
    for (var i = 0; i < num; i++) {
        if (outputHtml instanceof HTMLElement) {
            outputHtml.innerHTML += "\u3053\u3093\u306B\u3061\u306F".concat(name, "\u3055\u3093<br>");
        }
    }
};
greet250530_02('もっち', 3);
