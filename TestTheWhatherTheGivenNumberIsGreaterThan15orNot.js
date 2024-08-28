// Write a JavaScript program to test whether a given integer is greater than 15 and return the given number, otherwise return 15.

const prompt = require("prompt-sync")();

console.log("Enter the number here : ");
var num = parseInt(prompt());

if (num >= 15) {
  console.log(num);
} else {
  console.log(15);
}
