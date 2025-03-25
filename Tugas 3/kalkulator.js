const add = (...args) => args.reduce((a, b) => a + b, 0);
const subtract = (a, b) => a - b;
const multiply = (...args) => args.reduce((a, b) => a * b, 1);
const divide = (a, b) => a / b;
const modulus = (a, b) => a % b;

const calculator = (operator, ...args) => {
    switch (operator) {
        case '+':
            return add(...args);
        case '-':
            return subtract(...args);
        case '*':
            return multiply(...args);
        case '/':
            return divide(...args);
        case '%':
            return modulus(...args);
        default:
            return 'Operator tidak valid';
    }
};

console.log(calculator('+', 1, 2, 3)); // Output: 6
console.log(calculator('-', 10, 4)); // Output: 6
console.log(calculator('*', 2, 3, 4)); // Output: 24
console.log(calculator('/', 10, 2)); // Output: 5
console.log(calculator('%', 10, 3)); // Output: 1