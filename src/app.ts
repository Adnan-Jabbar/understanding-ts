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

// Which concrete type we passed in when we call function.
const mergedObj = merge({name: 'Adnan', hobbies: ['Sports']}, { age: 30 });

console.log(mergedObj);

/**** Another Generic Function ****/

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if(element.length === 1) {
        descriptionText = "Got 1 element.";
    } else if (element.length > 0) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

/**** The keyof Constraint ****/
function extractAndConvert<T extends Object, U extends keyof T>(obj: T, key: U) {
    // return obj[key];  // Vanila JavaScript object Key Notation
    return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Adnan' }, 'name');

/**** Generic Classes ****/
// It should work with premitive value.
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1)    // -1 it no item found it will accidently work.
    }

    getitems() {
        return [...this.data];
    }
}

// Which concrete type we passed in when we instantiate.
const textStorage = new DataStorage<string>();
textStorage.addItem('Adnan');
textStorage.addItem('Imbisat');
textStorage.removeItem('Adnan');
console.log(textStorage.getitems());

const numberStorage = new DataStorage<number>();

// // Union Type We could use premitive value.
// // const combineStorage = new DataStorage<number | string>();

// const objStorage = new DataStorage<object>();
// const nameObj = {name: 'Adnan'};
// objStorage.addItem(nameObj);
// objStorage.addItem({name: 'Imbisat'});
// objStorage.removeItem({name: 'Adnan'});  // it will not be work due to new object and have new memory address in the object.

// console.log(objStorage.getitems());

/**** Builtin Generic Utility Partial Types ****/
// Partial makes all properties as optional temprarly.
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, completeUntil: Date): CourseGoal {
    // return { title: title, description: description, completeUntil: completeUntil};
    let courseGoal: Partial<CourseGoal> = {};   // Generic Utility Partial Types.
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal as CourseGoal;    // Type casting
}

// Generic Utility Readonly Types. 
const names: Readonly<string[]> = ['Adnan', 'Imbisat'];
// names.push('Anna');
// names.pop();















