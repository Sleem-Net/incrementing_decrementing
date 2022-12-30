// Error rendering
const errorParagraph = document.getElementById("error");
function purchase() {
  console.log("You clicked me");
  errorParagraph.textContent = "Something went wrong, please try again";
}

// Calculator
let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

// add function
function add() {
  let result = num1 + num2;
  sumEl.textContent = "Sum: " + result;
}

// Subtraction function
function subtract() {
  let result = num1 - num2;
  sumEl.textContent = "Sum: " + result;
}

// Multiply function
function multiply() {
  let result = num1 * num2;
  sumEl.textContent = "Sum: " + result;
}

// divide function
function divide() {
  let result = num1 / num2;
  sumEl.textContent = "Sum: " + result;
}

// Increment and decremenent function
let myPoints = 3;
function add3Points() {
  myPoints += 3;
}

function remove1Point() {
  myPoints -= 1;
}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints);
