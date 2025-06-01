const colorTarget = document.querySelector('[data-color]') as HTMLElement;
const colorButtons = document.querySelectorAll('[data-color-button]');

if(colorButtons.length && colorTarget) {
    colorButtons.forEach((button) => {        
        const btn = button as HTMLButtonElement;
        btn.addEventListener('click', (event)=> {
            const color: string | undefined  = btn.dataset.colorButton;
            if(color) {
                colorTarget.style.backgroundColor = color;
            }
        });
    });
}
