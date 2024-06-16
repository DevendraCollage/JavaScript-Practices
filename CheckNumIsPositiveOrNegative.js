/*
 ?➡️ : Write a JavaScript program to check two given integers whether one is positive and another one is negative. 
*/

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

// Read the numbers from the user
console.log("Enter the number 1 here : ");
var num1 = Number.parseInt(prompt());
console.log("Enter the number 2 here : ");
var num2 = Number.parseInt(prompt());

//! 👇 Check the given number
if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
  //? ⬆️ Explanation of the above conditional statement
  //* ✅ If first number is negative
  //* ✅ If second number is positive
  //? ➡️ Then return true otherwise false

  // And wise versa condition check
  console.log(true);
} else {
  console.log("First number is :", num1);
  console.log("Second number is :", num2);
}
