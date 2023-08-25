"use strict";
let addUp;
addUp = (n1, n2) => {
    return n1 + n2;
};
class Profile {
    constructor(n) {
        this.age = 24;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hello.');
        }
    }
}
let user1;
user1 = new Profile();
user1.greet('My name is');
console.log(user1);
//# sourceMappingURL=interfaces.js.map