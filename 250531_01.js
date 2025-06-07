"use strict";
const printFoods = (foods) => {
    const outputHtml = document.querySelector('[data-test]');
    // for(let i=0; i < foods.length; i++) {
    //     if(outputHtml instanceof HTMLElement) {
    //         outputHtml.innerHTML += foods[i];
    //     }
    // }  
    if (outputHtml instanceof HTMLElement) {
        for (let i = 0; i < foods.length; i++) {
            outputHtml.innerHTML += foods[i];
        }
    }
};
printFoods(['フレンチトースト', 'りんご飴', 'けけ']);
