"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: "Chandler", hobbies: ["Books"] }, { age: 24 });
console.log(mergedObj);
function countAndDescribe(element) {
    var descriptionText = 'No Value.';
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
var DataStorage = (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Chandler');
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
//# sourceMappingURL=app.js.map