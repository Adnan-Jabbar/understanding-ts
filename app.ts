// Unknown like the any type but having diffrence
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Adnan";

if( typeof userInput === "string") {
    userName = userInput;
}

// userName = userInput; // !!! ERROR !!! we should to use extra code and using typeof.
