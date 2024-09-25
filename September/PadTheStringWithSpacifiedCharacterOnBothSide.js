// Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.

const prompt = require("prompt-sync")();

const pad = (str, length, char = " ") => {
  return str.padStart((str.length + length) / 2, char).padEnd(length, char);
};

var userStr = prompt("Enter the String Here : ");
var userLen = parseInt(prompt("Enter the length of you to made the string : "));
var useChar = prompt("Enter the Character you to place on both side : ");

var ans = pad(userStr, userLen, useChar);

console.log(ans);
