 
const operator = prompt("Enter operator to perform the calculation ( either +, -, * or / ): ");
const Number1 = parseFloat(prompt("enter number 1:"));
const Number2 = parseFloat(prompt("Enter the second number:"));
if (operator === "+"){
    result = Number1 + Number2;
}
else if (operator === "-"){
    result = Number1 - Number2;
}

else if (operator === "*"){
    result = Number1 * Number2;
}
else if (operator === "/"){
    result = Number1 / Number2;
}
window.alert (" Result is" + result);