// Write a JavaScript program to decapitate the first letter of a string.

const prompt = require("prompt-sync")();

var str = prompt("Enter the String Here : ");

var firstChar = str[0];

if (firstChar === firstChar.toUpperCase()) {
  firstChar = firstChar.toLowerCase();
} else {
  firstChar = firstChar.toUpperCase();
}

str = str.substring(1);

console.log(firstChar.concat(str));
