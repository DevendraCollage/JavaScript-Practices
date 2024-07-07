// Write a JavaScript program to count the number of vowels in a given string.

const prompt = require("prompt-sync")();

console.log("Enter the string here : ");
var str = prompt();

vowelCount = 0;

for (let i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u"
  ) {
    vowelCount++;
  }
}

console.log(`The Vowels Count In The String is : ${vowelCount}`);
