let currentInput = '0';
let calculation = '';
let result = 0;

const inputDisplay = document.getElementById('input');
const outputDisplay = document.getElementById('output');

function updateDisplay() {
    inputDisplay.textContent = calculation;
    outputDisplay.textContent = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== '0') {
        calculation += currentInput + ' ' + operator + ' ';
        currentInput = '0';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '0';
    calculation = '';
    updateDisplay();
}

function backspace() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    if (calculation !== '') {
        calculation += currentInput;
        try {
            result = eval(calculation);
            currentInput = result.toString();
            calculation = '';
            updateDisplay();
        } catch (error) {
            currentInput = 'Error';
            calculation = '';
            updateDisplay();
        }
    }
}