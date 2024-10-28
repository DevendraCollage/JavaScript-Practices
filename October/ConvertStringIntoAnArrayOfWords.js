// Write a JavaScript program to convert a given string into an array of words.

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

var strArr = str.split(/[^a-zA-Z-]+/).filter(Boolean);

console.log(strArr);
