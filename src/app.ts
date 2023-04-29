const button = document.querySelector('button');

// a Comment

function clickHandler(message: string) {
    console.log('Clicked! ' + message);
}

if(button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}

// const mapped = new Map();



