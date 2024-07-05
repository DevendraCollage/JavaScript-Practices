// Write a JavaScript program to capitalize the first letter of each word in a given string.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

var strSplit = str.split(" ");

for (let i = 0; i < strSplit.length; i++) {
  strSplit[i] = strSplit[i][0].toUpperCase() + strSplit[i].substring(1);
}

console.log(strSplit.join(" "));
