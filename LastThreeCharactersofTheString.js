// Create a new string from a given string taking the last 3 characters and added at both the front and back

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

// Read the string from the user
console.log("Enter the string here : ");
var str = prompt();

// Access the last three characters of the string
var lastThree = str.substring(str.length - 3, str.length);

// Concatenate these last three characters with original string
var newString = lastThree + str + lastThree;

// Print the new changed string
console.log(newString);
