type Admin = {
    name: string
    privileges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name: 'Chandler',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combine = string | number
type Numeric = number | boolean

type Universal = Combine & Numeric

function addCombine(a: Combine, b: Combine) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

type UnknownEmployee = Employee | Admin

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name)
    if ('privileges' in emp) {        
        console.log('Privileges: ' + emp.privileges)
    }
    if ('startDate' in emp) {        
        console.log('Starting Date: ' + emp.startDate)
    }
}

printEmployeeInfo(e1)

class Car {
    drive() {
        console.log('Car')
    }
}

class Truck {
    drive() {
        console.log('Truck')
    }
    loadCargo(amount: number) {
        console.log(`Loading ${amount} Lbs. of cargo.`)
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1)
useVehicle(v2)

interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    let speed
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break
            case 'horse':
                speed = animal.runningSpeed
    }
    console.log(`A ${animal.type} moves at ${speed} mi/hr`)
}

moveAnimal({type: 'bird', flyingSpeed: 10})
moveAnimal({type: 'horse', runningSpeed: 25})