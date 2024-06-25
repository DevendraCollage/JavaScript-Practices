// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

if (str.startsWith("Java") || str.startsWith("java")) {
  console.log(true);
} else {
  console.log(false);
}
