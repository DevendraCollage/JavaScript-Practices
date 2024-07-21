// Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();
console.log("Enter the Character You want to get : ");
var ch = Number.parseInt(prompt());

if (str.length >= ch) {
  var firstNew = str.substring(0, ch);
  var lastNew = str.substring(str.length, str.length - 2);
  var concatFirstAndLast = firstNew.concat(lastNew);
  console.log(concatFirstAndLast);
} else {
  console.log("Please Enter Long String!");
}
