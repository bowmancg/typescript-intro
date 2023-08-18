"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var profile = {
    name: 'Chandler',
    age: 24,
    hobbies: ['Games', 'Cooking'],
    role: Role.ADMIN
};
var favorites;
favorites = ['Books'];
console.log(profile.hobbies);
for (var _i = 0, _a = profile.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (profile.role === Role.AUTHOR) {
    console.log('is author');
}
//# sourceMappingURL=objs-arrays-enums.js.map