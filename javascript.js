// initial values

let firstNumber = 0;
let secondNumber = 0;
let displayNumber = 0;
let displayElement = 0;
let buttonValue = 0;
let storedValue = 0;


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

function operate(storedValue,secondNumber,mathFunction) {
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

function concatNumbers() {
    displayElement = document.getElementById("displayScreen");
    displayNumber = displayElement.textContent;
    buttonValue = this.textContent;
    if (displayNumber === "0") {
      displayElement.textContent = buttonValue;
    } else if (displayNumber.length < 9) { 
      displayElement.textContent = displayNumber + buttonValue;
      storedValue = Number(displayNumber + buttonValue);
    } else {
}}
  
const numberButtons = document.querySelectorAll(".numbers");

numberButtons.forEach(button => {
    button.addEventListener("click", concatNumbers);
});

const clear = document.querySelector("#clear")

clear.addEventListener("click", () => {
    displayElement.textContent = 0;
});

// add click event for each class operator (+, -, *, /)

const operators = document.querySelectorAll(".operators");

operators.forEach((operators) => { 
    operators.addEventListener("click", () => {
        alert(operators.id);
    });
});

// click should take current display amount (displayNumber.textContent), convert to number and store the value
// storedValue = Number(displayNumber.textContent)
// click should assign mathFunction to respective operator, add subtract multiple divide
// Clear the display so first number selected after operator is chosen becomes the new displayNumber
// Hitting equals sign will store the second number in secondNumber and call operator
// ex operate(storedValue,secondNumber,mathFunction)


// Delete option - doesn't work

function deleteNumber(string) {
    let newString = 0;
    if (string.length === 1) {
        newString = "0"
        string = newString;
        return string;
   } else if (string.length > 1) {
        newString = string.slice(0,-1);
        string = newString;
        return string;
    } else {
    }
}

//const delNumber = document.querySelector('#delNumber')

//delNumber.addEventListener("click", deleteNumber(displayElement.textContent));
