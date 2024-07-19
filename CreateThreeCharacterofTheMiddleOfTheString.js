// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

var len = str.length;

if (len % 2 !== 0) {
  mid = (len + 1) / 2;
  console.log(str.substring(mid - 2, mid + 1));
} else {
  console.log(str);
}
