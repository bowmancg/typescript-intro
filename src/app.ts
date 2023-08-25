function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        console.log('Rendering Template')
        const hookEl = document.getElementById(hookId)
        const a = new constructor()
        if (hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = a.name
        }
    }
}
@Logger('Logging.')
@WithTemplate('<h1>My Account Object</h2>', 'app')
class Account {
    name = 'Chandler'
    constructor() {
        console.log('Creating Object.')
    }
}

const acc = new Account()
console.log(acc)

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator')
    console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor running.')
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method running.')
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter running.')
    console.log(target)
    console.log(name)
    console.log(position)
}

class Product {
    @Log
    title: string
    private _price: number
    @Log2
    set price(val: number) {
        if (val > 0) {            
            this._price = val
        } else {
            throw new Error('Invalid Price.')
        }
    }
    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }
    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax)
    }
}

