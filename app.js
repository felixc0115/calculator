
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
    button.addEventListener('click', function (e) {
        display.innerText += button.innerText;
    })
};

document.addEventListener('keydown', function (e) {
    console.log(e.code);
    let keyCodeString = e.code;
    if(e.code === 'Backspace') {
        let numArray = display.innerText.split('');
        numArray.pop();
        display.innerText = +(numArray.join(''));
    }
    else if (e.code === 'Period') {
        display.innerText += decimalButton.innerText;
    }
    else {
        display.innerText += +keyCodeString[keyCodeString.length - 1];
    }66.
});

const addButton = document.querySelector('.add-button');
const subtractButton = document.querySelector('.subtract-button');
const multiplyButton = document.querySelector('.multiply-button');
const divideButton = document.querySelector('.divide-button');
const equalButton = document.querySelector('.equal-button');
const clearButton = document.querySelector('.clear-button');
const decimalButton = document.querySelector('.decimal-button');
let currentTotal;
let secondNumber;
let selectedOperator;

decimalButton.addEventListener('click', function (e) {
    if (display.innerText % 1 === 0) {
        display.innerText += decimalButton.innerText;
    }
});

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
        showEqualDisplay();
    }
    if (selectedOperator === '-') {
        currentTotal = subtract(currentTotal, secondNumber);
        showEqualDisplay();
    }
    if (selectedOperator === '*') {
        currentTotal = multiply(currentTotal, secondNumber)
        showEqualDisplay();

    }
    if (selectedOperator === '/') {
        currentTotal = divide(currentTotal, secondNumber);
        if (secondNumber === 0) {
            display.innerText = 'NICE TRY!!'
        }
        else {
            showEqualDisplay();
        }
    }
});

clearButton.addEventListener('click', function (e) {
    display.innerText = "";
    firstNumber = 0;
    secondNumber = 0;
});

function showEqualDisplay() {
    if (currentTotal % 1 === 0) {
        display.innerText = currentTotal;
    }
    else {
        display.innerText = Number.parseFloat(currentTotal).toFixed(2);
    }
    selectedOperator = '';
}