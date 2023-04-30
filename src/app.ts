class Department {
    public name: string;
    private employees: string[] = [];

    constructor (n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department :' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printExmployeeInfromation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Adnan');
accounting.addEmployee('Imbisat');

// accounting.employees[2] = 'Kamran';

accounting.describe();
accounting.name = 'NEW NAME';
accounting.printExmployeeInfromation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();







