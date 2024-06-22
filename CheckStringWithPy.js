// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

// Read the string from the user
console.log("Enter the string here : ");
var str = prompt();

// Check the string start with Py then return original string otherwise concat Py at the starts
if (str.startsWith("Py") || str.startsWith("py")) {
  console.log(str);
} else {
  console.log("Py" + str);
}
