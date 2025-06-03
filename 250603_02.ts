const snackButton = document.querySelector('#snack-button');
const targetElement250603_02 = document.querySelector('[data-output]');

if(snackButton instanceof HTMLButtonElement && targetElement250603_02 instanceof HTMLElement) {
    const snackObject : {[snack:string]:number} = {};

    snackButton.addEventListener('click', ()=> {
        targetElement250603_02.innerHTML = '';
        const checkedItem = document.querySelectorAll('[data-snack]:checked');
        checkedItem.forEach((item) => {
            const snackElement = item as HTMLInputElement;
            const snack = snackElement.value;
            if(snackObject[snack]) {
                snackObject[snack]++
            } else {
                snackObject[snack] = 1;
            }
        })
        const result :[string, number][] = Object.keys(snackObject).map((key) => [key, snackObject[key]]);
        const ranking  = result.sort((b, a) => a[1] - b[1]);
        ranking.forEach(([snack, num]) => {
            targetElement250603_02.innerHTML += `<li>${snack}: ${num}個</li>`;
        });
    })
}
