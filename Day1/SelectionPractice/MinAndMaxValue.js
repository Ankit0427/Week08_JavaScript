let num1 = Math.floor(Math.random() * 900) + 100;
let num2 = Math.floor(Math.random() * 900) + 100;
let num3 = Math.floor(Math.random() * 900) + 100;
let num4 = Math.floor(Math.random() * 900) + 100;
let num5 = Math.floor(Math.random() * 900) + 100;

let numbers = [num1, num2, num3, num4, num5];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

console.log("Minimum value:", minValue);
console.log("Maximum value:", maxValue);
