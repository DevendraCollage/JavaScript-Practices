//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

// Read the two numbers from the user
console.log("Enter the number-1 here : ");
var num1 = prompt();
num1 = Number.parseInt(num1);
console.log("Enter the number-2 here : ");
var num2 = prompt();
num2 = Number.parseInt(num2);

// Calculate te sum of the given two numbers
var sum = 0;
if (num1 == num2) {
  sum = (num1 + num2) * 3;
} else {
  sum = num1 + num2;
}

//* Print the sum of the given numbers
console.log(sum);
