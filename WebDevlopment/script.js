document.addEventListener("DOMContentLoaded", function() {
    let display = document.getElementById("display");
    let currentInput = "";
    let operator = "";
    let firstOperand = "";

    const numberButtons = document.querySelectorAll(".number");
    numberButtons.forEach(button => {
        button.addEventListener("click", function() {
            currentInput += button.textContent;
            display.textContent = currentInput;
        });
    });

    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (currentInput !== "") {
                if (firstOperand === "") {
                    firstOperand = currentInput;
                } else {
                    const result = calculate(parseFloat(firstOperand), parseFloat(currentInput), operator);
                    firstOperand = result;
                    display.textContent = result;
                }
            }
            currentInput = "";
            operator = button.textContent;
        });
    });

    document.getElementById("equals").addEventListener("click", function() {
        if (firstOperand !== "" && currentInput !== "") {
            const result = calculate(parseFloat(firstOperand), parseFloat(currentInput), operator);
            display.textContent = result;
            currentInput = "";
            firstOperand = "";
            operator = "";
        }
    });

    document.getElementById("clear").addEventListener("click", function() {
        currentInput = "";
        operator = "";
        firstOperand = "";
        display.textContent = "0";
    });

    document.getElementById("percentage").addEventListener("click", function() {
        if (currentInput !== "") {
            const result = parseFloat(currentInput) / 100;
            display.textContent = result;
            currentInput = result.toString();
        }
    });

    function calculate(num1, num2, op) {
        switch (op) {
            case "÷":
                if (num2 === 0) {
                    return "Error";
                }
                return num1 / num2;
            case "x":
                return num1 * num2;
            case "-":
                return num1 - num2;
            case "+":
                return num1 + num2;
            default:
                return num2;
        }
    }
});
