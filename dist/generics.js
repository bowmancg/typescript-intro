"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Chandler", hobbies: ["Books"] }, { age: 24 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = 'No Value.';
    if (element.length === 1) {
        descriptionText = 'Found 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Found ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['Cooking', 'Games']));
function extractConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractConvert({ name: 'Chandler' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Chandler');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Chandler', 'Grant'];
//# sourceMappingURL=generics.js.map