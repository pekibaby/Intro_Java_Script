const num1 = parseFloat(prompt("first num"));
const num2 = parseFloat(prompt("second num"));

const operator = prompt("operator(+, - , *, /)");
let result;

if (operator == "+") {
  result = num1 + num2; 
}
else if (operator == "-") {
  result = num1 - num2;
}
else if (operator == "*") {
  result = num1 * num2;
}
else if (operator == "/") {
  result = num1 / num2;
}
console.log(`${num1} ${operator} ${num2} = ${result}`);
