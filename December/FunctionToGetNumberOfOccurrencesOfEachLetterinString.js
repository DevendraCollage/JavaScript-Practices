// Write a JavaScript function to get the number of occurrences of each letter in a specified string.

const getLetterCount = (str) => {
  const obj = {};
  for (const ch of str) {
    obj[ch] = (obj[ch] || 0) + 1;
  }
  return obj;
};

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

console.log(getLetterCount(str));
