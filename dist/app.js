"use strict";
var addUp;
addUp = function (n1, n2) {
    return n1 + n2;
};
var Profile = (function () {
    function Profile(n) {
        this.age = 24;
        if (n) {
            this.name = n;
        }
    }
    Profile.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hello.');
        }
    };
    return Profile;
}());
var user1;
user1 = new Profile();
user1.greet('My name is');
console.log(user1);
//# sourceMappingURL=app.js.map