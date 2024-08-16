// Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.).

const prompt = require("prompt-sync")();

console.log("Enter the String Here : ");
var str = prompt();

var first = str[0];
var last = str[str.length - 1];

console.log(/[A-Z]/.test(first) && last == ".");
