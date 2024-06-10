//! Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

//? Read the number from the user
console.log("Enter the number here to guess (between 1 to 10) : ");
let userNum = prompt();

// Check the condition if number between 1 to 10 or not
if (userNum > 10) {
  console.log("Retry!!");
}

// Now the randomly guess the number
let randomNum = Math.floor(Math.random() * 10);

// Check the Condition every time match or not
if (userNum == randomNum) {
  console.log("Good Work!");
} else {
  console.log("Not Matched!");
}
