"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Chandler';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Something went wrong.', 500);
