"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const profile = {
    name: 'Chandler',
    age: 24,
    hobbies: ['Games', 'Cooking'],
    role: Role.ADMIN
};
let favorites;
favorites = ['Books'];
console.log(profile.hobbies);
for (const hobby of profile.hobbies) {
    console.log(hobby.toUpperCase());
}
if (profile.role === Role.AUTHOR) {
    console.log('is author');
}
//# sourceMappingURL=objs-arrays-enums.js.map