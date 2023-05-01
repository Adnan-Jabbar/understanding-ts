class Department {
    // private readonly id: string;
    // public name: string;
    private employees: string[] = [];

    constructor (private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        // validation etc
        // this.id = 'D2';
        this.employees.push(employee);
    }

    printExmployeeInfromation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReport() {
        console.log(this.reports);
    }

}

// const accounting = new Department('D1', 'Accounting');
const it = new ITDepartment('D1', ['Hassan']);

it.addEmployee('Adnan');
it.addEmployee('Imbisat');

// it.employees[2] = 'Kamran';

it.describe();
it.name = 'NEW NAME';
it.printExmployeeInfromation();

console.log(it);

const accounting = new AccountingDepartment('D2', []);

accounting.addReport('Something went wrong...');

accounting.printReport();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();







