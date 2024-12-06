// Write a JavaScript function that returns the longest palindrome in a given string.

const isPalindrome = (str) => {
  let n = str.length; // String size

  // Base case
  if (n < 2) {
    return n;
  }

  // Initial variables
  let maxLength = 1,
    start = 0;
  let low, high;

  for (let i = 0; i < n; i++) {
    low = i - 1;
    high = i + 1;

    while (high < n && str[high] === str[i]) {
      high++;
    }

    while (low >= 0 && str[low] === str[i]) {
      low--;
    }

    while (low >= 0 && high < n && str[low] === str[high]) {
      low--;
      high++;
    }

    let length = high - low - 1;
    if (maxLength < length) {
      maxLength = length;
      start = low + 1;
    }
  }
  return str.substring(start, maxLength + start);
};

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

console.log(isPalindrome(str));
