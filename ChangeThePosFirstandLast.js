// Create a new string from a given string changing the position of first and last characters

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

// Read the string from the user
console.log("Enter the string here below : ");
var str = prompt();

// Get the first and last character of the given string
var first = str.charAt(0);
var last = str.charAt(str.length - 1);

// Remove the first and last character of the given string
var middle = str.substring(1, str.length - 1);

// Now replace the string
var newStr = last + middle + first;

console.log(newStr);
