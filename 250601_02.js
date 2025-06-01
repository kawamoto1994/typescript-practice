var colorTarget = document.querySelector('[data-color]');
var colorButtons = document.querySelectorAll('[data-color-button]');
if (colorButtons.length && colorTarget) {
    colorButtons.forEach(function (button) {
        var btn = button;
        btn.addEventListener('click', function (event) {
            var color = btn.dataset.colorButton;
            if (color) {
                colorTarget.style.backgroundColor = color;
            }
        });
    });
}
