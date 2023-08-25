function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        const hookEl = document.getElementById(hookId)
        const a = new constructor()
        if (hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = a.name
        }
    }
}

@WithTemplate('<h1>My Account Object</h2>', 'app')
class Account {
    name = 'Chandler'
    constructor() {
        console.log('Creating Object.')
    }
}

const acc = new Account()
console.log(acc)