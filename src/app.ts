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

// Function Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    };
    return a + b;
};

const result = add('Adnan', ' Jabbar');
result.split(' ');

// function add(a: Combinable, b: Combinable) {
//     // Type Guards using Type Auth
//     if(typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     };
//     return a + b;
// };

// // Two Cusotmer Object
// type UnknownEmployee = Admin | Employee;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if('privileges' in emp){
//         console.log('Privileges: ' + emp.privileges);
//     }
//     if('startDate' in emp) {
//         console.log('Start Date: ' + emp.startDate);
//     }
// }

// // printEmployeeInformation(e1);
// printEmployeeInformation({name: 'Imbisat', startDate: new Date()});

// class Car {
//     drive() {
//         console.log('Driving...');
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...');
//     }

//     loadCargo(amount: number) {
//         console.log('Loading cargo ...' +amount);
//     }
// }

// // Union Type
// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     // if ('loadCargo' in vehicle) {
//     // Alternative elegant way to use instanceof.
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000);
//     };
// };

// useVehicle(v1);
// useVehicle(v2);

// // Discriminate Unions Special Types of Type Guards 

// interface Bird {
//     type: 'bird'  // Discriminate Unions
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse'  // Discriminate Unions
//     runningSpeed: number;
// }

// // Discriminate Unions
// type Animal = Bird | Horse;

// function movieAnimal(animal: Animal) {
//     // if('flyingSpeed' in animal) {
//     //     console.log('Moving with speed: ' + animal);
//     // }
//     let speed;
//     switch(animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//     }
//     console.log('Moving with speed: ' + speed);
// }

// movieAnimal({type: 'bird', flyingSpeed: 10 });

// // const paragragh = document.querySelector('message-output');
// // Similar JSX but we use the alternative as keyword or if check mwthod.
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// // const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
// const userInputElement = document.getElementById('user-input');

// if(userInputElement) {
//     (userInputElement as HTMLInputElement).value = "Hi there!";
// }

// // Index Properties
// interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
//     // id: string; // we cann further obj properties but with same infered type with index properties.
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with a capital character!'
// }




