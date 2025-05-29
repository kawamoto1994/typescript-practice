var todos = [];
console.log(todos);
var target = document.querySelector("[data-testt]");
// target?.innerHTML = "テストだよーん！";
if (target instanceof HTMLElement) {
    target.innerHTML = "こんにちは！";
}
