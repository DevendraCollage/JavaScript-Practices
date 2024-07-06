// Write a JavaScript program to convert letters of a given string alphabetically.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

var alpha = str.split("").sort().join("");

console.log(alpha);
