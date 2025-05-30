

const greet: (name: string) => void = (name: string) => {
    const outputHtml = document.querySelector('[data-test]') as HTMLElement;
    if(outputHtml instanceof HTMLElement) {
        outputHtml.textContent = `こんにちは${name}さん！`;
    }
}

greet('もっち');