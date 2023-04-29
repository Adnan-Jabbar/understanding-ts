const button = document.querySelector('button');

// a Comment

function add(n1: number, n2: number) {
    if(n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}

function clickHandler(message: string) {
    // let userName = "Adnan";
    console.log('Clicked! ' + message);
}

if(button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}

// const mapped = new Map();



