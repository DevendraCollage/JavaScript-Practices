// Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

const prompt = require("prompt-sync")();

console.log("Enter The String Here : ");
var str = prompt();

var result = [];

for (let i = 0; i < str.length; i++) {
  var charOrder = str.charCodeAt(i) - "a".charCodeAt(0);
  var changeChar = 25 - charOrder + "a".charCodeAt(0);
  result.push(String.fromCharCode(changeChar));
}

console.log(result.join(""));
