// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal – Panama".
// Write a JavaScript program to check whether a given string is a palindrome or not using recursion.

// Test Data:
// ("madam") -> true
// ("abdb") -> false
// ("ab") -> false
// (test("a") -> true

const checkPalindrome = (str, start, end) => {
  // Base Case
  if (start == end) {
    return true;
  }

  // First and Last Character does not match
  if (str.charAt(start) != str.charAt(end)) {
    return false;
  }

  if (start < end + 1) {
    return checkPalindrome(str, start + 1, end - 1);
    return true;
  }
};

const isPalindrome = (str) => {
  var len = str.length;

  // Base Case
  if (len == 0) {
    return true;
  }

  return checkPalindrome(str, 0, len - 1);
};

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

console.log(isPalindrome(str));
