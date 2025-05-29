const todos: string[] = [];
console.log(todos);

const target = document.querySelector("[data-test]") as HTMLElement;
// target?.innerHTML = "テストだよーん！";

if (target instanceof HTMLElement) {
    target.innerHTML = "こんにちは！";
}