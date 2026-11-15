const display = document.getElementById('display');

function appendNumber(number) {
    if (display.value === '0' && number !== '.') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if (display.value === '' || ['+', '-', '*', '/'].includes(lastChar)) return;
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value === '') return;
        // eval safety check (sirf basic math characters allow hain)
        const result = eval(display.value.replace(/&times;/g, '*').replace(/&divide;/g, '/'));
        display.value = Number(result.toFixed(4)); // 4 decimal tak limit
    } catch (error) {
        display.value = 'Error';
    }
}
