var todos = [];
console.log(todos);
var target = document.querySelector("[data-test]");
// target?.innerHTML = "テストだよーん！";
if (target instanceof HTMLElement) {
    target.innerHTML = "こんにちは！";
}
var targetHello = document.querySelector("[data-hello]");
var hello = function () {
    var name = "もっち";
    targetHello.textContent = "\u3053\u3093\u306B\u3061\u306F".concat(name, "\u3055\u3093");
};
if (targetHello instanceof HTMLElement) {
    hello();
}
