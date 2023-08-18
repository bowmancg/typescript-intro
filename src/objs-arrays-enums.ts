enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' }

const profile = {
    name: 'Chandler',
    age: 24,
    hobbies: ['Games', 'Cooking'],
    role: Role.ADMIN
}

let favorites: string[]
favorites = ['Books']

console.log(profile.hobbies)

for (const hobby of profile.hobbies) {
    console.log(hobby.toUpperCase())
}

if (profile.role === Role.AUTHOR) {
    console.log('is author')
}