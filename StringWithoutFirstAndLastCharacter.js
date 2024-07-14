// Write a JavaScript program to create a new string without the first and last characters of a given string.

const prompt = require("prompt-sync")();

console.log("Enter the String Here : ");
var userStr = prompt();

var formattedStr = userStr.substring(1, userStr.length - 1);

console.log(formattedStr);
