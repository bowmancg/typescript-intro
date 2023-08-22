interface AddFn {
    (a: number, b: number): number
}

let addUp: AddFn

addUp = (n1: number, n2: number) => {
    return n1 + n2
}

interface Named {
    readonly name?: string
    outputName?: string
}

interface Greeting extends Named {
    greet(phrase: string): void
}

class Profile implements Greeting {
    name?: string
    age = 24

    constructor(n?: string) {
        if (n) {            
            this.name = n
        }
    }

    greet(phrase: string) {
        if (this.name) {            
            console.log(phrase + ' ' + this.name)
        } else {
            console.log('Hello.')
        }
    }
}

let user1: Greeting

user1 = new Profile()

user1.greet('My name is')
console.log(user1)