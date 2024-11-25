// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

const convertUpper = (str) => {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
};

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

console.log(convertUpper(str));
