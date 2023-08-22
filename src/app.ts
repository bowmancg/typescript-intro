interface Greeting {
    name: string

    greet(phrase: string): void
}

class Profile implements Greeting {
    name: string
    age = 24

    constructor(n: string) {
        this.name = n
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}

let user1: Greeting

user1 = new Profile('Chandler')

user1.greet('My name is')
console.log(user1)