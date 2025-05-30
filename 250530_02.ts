const greet250530_02: (name: string, num: number) => void = (name: string, num: number) => {
    const outputHtml = document.querySelector('[data-test]') as HTMLElement;

    for(let i=0; i < num; i++) {
        if(outputHtml instanceof HTMLElement) {
            outputHtml.innerHTML += `こんにちは${name}さん<br>`;
        }
    }
}

greet250530_02('もっち', 3);