// Write a JavaScript program to change the capitalization of all letters in a given string.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();
console.log("\n");

var arrStr = str.split("");

for (let i = 0; i < arrStr.length; i++) {
  if (arrStr[i] === arrStr[i].toLocaleLowerCase()) {
    arrStr[i] = arrStr[i].toUpperCase();
  } else {
    arrStr[i] = arrStr[i].toLowerCase();
  }
}

console.log(arrStr.join(""));
