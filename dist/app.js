"use strict";
var Profile = (function () {
    function Profile(n) {
        this.age = 24;
        this.name = n;
    }
    Profile.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Profile;
}());
var user1;
user1 = new Profile('Chandler');
user1.greet('My name is');
console.log(user1);
//# sourceMappingURL=app.js.map