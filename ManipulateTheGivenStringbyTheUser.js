// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

if (str.length < 3) {
  console.log(str.toUpperCase());
} else {
  console.log(str.slice(0, 3).toLowerCase().concat(str.slice(3, str.length)));
}
