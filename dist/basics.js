"use strict";
function adding(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
let number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';
const result = adding(number1, number2, printResult, resultPhrase);
//# sourceMappingURL=basics.js.map