// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

// Read the string from the user
console.log("Enter the number here : ");
var num = prompt();
num = Number.parseInt(num);

// Check the given number is multiple 3 or 7
if (num % 3 == 0 || num % 7 == 0) {
  console.log(true);
} else {
  console.log(false);
}
