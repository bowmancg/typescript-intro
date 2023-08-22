abstract class Department {
    static fiscalYear = 2020
    protected employees: string[] = []

    constructor(protected readonly id: string, public name: string) {

    }

    static createEmployee(name: string) {
        return {name: name}
    }

    abstract describe(this: Department): void

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInfo() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }

    describe() {
        console.log('IT ID: ' + this.id)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string
    private static instance: AccountingDepartment

    get latestReport() {
        if (this.lastReport) {            
            return this.lastReport
        }
        throw new Error('No Report Found.')
    }

    set latestReport(value: string) {
        if (!value) {
            throw new Error('Pass a valid value.')
        }
        this.addReport(value)
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0]
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance
        }
        this.instance = new AccountingDepartment('d2', [])
        return this.instance
    }

    describe() {
        console.log('Accounting ID: ' + this.id)
    }

    addEmployee(name: string) {
        if (name === 'Chandler') {
            return
        }
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }

    printReports() {
        console.log(this.reports)
    }
}

const employee1 = Department.createEmployee('Chandler')
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['Chandler'])

it.addEmployee('Chandler')
it.addEmployee('Grant')

it.describe()
it.printEmployeeInfo()

console.log(it)

const accounting = AccountingDepartment.getInstance()
const accounting2 = AccountingDepartment.getInstance()
console.log(accounting, accounting2)

accounting.latestReport = 'Year End Report'
accounting.addReport('No Report Found.')
console.log(accounting.latestReport)

accounting.addEmployee('Chandler')
accounting.addEmployee('Grant')

accounting.describe()