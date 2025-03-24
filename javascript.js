// Math functions
let sum = 0;

function addition(a,b) {
    sum = a+b;
    console.log(sum);
}

function subtraction(a,b) {
    sum = a-b;
    console.log(sum);

}

function multiplication(a,b) {
    sum = a*b;
    console.log(sum);
}

function division(a,b) {
    sum = a / b;
    console.log(sum);

}

function clearTotal() {
    sum = 0;
}

// Calculator container creation
// build large rectangle container for top of calculator that displays input - 3X taller than buttons
// Five rows and four columns
// 5 - Clear, Percentage (maybe), Delete (maybe), Division
// 4 - 7, 8, 9, multiplication
// 3 - 4, 5, 6, subtraction
// 2 - 1, 2, 3, addition
// 1 - +/-, 0, . (decimal), equals