type Admin = {
    name: string;
    privilegies: string[];
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
    privilegies: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = Number | boolean;

type Universal = Combinable & Numeric;
