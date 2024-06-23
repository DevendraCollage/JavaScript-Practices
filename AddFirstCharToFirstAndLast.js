// Create a new string from a given string with the first character of the given string added at the front and back

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

// Read the string from the user
console.log("Enter the string here : ");
var str = prompt();

// Access the first character of the given string
var first = str.charAt(0);

// Now add this character to the first and last of the original string
var newStr = first + str + first;
console.log(newStr);
