// Write a JavaScript function to find the longest substring in a given string without repeating characters.

const subStr = (str) => {
  let left = 0;
  let max = 0;
  let result = new Set();

  for (let r = 0; r < str.length; r++) {
    //The code will check for an existing item on the set
    // If found, all the previously saved items will be deleted
    // the set will return to being empty
    while (result.has(str[r])) {
      result.delete(str[left]);
      left += 1;
    }
    result.add(str[r]);
    max = Math.max(max, r - left + 1);
  }

  return max;
};

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

console.log(subStr(str));
