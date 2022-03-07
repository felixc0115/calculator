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
        display.value += button.innerText;
    })
}

const addButton = document.querySelector('.add-button');
const subtractButton = document.querySelector('.subtract-button');
const multiplyButton = document.querySelector('.multiply-button');
const divideButton = document.querySelector('.divide-button');
const equalButton = document.querySelector('.equal-button');
const clearButton = document.querySelector('.clear-button');
let firstNumber;
let secondNumber;
let selectedOperator;

addButton.addEventListener('click', function (e) {
    firstNumber = +display.value;
    display.value = "";
    selectedOperator = addButton.innerText;
})

equalButton.addEventListener('click', function (e) {
    secondNumber = +display.value;
    if (selectedOperator === '+') {
        let result = add(firstNumber, secondNumber);
        display.value = result;
    }
})

clearButton.addEventListener('click', function (e) {
    display.value = "";
    firstNumber = 0;
    secondNumber = 0;
})