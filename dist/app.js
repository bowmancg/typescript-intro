"use strict";
const button = document.querySelector('button');
if (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
        console.log('Clicked');
    });
}
