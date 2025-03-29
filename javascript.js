let firstNumber = "void";
let secondNumber = 0;
let displayNumber = 0;
//let displayElement = 0;
let buttonValue = 0;
let currentValue = 0;
let mathFunction = "";
let answer = 0;
let clearDisplay = -1;
let sum = 0

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
        console.log("Adding " + firstNumber + " + "  + secondNumber +" = " +sum);
    } else if (mathFunction === "subtract") {
        subtract(firstNumber,secondNumber);
        console.log("Subtracing " + firstNumber + " - "  + secondNumber +" = " +sum);
    } else if (mathFunction === "multiply") {
        multiply(firstNumber,secondNumber);
        console.log("Multiplying " + firstNumber + " * "  + secondNumber +" = " +sum);
    } else if (mathFunction === "divide") {
        divide(firstNumber,secondNumber);
        console.log("Dividing " + firstNumber + " / "  + secondNumber +" = " +sum);
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
      currentValue = Number(displayNumber + buttonValue);
    } else if (clearDisplay === 1 && displayNumber.length < 9) {
        displayNumber = ""
        currentValue = 0;
        clearDisplay = -1;
        console.log("Clear display set to " + clearDisplay);
        displayElement.textContent = displayNumber + buttonValue;
        currentValue = Number(displayNumber + buttonValue);
    } else if (displayNumber.length < 9) { 
    displayElement.textContent = displayNumber + buttonValue;
    currentValue = Number(displayNumber + buttonValue);
    } else {
    }
}
  
const numberButtons = document.querySelectorAll(".numbers");

numberButtons.forEach(button => {
    button.addEventListener("click", concatNumbers);
});

function clearDisplayFunction() {
    if (clearDisplay === 1) {
        clearDisplay = -1;
        console.log("Clear display toggled to " + clearDisplay)
    } else { ""
   }
}

const clear = document.querySelector("#clear")

clear.addEventListener("click", () => {
    displayElement.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    sum = 0;
    answer = 0;
});

const operators = document.querySelectorAll(".operators");

operators.forEach((operators) => { 
    operators.addEventListener("click", () => {
        mathFunction = operators.id;
        storageCheck();
        //clearDisplay = 1;
        //console.log("Clear Display set to " + clearDisplay)
        //firstNumber = currentValue;
        //mathFunction = operators.id; 
    });
});

const equals = document.querySelector("#equals");

equals.addEventListener("click", () => {
        secondNumber = currentValue;
        console.log("secondNumber is " + secondNumber);
        console.log("firstNumber is " + firstNumber);
        console.log("mathFunction is " + mathFunction);
        operate(firstNumber, secondNumber, mathFunction);
        answer = sum;
        console.log("answer is " + answer);
        displayElement.textContent = answer;
        firstNumber = answer;
        secondNumber = "recycle";
});


function deleteNumber() {
   delNumberString = currentValue.toString();
   newNumber = delNumberString.slice(0,-1);
   newDisplay = Number(newNumber);
   currentValue = newDisplay;
   displayElement.textContent = newDisplay;
}

const delNumber = document.querySelector('#delNumber');

delNumber.addEventListener("click", deleteNumber);

function percentCalc() {
    newNumber = currentValue/100;
    displayElement.textContent = newNumber;
}

const percentage = document.querySelector('#percentage');

percentage.addEventListener("click", percentCalc);

function positiveNegative() { 
    newNumber = currentValue*-1;
    displayElement.textContent = newNumber;
    currentValue = newNumber;
}

const posNeg = document.querySelector('#posNeg');

posNeg.addEventListener("click",positiveNegative);


function storageCheck() {
    if (firstNumber === "void") {
        clearDisplay = 1;
        console.log("Clear Display set to " + clearDisplay)
        firstNumber = currentValue;
    } else {
        clearDisplay = 1;
        secondNumber = currentValue;
    }
}