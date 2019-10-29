function addition(a, b) {
    'use strict';
    return (a + b);
}
console.log(addition(10, 4));

function subtraction(a, b) {
    'use strict';
    return (a - b);
}
console.log(subtraction(10, 4));

function division(a, b) {
    'use strict';
    return (a / b);
}
console.log(division(42, 3));

function multiplication(a, b) {
    'use strict';
    return (a * b);
}
console.log(multiplication(4, 7));

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition (arg1, arg2);
        case "-":
            return subtraction (arg1, arg2);
        case "/":
            return division (arg1, arg2);
        case "*": 
            return multiplication (arg1, arg2);
        default:
            throw new Error ("Unknown operation: " + operation);
    }
}

console.log(mathOperation(42, 3, "+"));
console.log(mathOperation(42, 3, "-"));
console.log(mathOperation(42, 3, "/"));
console.log(mathOperation(42, 3, "*"));
console.log(mathOperation(42, 3, "|"));