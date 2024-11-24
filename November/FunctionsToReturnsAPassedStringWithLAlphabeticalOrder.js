// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

// Note: Assume punctuation and numbers symbols are not included in the passed string.

const isAlpha = (str) => {
  return str.split("").sort().join("");
};

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

console.log(isAlpha(str));
