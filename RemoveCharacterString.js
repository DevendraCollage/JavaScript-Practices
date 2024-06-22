// Remove a character at the specified position of a given string and return the new string

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

// Function to remove specified character from the given string
function removeChar(str, pos) {
  var newString = str.substring(0, pos) + str.substring(pos + 1);
  return newString;
}

// Read the string from the user
console.log("Enter the string here : ");
var str = prompt();
console.log("Enter the character positive to remove : ");
var pos = prompt();
pos = Number.parseInt(pos);

// Function to call
console.log(removeChar(str, pos));
