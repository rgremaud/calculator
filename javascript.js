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
    firstNumber = "noNumber";
    secondNumber = "noNumber";
    //sum = 0;
    //answer = 0;
});



const equals = document.querySelector("#equals");

equals.addEventListener("click", () => {
        secondNumber = currentValue;
        console.log("secondNumber is " + secondNumber);
        console.log("firstNumber is " + firstNumber);
        console.log("mathFunction is " + mathFunction);
        operate(firstNumber, secondNumber, mathFunction);
        answer = Number(sum.toFixed(7));
        console.log("answer is " + answer);
        displayElement.textContent = answer;
        firstNumber = answer;
        secondNumber = "noNumber";
});


function deleteNumber() {
   delNumberString = displayElement.textContent;
   newNumber = delNumberString.slice(0,-1);
   newDisplay = Number(newNumber);
   currentValue = newDisplay;
   displayElement.textContent = newDisplay;
   if(secondNumber === "noNumber") {
    firstNumber = newDisplay;
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
    }
}

const percentage = document.querySelector('#percentage');

percentage.addEventListener("click", percentCalc);

function positiveNegative() { 
    currentValue = Number(displayElement.textContent);
    newNumber = currentValue*-1;
    displayElement.textContent = newNumber;
    currentValue = newNumber;
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
        mathFunction = operators.id;
        storageCheck();
    });
});

function storageCheck() {
    if (firstNumber === "noNumber") {
        clearDisplay = 1;
        firstNumber = currentValue;
    } else if (firstNumber === "number"  && secondNumber === "number") {
        operate(firstNumber,secondNumber,mathFunction)
        answer = sum;
        console.log("noNumber check answer is" + answer);
        displayElement.textContent = answer;
        firstNumber = answer;
        secondNumber = "noNumber";
    } else {
        console.log("This is firing");
        clearDisplay = 1;
        secondNumber = currentValue;
    }
}

// Known issues:
// chaining multiple operatores is not trigerring the correct section
// Swapping to percentage is not updating correctly.

// Big final step:
// Add logic for multiple calculations w/out selecting equals
// Enter firstNumber = 10
// Select addition
// Enter secondNumber = 5
// select subtraction -> Check if firstNumber and secondNumber are numbers - set a void flag for both
// if both are non-void then call operate(firstNumber, secondNumber, mathFunction)
// set firstNumber = sum
// set secondNumber = void
// populate input to secondNumber

