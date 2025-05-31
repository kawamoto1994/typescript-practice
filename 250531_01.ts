const printFoods : (foods: string[]) => void = (foods: string[]) => {
    const outputHtml = document.querySelector('[data-test]') as HTMLElement;

    // for(let i=0; i < foods.length; i++) {
    //     if(outputHtml instanceof HTMLElement) {
    //         outputHtml.innerHTML += foods[i];
    //     }
    // }  

    if(outputHtml instanceof HTMLElement) {
        for(let i=0; i < foods.length; i++) {
            outputHtml.innerHTML += foods[i];
        }
    }
}

printFoods(['フレンチトースト', 'りんご飴', 'けけ']);

