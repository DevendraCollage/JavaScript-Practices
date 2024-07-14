// Write a JavaScript program to extract the first half of a even string.

const prompt = require("prompt-sync")();

console.log("Enter the String here : ");
var userStr = prompt();

var newStr = "";

var len = userStr.length / 2;
var splitStr = userStr.split("");

for (let i = 0; i < len; i++) {
  newStr = newStr + splitStr[i];
}

console.log(newStr);
