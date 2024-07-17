// Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.

const prompt = require("prompt-sync")();

console.log("Enter the String Here : ");
var str = prompt();

if (str.length >= 3) {
  var lastStr = str.substring(str.length - 3);
  var firstStr = str.substring(-3, str.length - 3);

  console.log(lastStr + firstStr);
} else {
  console.log("Please Enter String Above 3 Characters!");
}
