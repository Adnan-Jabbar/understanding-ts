// type AddFn = (a: number, b: number) => number;

// interface as Function types alternative.
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    // Optional Properties
    readonly name?: string;
    outputname?: string;
}

// We can extends multiple interfaces 
interface Greetable extends Named {
    greet(phrase: string): void;
}

// We can implements multiple interfaces 
class Person implements Greetable {
    name?: string;
    age = 30;

    // // Optional Parameters
    // constructor(n: string = '') {    OR
    constructor(n?: string) {
        if(n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if(this.name){
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi!');
        }
    }
}

// let user1: Person;
let user1: Greetable;  // Above both are the same.

user1 = new Person();
// user1.name = 'Imbisat';

user1.greet('Hi there - I am');
console.log(user1);


