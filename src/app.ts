interface Named {
    readonly name: string;
}

// We can extends multiple interfaces 
interface Greetable extends Named {
    greet(phrase: string): void;
}

// We can implements multiple interfaces 
class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

// let user1: Person;
let user1: Greetable;  // Above both are the same.

user1 = new Person('AdnanJabbar');
// user1.name = 'Imbisat';

user1.greet('Hi there - I am');
console.log(user1);


