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

// add click event listener for each number that returns the actual number in console
//const seven = document.querySelector("#seven")
//seven.addEventListener("click", function(event) {
   // const value = event.target.dataset.value;
    //console.log("You clicked the number " + value);
//});

const numbers = document.querySelectorAll(".numbers");

numbers.forEach((button) => {
    button.addEventListener("click",function(event) {
        const value = event.target.dataset.value;
        console.log("You clicked the number " + value);
    });
});