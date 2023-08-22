"use strict";
var e1 = {
    name: 'Chandler',
    privileges: ['create-server'],
    startDate: new Date()
};
function addCombine(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Starting Date: ' + emp.startDate);
    }
}
printEmployeeInfo(e1);
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Car');
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Truck');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading ".concat(amount, " Lbs. of cargo."));
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log("A ".concat(animal.type, " moves at ").concat(speed, " mi/hr"));
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 25 });
//# sourceMappingURL=app.js.map