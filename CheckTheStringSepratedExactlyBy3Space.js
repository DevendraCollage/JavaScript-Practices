// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

const prompt = require("prompt-sync")();

const testString = (str) => {
  return /a...b/.test(str) || /b...a/.test(str);
};

console.log("Enter the string here : ");
var str = prompt();

if (testString(str) == true) {
  console.log(true);
} else {
  console.log(false);
}
