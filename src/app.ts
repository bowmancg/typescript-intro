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