// Working with Decorator Factories
// function Logger(target: Function as Argument) {
function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
};

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function<T extends { new(...args: any[]): {name: string} }>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Adnan';

    constructor() {
        console.log('Creating person object...');
    }
}
const pers = new Person();

console.log(pers);

/**** Diving into Property Decorators ****/

// Symbol is We dont know what we use as a property identifier.
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    // Accessor
    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}

class Printer {
    message = 'This work!';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();
p.showMessage();

const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage.bind(p));
button.addEventListener('click', p.showMessage);

// ---

interface validatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] // ['required', 'positive']
    }
}

const registeredValidators: validatorConfig = {};

// // target: any (prototype of the object or if the constructor function it would have statics property) and don not get the descriptor for the properties.
// function Required(target: any, propName: string) {
//     // registor a class name as key.
//     registeredValidators[target.constructor.name] = {
//         ...registeredValidators[target.constructor.name],
//         [propName]: ['required']
//     };
// };

// function PositiveNumber(target: any, propName: string) {
//     registeredValidators[target.constructor.name] = {
//         ...registeredValidators[target.constructor.name],
//         [propName]: ['positive']
//     };
// };

// In the current form, our validation logic is not entirely correct. It's not working as intended.
// At the moment, only one validator value is stored in the array (e.g. 'required') - of course that's not what we need.
// Multiple values should be stored instead - at least potentially.
function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}
 
function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    // giving access of the property name
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
};

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse);
});







