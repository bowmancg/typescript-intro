"use strict";
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Chandler');
accounting.addEmployee('Grant');
accounting.describe();
accounting.printEmployeeInfo();
//# sourceMappingURL=app.js.map