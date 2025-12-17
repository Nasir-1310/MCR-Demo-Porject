let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    const operators = ['+', '-', '*', '/', '.'];

    // Prevent consecutive operators
    if (operators.includes(value) && operators.includes(currentInput.slice(-1))) {
        return;
    }

    // Prevent starting with operator except minus
    if (operators.includes(value) && currentInput === '' && value !== '-') {
        return;
    }

    currentInput += value;
    display.value = currentInput;
}


function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    try {
        // Replace × with * for evaluation
        let expression = currentInput.replace(/×/g, '*');
        let result = eval(expression);
        // Round to avoid long decimals
        result = Math.round(result * 1000000) / 1000000;
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}