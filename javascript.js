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

function concatNumbers() {
    displayElement = document.getElementById("displayScreen");
    displayNumber = displayElement.textContent;
    buttonValue = this.textContent;
  //build a max length of 9 for displayNumber + buttonValue
    if (displayNumber === "0") {
      displayElement.textContent = buttonValue;
    } else if (displayNumber.length < 9) { 
      displayElement.textContent = displayNumber + buttonValue;
      storedValue = Number(displayNumber + buttonValue);
    } else if (displayNumber.length >= 9) {
        
    } else {
        
    }    
    }
  
    const numberButtons = document.querySelectorAll(".numbers");
  numberButtons.forEach(button => {
    button.addEventListener("click", concatNumbers);
  });

const clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
    displayElement.textContent = 0;
});

const deleteNumber = document.querySelector('#deleteNumber')
deleteNumber.addEventListener("click", () => {
    displayElement.textContent = displayNumber - buttonValue;
    //displayElement.slice(0,-1);
});