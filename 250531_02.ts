const targetElement = document.querySelector('[data-result]') as HTMLElement;

const outputAnimal : (animal : string) => void = (animal : string) => {
    if(targetElement instanceof HTMLElement) {
        targetElement.textContent = `あなたは${animal}が好きなんですね！`
    }
}

const animalButtons = document.querySelectorAll('[data-animal]');

if(animalButtons.length) {
    animalButtons.forEach((button) => {
        const btn = button as HTMLElement;
        const animalName = btn.dataset.animal;

        button.addEventListener('click', ()=> {    
            if(animalName) {
                outputAnimal(animalName);
            }
        })
    });
}

