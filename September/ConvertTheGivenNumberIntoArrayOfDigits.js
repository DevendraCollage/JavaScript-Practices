// Write a JavaScript program to convert a specified number into an array of digits.

const prompt = require("prompt-sync")();

var n = parseInt(prompt("Enter the number here : "));

var numArr = Array.from(String(n), Number);

console.log(numArr);
