
// Array to store calculation history
let history = [];

// Function to get the two numbers
function getNumbers() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    if (num1.trim() === "" || num2.trim() === "") {
        alert("Please enter both numbers.");
        return null;
    }

    return [Number(num1), Number(num2)];
}

// Function to add a calculation to history
function addToHistory(num1, operator, num2, result) {
    const calculation = {
        operands: [num1, num2],
        operator: operator,
        result: result
    };

    history.push(calculation);
}

// Function to display the result
function displayResult(result) {
    document.getElementById("result").textContent =
        "Result: " + result;
}

// Addition
function add() {
    const numbers = getNumbers();
    if (numbers === null) return;

    const [num1, num2] = numbers;
    const result = num1 + num2;

    addToHistory(num1, "+", num2, result);
    displayResult(result);
}

// Subtraction
function subtract() {
    const numbers = getNumbers();
    if (numbers === null) return;

    const [num1, num2] = numbers;
    const result = num1 - num2;

    addToHistory(num1, "-", num2, result);
    displayResult(result);
}

// Multiplication
function multiply() {
    const numbers = getNumbers();
    if (numbers === null) return;

    const [num1, num2] = numbers;
    const result = num1 * num2;

    addToHistory(num1, "*", num2, result);
    displayResult(result);
}

// Division
function divide() {
    const numbers = getNumbers();
    if (numbers === null) return;

    const [num1, num2] = numbers;

    if (num2 === 0) {
        alert("Cannot divide by zero.");
        return;
    }

    const result = num1 / num2;

    addToHistory(num1, "/", num2, result);
    displayResult(result);
}

// Function to display calculation history
function displayHistory() {
    const historyList = document.getElementById("history");

    historyList.innerHTML = "";

    if (history.length === 0) {
        const item = document.createElement("li");
        item.textContent = "You have no stored calculations.";
        historyList.appendChild(item);
        return;
    }

    history.forEach(function(calculation) {
        const item = document.createElement("li");
        const [num1, num2] = calculation.operands;

        item.textContent =
            `${num1} ${calculation.operator} ${num2} = ${calculation.result}`;

        historyList.appendChild(item);
    });
}
