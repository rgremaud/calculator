let sum = 0;
let a = 0;
let arrayA = [];
let arrayB = [];

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

// Goal is to add click modifiers to all of the buttons
// <div class="buttons modifiers" id="clear">C</div>

const clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
    alert("ouch!");
});




const numbers = document.querySelectorAll(".numbers");

numbers.forEach((button) => {
    button.addEventListener("click",function(event) {
        const value = event.target.dataset.value;
        arrayA.push(value);
        
        console.log("Array is " + arrayA);
    });
});

//need to update so clicking a button updates a to concat the numbers
// do this as an array?  
// arrayA = []
// arrayA.push(value) adds the value to the end of the array
// a = arrayA.join(''); to convert to string
// let num = Number(str); to convert to a number