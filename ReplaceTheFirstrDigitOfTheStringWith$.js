// Write a JavaScript program to replace the first digit in a string (should have at least one digit) with the $ character.

const prompt = require("prompt-sync")();

console.log("Enter The String Here : ");
var str = prompt();

var newStr = str.replace(/[0-9]/, "$");

console.log(newStr);
