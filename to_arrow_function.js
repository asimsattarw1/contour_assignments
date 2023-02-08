// Regular function
function counterFunc(counter) {
    if (counter > 100) {
        counter = 0;
    } else {
        counter++;
    }

    return counter;
}

// Arrow Function
const counterFunc = (counter) => {
    if (counter > 100) {
        counter = 0;
    } else {
        counter++;
    }

    return counter;
}
