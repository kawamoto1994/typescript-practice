var targetElement = document.querySelector('[data-result]');
var outputAnimal = function (animal) {
    if (targetElement instanceof HTMLElement) {
        targetElement.textContent = "\u3042\u306A\u305F\u306F".concat(animal, "\u304C\u597D\u304D\u306A\u3093\u3067\u3059\u306D\uFF01");
    }
};
var animalButtons = document.querySelectorAll('[data-animal]');
if (animalButtons.length) {
    animalButtons.forEach(function (button) {
        var btn = button;
        var animalName = btn.dataset.animal;
        button.addEventListener('click', function () {
            if (animalName) {
                outputAnimal(animalName);
            }
        });
    });
}
