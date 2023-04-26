// Unknown like the any type but having diffrence
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Adnan";

if( typeof userInput === "string") {
    userName = userInput;
}

// userName = userInput; // !!! ERROR !!! we should to use extra code and using typeof.

// never type nothing to return any things.
function generateError(message: string, code: number): never {
    throw {errorMessage: message, errorCode: code};
    // while (true) {}; // never return any thing like never types.
}

generateError("An error occurred!", 500);
