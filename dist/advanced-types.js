"use strict";
var _a;
const e1 = {
    name: "Chandler",
    privileges: ["create-server"],
    startDate: new Date(),
};
function addCombine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const results = addCombine('Chandler', ' Bowman');
results.split(' ');
const fetchedUserData = {
    id: 'u1',
    name: 'Chandler',
    job: { title: 'CTO', description: 'My Company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInputs = undefined;
const storedData = userInputs !== null && userInputs !== void 0 ? userInputs : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=advanced-types.js.map