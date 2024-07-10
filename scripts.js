
const buttons = document.querySelectorAll('.button');

const screen = document.getElementById("screen");

// Initialize variables for calculator operation
let currentNumber = '0'; // Current number being input
let currentOperation = null; // Current operation (+, -, /)
let previousNumber = null; // Previous number before operation

// Function to update the screen with the current number
function updateScreen() {
    screen.textContent = currentNumber;
}

// Function to handle numeric button clicks
function handleNumberClick(value) {
    if (currentNumber === '0') {
        currentNumber = value;
    } else {
        currentNumber += value;
    }
    updateScreen();
}

// Function to handle operation button clicks
function handleOperationClick(value) {
    if (currentOperation !== null) {
        performOperation();
    }
    previousNumber = currentNumber;
    currentNumber = '0';
    currentOperation = value;
}

// Function to perform the operation based on currentOperation
function performOperation() {
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    let result = 0;
    
    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    
    currentNumber = result.toString();
    previousNumber = null;
    currentOperation = null;
    updateScreen();
}

// Function to handle equals button click
function handleEqualsClick() {
    if (currentOperation !== null) {
        performOperation();
    }
}

// Function to handle refresh button click
function handleeRefreshClick() {
    currentNumber = '0';
    currentOperation = null;
    previousNumber = null;
    updateScreen();
}

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (!isNaN(value) || value === '.') {
            handleNumberClick(value);
        } else if (value === '+' || value === '-' || value === '/') {
            handleOperationClick(value);
        } else if (value === '=') {
            handleEqualsClick();
        } else if (value === 'c') {
            handleeRefreshClick();
        }
    });
});
