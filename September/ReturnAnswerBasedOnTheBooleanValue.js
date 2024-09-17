// Write a JavaScript program that returns true if the string is y/yes or false if the string is n/no.

const prompt = require("prompt-sync")();

var str = prompt("Enter the Yes/y or No/n : ");

if (str.toLowerCase() == "y" || str.toLowerCase() == "yes") {
  console.log(true);
} else if (str.toLowerCase() == "n" || str.toLowerCase() == "no") {
  console.log(false);
} else {
  console.log("Please Enter the Right Input!");
}
