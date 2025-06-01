const input = document.querySelector('#name') as HTMLInputElement;
const button = document.querySelector('#submit-button') as HTMLButtonElement;
const targetElement250601_01 = document.querySelector('[data-output]') as HTMLElement;
const audio250601_01 = new Audio('250601_01.mp3');


const nameOutput : (name : string) => void = (name: string) => {
    if(targetElement250601_01 instanceof HTMLElement) {
        targetElement250601_01.innerHTML = name;
    }
}

button.addEventListener('click', (event)=> {
    const getName = input.value;
    if(getName) {
        audio250601_01.currentTime = 0;
        audio250601_01.play();
        nameOutput(`こんにちは、${getName}さん！`);
        input.value = '';
    } else {
        nameOutput('名前を入力してください');
    }
});


input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        button.click();
    }
});

