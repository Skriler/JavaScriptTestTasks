function isNumber(value) {
   return typeof value === 'number' && isFinite(value);
}

const firstNumberElement = document.getElementById("first-number");
const secondNumberElement = document.getElementById("second-number");
const sumElement = document.getElementById("sum");
const differenceElement = document.getElementById("difference");
const productElement = document.getElementById("product");
const divisionElement = document.getElementById("division");

const firstNumber = parseFloat(prompt("Enter first number", 0));
const secondNumber = parseFloat(prompt("Enter second number", 0));

if (isNumber(firstNumber) && isNumber(secondNumber)) {
    firstNumberElement.innerHTML += firstNumber;
    secondNumberElement.innerHTML += secondNumber;

    sumElement.innerHTML += firstNumber + secondNumber;
    differenceElement.innerHTML += firstNumber - secondNumber;
    productElement.innerHTML += firstNumber * secondNumber;

    if (secondNumber != 0) {
        divisionElement.innerHTML += firstNumber / secondNumber;
    } else {
        divisionElement.innerHTML = "Attempt to divide by zero"
    }
} else {
    alert("Input Error!")
}

