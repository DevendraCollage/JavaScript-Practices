/*
 ?➡️ : Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  
*/

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

// Read the number from the user
console.log("Enter the number here : ");
var num = prompt();

// Function to check the condition
var checkNum = (num) => {
  return Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20;
  //? ⬆️ Explanation of the above give line
  //* ✅ If given number minus from 100 and then number is less than 20 then return true
  //* ✅ If given number minus from 400 and then number is less than 20 then return true
  //* ✅ Otherwise return false
};

// Call the function and pass the number
console.log(checkNum(num));
