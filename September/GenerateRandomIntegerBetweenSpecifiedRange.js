// Write a JavaScript program to generate a random integer in the specified range.

const prompt = require("prompt-sync")();

var start = parseInt(prompt("Enter Start Range : "));
var end = parseInt(prompt("Enter End Range : "));

var r = parseInt(Math.random() * (end - start) + start);

console.log(r);
