// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet. Convert vowels to uppercase.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

var result = str.split("");

for (let i = 0; i < result.length; i++) {
  switch (result[i]) {
    case " ":
      break;
    case "z":
      result[i] = "a";
      break;
    case "Z":
      result[i] = "Z";
      break;
    default:
      result[i] = String.fromCharCode(1 + result[i].charCodeAt(0));
  }
}
console.log(result.join(""));
