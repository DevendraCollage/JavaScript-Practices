//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

//! Read the number from the user
console.log("Enter the number here : ");
var num = prompt();
var diff;

//* Check the condition according to the number
if (num > 13) {
  // If given number greater than 13 then less from the given number by the user
  diff = (num - 13) * 2; // This double the difference
} else {
  diff = 13 - num; // If number less than less from the 12
}

//? Print the difference
console.log(diff);
