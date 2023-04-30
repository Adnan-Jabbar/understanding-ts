const userName = 'Max';
// userName = 'Maximilian';

let age = 30;

age = 29;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isold = true;
// }

// console.log(is0ld);


// console.log(result);

// Arrow function 

// const add = (a: number, b: number) => {
//     return a + b;
// }

// const add = (a: number, b: number) => a + b;

// // Default function set the value in parameters must set in order to last param.
// const add = (a: number, b: number = 1) => a + b;

// // const printOutput = (output: string | number) => {
// //     return console.log(output);
// // }

// // const printOutput = (output: string | number) => console.log(output);

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if(button) {
//     button.addEventListener('click', event => console.log(event));
// }

// // console.log(add(5, 2));
// console.log(add(5));

// Spread Operator
const hobbies = ['Sports','Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
    name: 'Adnan',
    age: 27
}
const coppiedPerson = { ...person };

console.log(coppiedPerson);

// Rest Parameters
const add = (...numbers: number[]) => {
    // let result = 0;
    // for() { }
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addNumbers = add(5, 10, 2, 3.7);
console.log(addNumbers);

// // Rest Parameters with Tuple will fix the length of an array
// const add = (...numbers: [number, number, number]) => {
//     // let result = 0;
//     // for() { };
//     return numbers.reduce((curResult, curValue) => {
//         return curResult + curValue;
//     }, 0);
// };

// const addNumbers = add(5, 10, 2);
// console.log(addNumbers);









