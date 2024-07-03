let display = document.getElementById('display');
let displayValue = '';

function clearDisplay() {
    displayValue = '';
    display.innerText = '0';
}

function appendCharacter(char) {
    if (displayValue === '0') {
        displayValue = char;
    } else {
        displayValue += char;
    }
    display.innerText = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        display.innerText = displayValue;
    } catch (error) {
        display.innerText = 'Error';
    }
}
