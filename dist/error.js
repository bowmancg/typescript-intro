"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Chandler';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Something went wrong.', 500);
//# sourceMappingURL=error.js.map