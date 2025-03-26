// initial values

let sum = 0;
let firstNumber = 0;
let secondNumber = 0;
let arrayA = [];
let arrayB = [];

// functions

function add(firstNumber,secondNumber) {
sum = firstNumber+secondNumber;
}

function subtract(firstNumber,secondNumber) {
    sum = firstNumber-secondNumber;
}

function multiply(firstNumber,secondNumber) {
    sum = firstNumber*secondNumber;
}

function divide(firstNumber,secondNumber) {
    sum = firstNumber / secondNumber;
}

function clearTotal() {
    sum === 0;
}

function operate(firstNumber,secondNumber,mathFunction) {
    if (mathFunction === "add") {
        add(firstNumber,secondNumber);
        console.log("Addition is " + sum);
    } else if (mathFunction === "subtract") {
        subtract(firstNumber,secondNumber);
        console.log("Subtraction is "+ sum);
    } else if (mathFunction === "multiply") {
        multiply(firstNumber,secondNumber);
        console.log("Mutliplication is " + sum);
    } else if (mathFunction === "divide") {
        divide(firstNumber,secondNumber);
        console.log("Division is " + sum);
    } else if (mathFunction === "clearTotal") {
        clearTotal()
    } else {
        console.log("Invalid Input - Try again dummy.");
    }
 }

// button click event for numbers
const numbers = document.querySelectorAll(".numbers");

numbers.forEach((button) => {
    button.addEventListener("click",function(event) {
        const value = event.target.dataset.value;
        arrayA.push(value);

        console.log("Array is " + arrayA);
    });
});

const clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
    alert("ouch!");
});

const deleteNumber = document.querySelector('#deleteNumber')
deleteNumber.addEventListener("click", () => {
    arrayA.pop();

    console.log("Array is " + arrayA);
});

 // convert current number array and store as number
  
function arrayToNumber(array) {
    let string = arrayA.join('');
    let number = Number(string);
    return number
}




// Enter first number 
// 1) steps to store your number
    // arrayA = []
    // arrayA.push(value) adds the value to the end of the array
// 2) select your operator (+, -, /, *)
    // convert current number array and store as first number
    // stringNumA = arrayA.join(''); to convert to string
    // let numA = Number(stringNumA); to convert to a number

// Calculator will always have store two variables
// first number (or running total of sum)
// second number being added/divided/subtracted/multiplied against first number


//Unique buttons
//percentage number / 100 = percentage
// +/- = multiply by -1 to toggle
// del -> remove the final string