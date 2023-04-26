// function inferred type but does not need to define it.
// function add(n1: number, n2:number): number {
//     return n1 + n2;
// }

// Let the typescript set the self inferred function type.
function add(n1: number, n2:number) {
    return n1 + n2;
}

// voide accept the all value and inferred type and simple return the value and return too.
// function printResult(num: number): void {
//     console.log('Result : ' + num);
// }

// if we use undefined inferred function type then should be used the return statement.
function printResult(num: number): undefined {
    console.log('Result : ' + num);
    return;
}

// Function Types & Callbacks with void
function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

// Function as Types;
// let combineValues: Function;
// It will prams with inffered type and return it inferred function as types.
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValue = undefined; // its fine

addAndHandler(10, 20, (result) => {
    console.log(result);
    // return result; // might be return if remove the return then no issue.
});
