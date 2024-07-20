// Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.

const prompt = require("prompt-sync")();

console.log("Enter the String Here : ");
var str = prompt();

if (str.length >= 6) {
  var newStr = str.endsWith("Script");
  console.log(newStr);
} else {
  console.log("Length Must Be Less Than 6!");
  console.log("Not Ends with Script!");
}
