// Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

var firstChar = str[0];
var lastChar = str[str.length - 1];

if (firstChar === lastChar) {
  var newStr = str.substring(1, str.length - 1);
  console.log(newStr);
} else {
  console.log(str);
}
