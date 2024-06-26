// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

const prompt = require("prompt-sync")();

// Read the string from the user
console.log("Enter the string here : ");
var str = prompt();
var demo = str;

if (str.substring(4, 4 + str.length) === "Script" || "script") {
  console.log(str.substring(0, 4) + str.substring(4 + str.length));
} else {
  console.log(demo);
}
