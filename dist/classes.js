"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    get latestReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No Report Found.');
    }
    set latestReport(value) {
        if (!value) {
            throw new Error('Pass a valid value.');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log('Accounting ID: ' + this.id);
    }
    addEmployee(name) {
        if (name === 'Chandler') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Chandler');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('d1', ['Chandler']);
it.addEmployee('Chandler');
it.addEmployee('Grant');
it.describe();
it.printEmployeeInfo();
console.log(it);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.latestReport = 'Year End Report';
accounting.addReport('No Report Found.');
console.log(accounting.latestReport);
accounting.addEmployee('Chandler');
accounting.addEmployee('Grant');
accounting.describe();
//# sourceMappingURL=classes.js.map