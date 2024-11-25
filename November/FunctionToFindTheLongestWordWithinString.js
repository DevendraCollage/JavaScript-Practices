// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Sample Data and output:
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

const longestWord = (str) => {
  const words = str.split(" ");
  var maxWord = words[0];

  for (let i = 0; i < words.length; i++) {
    if (maxWord > words[i]) {
      maxWord = words[i];
    }
  }

  return maxWord;
};

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

console.log(longestWord(str));
