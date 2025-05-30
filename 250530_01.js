var greet = function (name) {
    var outputHtml = document.querySelector('[data-test]');
    if (outputHtml instanceof HTMLElement) {
        outputHtml.textContent = "\u3053\u3093\u306B\u3061\u306F".concat(name, "\u3055\u3093\uFF01");
    }
};
greet('もっち');
