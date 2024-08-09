// Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

var firstLater = str[0];
var secondLater = str[1];
var thirdLater = str[2];

if (
  firstLater.toLowerCase &&
  secondLater.toUpperCase &&
  thirdLater.toLowerCase
) {
  console.log(true);
} else {
  console.log(false);
}
