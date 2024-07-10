//  Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();
console.log("Enter how many copies to generate : ");
var copies = Number.parseInt(prompt());

console.log(str.repeat(copies));
