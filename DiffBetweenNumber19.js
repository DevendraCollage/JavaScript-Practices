//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

//* Read the number from the user
console.log("Enter the number here : ");
var userNum = prompt();
userNum = Number.parseInt(userNum); // Convert the string to number

// This variable will store the difference of the two numbers
var diff = 0;

// Check the difference between userNum and 19
if (userNum > 19) {
  diff = (userNum - 19) * 3; // This condition check the number is greater than 19 then difference will be triple
} else {
  diff = 19 - userNum;
}

// Print the result of the difference between this two numbers
console.log(diff);
