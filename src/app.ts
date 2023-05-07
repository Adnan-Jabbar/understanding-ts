// const names: Array<string> = [];    //string[]    // It will store the Array with generics types.
// // names[0].slpit(' ');

// // Promise function will return somethings with generics types.
// // const promise: Promise<string> = new Promise((resolve, reject) => {
// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('This is done!');
//         resolve(10);
//     },2000);
// });

// promise.then(data => {
//     // data.split(' ');
// });

/**** Creating a Generic Function ****/
// // function merge(objA: object, objB: object) {
// // function merge(objA: {name: string, hobbies: string[]}, objB: { age: number}) {
// // function merge<T extends { name: string, hobbies: string[]}, U>(objA: T, objB: U) {
// function merge<T, U>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }

// // const mergedObj = merge<T, U>({ name: 'Adnan', hobbies: ['Sports'] }, { age: 30 });
// // const mergedObj = merge<string, number>({ name: 'Adnan' }, { age: 30 });
// // const mergedObj = merge<{name: string, hobbies: string[]}, {age: number}>({name: 'Adnan', hobbies: ['Sports']}, {age: 30});
// const mergedObj = merge({name: 'Adnan', hobbies: ['Sports']}, 30);

// console.log(mergedObj);

/**** Working with Constraints ****/
function merge<T extends Object, U extends Object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Adnan', hobbies: ['Sports']}, { age: 30 });

console.log(mergedObj);







