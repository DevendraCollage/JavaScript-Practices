// Write a JavaScript program to concatenate two strings except for their first character.

const prompt = require("prompt-sync")();

console.log("Enter the first String : ");
var str1 = prompt();
console.log("Enter the second String : ");
var str2 = prompt();

var firstStr = str1.substring(1, str1.length);
var secondStr = str2.substring(1, str2.length);

var concatStr = firstStr.concat(secondStr);
console.log(concatStr);
