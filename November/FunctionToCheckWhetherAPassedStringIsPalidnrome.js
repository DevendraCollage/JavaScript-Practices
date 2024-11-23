// Write a JavaScript function that checks whether a passed string is a palindrome or not?

// Note: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const isPalindrome = (str) => {
  return str.toLowerCase() === str.toLowerCase().split("").reverse("").join("")
    ? "The Given String is Palindrome!"
    : "The Given String is not Palindrome?";
};

const prompt = require("prompt-sync")();

var str = prompt("Enter The String Here : ");

console.log(isPalindrome(str));
