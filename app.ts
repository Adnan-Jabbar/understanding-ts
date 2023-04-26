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

printResult(add(5, 12));

// let someValue = undefined; // its fine
