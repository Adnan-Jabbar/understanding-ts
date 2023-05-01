class Department {
    static fiscalYear = 2023;
    // private readonly id: string;
    // public name: string;
    protected employees: string[] = [];

    constructor (private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear);
    }

    static createDepartment(name: string) {
        return {name: name};
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
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if(name === "Adnan") {
            return;
        }
        this.employees.push(name);
    }
    
    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReport() {
        console.log(this.reports);
    }

}

const employee1 = Department.createDepartment('Adnan Jabbar');
console.log(employee1, Department.fiscalYear);

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

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
// Getter method will always call like as property not like function.
console.log(accounting.mostRecentReport);

accounting.addEmployee('Adnan');
accounting.addEmployee('Zeeshan');

accounting.printReport();
accounting.printExmployeeInfromation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();







