// Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d,o,do,g,dg,og,dog

const combinationsOfString = (str) => {
  let combinations = [];
  // Loop start from the str.length
  for (let i = 0; i < str.length; i++) {
    // Loop start from the str.length but next character of the given string
    for (let j = i + 1; j < str.length + 1; j++) {
      // Push the character combinations of the given string
      combinations.push(str.slice(i, j));
    }
  }

  return combinations;
};

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

console.log(combinationsOfString(str));
