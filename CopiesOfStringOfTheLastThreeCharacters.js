// Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given string. The string length must be 3 and above.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();
console.log("Enter how many times you repeat : ");
var count = Number.parseInt(prompt());

var lastThree = str.slice(str.length - 3);

console.log(lastThree.repeat(count));
