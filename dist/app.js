"use strict";
let id = 'er23v';
const button = document.querySelector('button');
function added(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    console.log('Clicked ' + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'Thank you.'));
}
//# sourceMappingURL=app.js.map