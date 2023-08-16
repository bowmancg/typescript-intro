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
var result = generateError('Something went wrong.', 500);
console.log(result);
