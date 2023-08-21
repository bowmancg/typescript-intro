class Department {
    protected employees: string[] = []

    constructor(private readonly id: string, public name: string) {

    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`)
    }

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
}

class AccountingDepartment extends Department {
    private lastReport: string

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

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0]
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

const it = new ITDepartment('d1', ['Chandler'])

it.addEmployee('Chandler')
it.addEmployee('Grant')

it.describe()
it.printEmployeeInfo()

console.log(it)

const accounting = new AccountingDepartment('d2', [])

accounting.latestReport = 'Year End Report'
accounting.addReport('No Report Found.')
console.log(accounting.latestReport)

accounting.addEmployee('Chandler')
accounting.addEmployee('Grant')

accounting.printReports()
accounting.printEmployeeInfo()