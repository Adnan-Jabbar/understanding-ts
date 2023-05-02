type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// We can also use interface but best is types object for intesection types.
// interface AlevatedEmployee extends Admin, Employee {};

type AlevatedEmployee = Admin & Employee;

const e1: AlevatedEmployee = {
    name: 'Adnan',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = Number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    // Type Guards using Type Auth
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    };
    return a + b;
};

// Two Cusotmer Object
type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if('privileges' in emp){
        console.log('Privileges: ' + emp.privileges);
    }
    if('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

// printEmployeeInformation(e1);
printEmployeeInformation({name: 'Imbisat', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' +amount);
    }
}

// Union Type
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    // if ('loadCargo' in vehicle) {
    // Alternative elegant way to use instanceof.
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    };
};

useVehicle(v1);
useVehicle(v2);



