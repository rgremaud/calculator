// initial values

let sum = 0;
let a = 0;
let arrayA = [];
let arrayB = [];

// functions

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
    sum === 0;
}

function operate(a,b,mathFunction) {
    if (mathFunction === "add") {
        add(a,b);
        console.log("Addition is " + sum);
    } else if (mathFunction === "subtract") {
        subtract(a,b);
        console.log("Subtraction is "+ sum);
    } else if (mathFunction === "multiply") {
        multiply(a,b);
        console.log("Mutliplication is " + sum);
    } else if (mathFunction === "divide") {
        divide(a,b);
        console.log("Division is " + sum);
    } else if (mathFunction === "clearTotal") {
        clearTotal()
    } else {
        console.log("Invalid Input - Try again dummy.");
    }
 }


const clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
    alert("ouch!");
});

 // convert current number array and store as number
  
function arrayToNumber(array) {
    let string = arrayA.join('');
    let number = Number(string);
    return number
}


const numbers = document.querySelectorAll(".numbers");

numbers.forEach((button) => {
    button.addEventListener("click",function(event) {
        const value = event.target.dataset.value;
        arrayA.push(value);

        console.log("Array is " + arrayA);
    });
});

// Enter first number 
// 1) steps to store your number
    // arrayA = []
    // arrayA.push(value) adds the value to the end of the array
// 2) select your operator (+, -, /, *)
    // convert current number array and store as first number
    // stringNumA = arrayA.join(''); to convert to string
    // let numA = Number(stringNumA); to convert to a number

