// Write a JavaScript program to remove all characters from a given string that appear more than once.

const prompt = require("prompt-sync")();

console.log("Enter the String Here : ");
var str = prompt();

var charArr = str.split("");
var distinctArr = [];

for (let i = 0; i < charArr.length; i++) {
  if (str.indexOf(charArr[i]) === str.lastIndexOf(charArr[i])) {
    distinctArr.push(charArr[i]);
  }
}

console.log(distinctArr.join(""));
