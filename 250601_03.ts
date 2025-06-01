const apperanceButton = document.querySelector('#show-button');
const targetElement250601_03 = document.querySelector('[data-output]');

if(apperanceButton instanceof HTMLButtonElement && targetElement250601_03 instanceof HTMLElement) {
    apperanceButton.addEventListener('click', () => {
        const fruitItems = document.querySelectorAll('[data-fruit]:checked');
        const fruitData : string[] = [];
        fruitItems.forEach((item) => {
            const checkBox = item as HTMLInputElement;
            const fruit : string = checkBox.value;
            fruitData.push(fruit); 
        });
        const fruitDataString : string = fruitData.join('と');
        targetElement250601_03.textContent = `あなたは${fruitDataString}が好きなんですね！`;
        // fruitData.length = 0;
    });
}
