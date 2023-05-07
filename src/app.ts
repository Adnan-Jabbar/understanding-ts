// function Logger(target: Function as Argument) {
function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger
class Person {
    name = 'Adnan';

    constructor() {
        console.log('Creating person object...');
    }
}
const pers = new Person();

console.log(pers);



