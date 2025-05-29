const todos: string[] = [];
console.log(todos);

const target = document.querySelector("[data-test]") as HTMLElement;
// target?.innerHTML = "テストだよーん！";

if (target instanceof HTMLElement) {
    target.innerHTML = "こんにちは！";
}

const targetHello = document.querySelector("[data-hello]") as HTMLElement;

const hello: () => void = () => {
    const name: string = "もっち";
    targetHello.textContent = `こんにちは${name}さん`;
}

if(targetHello instanceof HTMLElement) {
    hello();
}

