let firstNumber = "noNumber";
let secondNumber = "noNumber";
let displayNumber = 0;
//let displayElement = 0;
let buttonValue = 0;
let currentValue = 0;
let mathFunction = "";
let answer = 0;
let clearDisplay = -1;
let sum = 0
let displayValue = 0;

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
    } else if (mathFunction === "subtract") {
        subtract(firstNumber,secondNumber);
    } else if (mathFunction === "multiply") {
        multiply(firstNumber,secondNumber);
    } else if (mathFunction === "divide") {
        divide(firstNumber,secondNumber);
    } else if (mathFunction === "clearTotal") {
        clearTotal()
    } else {
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
    } else { ""
   }
}

const clear = document.querySelector("#clear")

clear.addEventListener("click", () => {
    displayElement.textContent = 0;
    firstNumber = "noNumber";
    secondNumber = "noNumber";
    //sum = 0;
    //answer = 0;
});



const equals = document.querySelector("#equals");

equals.addEventListener("click", () => {
        if( firstNumber === "noNumber" && secondNumber === "noNumber") {
            console.log("No numbers set");
            firstNumber = currentValue;
            displayElement.textContent = firstNumber;
        } else {
        secondNumber = currentValue;
        operate(firstNumber, secondNumber, mathFunction);
        answer = Number(sum.toFixed(7));
        console.log("Answer after equals is " + answer);
        displayElement.textContent = answer;
        firstNumber = answer;
        secondNumber = "noNumber";
        mathFunction = "";}
});


function deleteNumber() {
   delNumberString = displayElement.textContent;
   newNumber = delNumberString.slice(0,-1);
   newDisplay = Number(newNumber);
   currentValue = newDisplay;
   displayElement.textContent = newDisplay;
   if(secondNumber === "noNumber") {
    firstNumber = newDisplay;
    answer = firstNumber;
    sum = firstNumber;
   }
}

const delNumber = document.querySelector('#delNumber');

delNumber.addEventListener("click", deleteNumber);

function percentCalc() {
    currentValue = Number(displayElement.textContent);
    newNumber = currentValue/100;
    displayElement.textContent = newNumber;
    currentValue = newNumber;
    if(secondNumber === "noNumber") {
        firstNumber = currentValue;
        answer = firstNumber;
        sum = firstNumber;
    }
}

const percentage = document.querySelector('#percentage');

percentage.addEventListener("click", percentCalc);

function positiveNegative() { 
    currentValue = Number(displayElement.textContent);
    newNumber = currentValue*-1;
    displayElement.textContent = newNumber;
    currentValue = newNumber;
    if(secondNumber === "noNumber") {
        firstNumber = currentValue;
        answer = firstNumber;
        sum = firstNumber;
    }
}

const posNeg = document.querySelector('#posNeg');

posNeg.addEventListener("click",positiveNegative);

const buttons = document.querySelectorAll(".buttons")

buttons.forEach((buttons) => { 
    buttons.addEventListener("mouseenter", () => {
        buttons.style.opacity = .7;
    })
    buttons.addEventListener("mouseleave", () => {
        buttons.style.opacity = 1;
    })
});

const operators = document.querySelectorAll(".operators");

operators.forEach((operators) => { 
    operators.addEventListener("click", () => {
        //if(firstNumber != "noNumber") {
            //secondNumber = currentValue;
        //}
        storageCheck();
        mathFunction = operators.id;
    });
});

function storageCheck() {
    if (firstNumber === "noNumber"  ) {
        console.log("First option is firing");
        clearDisplay = 1;
        firstNumber = currentValue;
    } else if (firstNumber !== "noNumber") {
        // Two numbers are assigned
        secondNumber = currentValue;
        operate(firstNumber,secondNumber,mathFunction)
        answer = sum;
        console.log("Second option is firing and answer is " + sum);
        displayElement.textContent = answer;
        firstNumber = answer;
        secondNumber = "noNumber";
        currentValue = firstNumber
        mathFunction = "";
        clearDisplay = 1;
    } else {
        console.log("Third option is firing");
        clearDisplay = 1;
        secondNumber = currentValue;
    }
}

// Known issues:
// Multi-step calculations work but seem to break the 'special' buttons
// Entering a number and hitting equals doesn't work

