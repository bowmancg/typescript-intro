"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: "Chandler", hobbies: ["Books"] }, { age: 24 });
console.log(mergedObj);
//# sourceMappingURL=app.js.map