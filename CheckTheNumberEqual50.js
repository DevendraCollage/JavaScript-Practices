//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

// Read the two numbers from the user
console.log("Enter the number 1 here : ");
var num1 = Number.parseInt(prompt());
console.log("Enter the number 2 here : ");
var num2 = Number.parseInt(prompt());

// Calculate te sum of the given two numbers
var sum = num1 + num2;

// Condition to check the number is equal to 50 or if sum is 50
if (sum == 50 || num1 == 50 || num2 == 50) {
  console.log(true);
} else {
  console.log(false);
}
