
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    return operator(x, y);
}

const numberButtons = document.querySelectorAll('.number-button');
const display = document.querySelector('#calc-display');

for (let button of numberButtons) {
    button.addEventListener('click', function () {
        display.innerText += button.innerText;
    })
}

const addButton = document.querySelector('.add-button');
const subtractButton = document.querySelector('.subtract-button');
const multiplyButton = document.querySelector('.multiply-button');
const divideButton = document.querySelector('.divide-button');
const equalButton = document.querySelector('.equal-button');
const clearButton = document.querySelector('.clear-button');
let currentTotal;
let secondNumber;
let selectedOperator;

addButton.addEventListener('click', function (e) {
    currentTotal = +display.innerText;
    display.innerText = "";
    selectedOperator = addButton.innerText;
});

subtractButton.addEventListener('click', function (e) {
    currentTotal = +display.innerText;
    display.innerText = "";
    selectedOperator = subtractButton.innerText;
});

multiplyButton.addEventListener('click', function (e) {
    currentTotal = display.innerText;
    display.innerText = "";
    selectedOperator = multiplyButton.innerText;
});

divideButton.addEventListener('click', function (e) {
    currentTotal = display.innerText;
    display.innerText = "";
    selectedOperator = divideButton.innerText;
});

equalButton.addEventListener('click', function (e) {
    secondNumber = +display.innerText;
    if (selectedOperator === '+') {
        currentTotal = add(currentTotal, secondNumber);
        display.innerText = currentTotal;
        selectedOperator = '';
    }
    if (selectedOperator === '-') {
        currentTotal = subtract(currentTotal, secondNumber);
        display.innerText = currentTotal;
        selectedOperator = '';
    }
    if (selectedOperator === '*') {
        currentTotal = multiply(currentTotal, secondNumber)
        display.innerText = currentTotal;
        selectedOperator = '';
    }
    if (selectedOperator === '/') {
        currentTotal = divide(currentTotal, secondNumber);
        display.innerText = currentTotal;
        selectedOperator = '';
    }
});

clearButton.addEventListener('click', function (e) {
    display.innerText = "";
    firstNumber = 0;
    secondNumber = 0;
});