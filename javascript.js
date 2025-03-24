// Math functions
let sum = 0;

function add(a,b) {
    sum = a+b;
}

function subtract(a,b) {
    sum = a-b;
}

function multiply(a,b) {
    sum = a*b;
}

function divide(a,b) {
    sum = a / b;
}

function clearTotal() {
    sum = 0;
}

function operate(a,b,mathFunction) {
    if (mathFunction = "add") {
        add(a,b);
        console.log("Addition is " + sum);
    } else if (mathFunction = "subtract") {
        subtract(a,b);
        console.log("Subtraction is "+ sum);
    } else if (mathFunction = "multiply") {
        multiply(a,b);
        console.log("Mutliplication is " + sum);
    } else if (mathFunction = "divide") {
        divide(a,b);
        console.log("Division is " + sum);
    } else if (mathFunction = "clearTotal") {
        clearTotal()
    } else {
        console.log("Invalid Input - Try again dummy.");
    }
 }

// Calculator container creation
// build large rectangle container for top of calculator that displays input - 3X taller than buttons
// Five rows and four columns
// 5 - Clear, Percentage (maybe), Delete (maybe), Division
// 4 - 7, 8, 9, multiplication
// 3 - 4, 5, 6, subtraction
// 2 - 1, 2, 3, addition
// 1 - +/-, 0, . (decimal), equals