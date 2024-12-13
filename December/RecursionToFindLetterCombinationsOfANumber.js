// A string consists of digits ranging from 2 to 9, inclusive. Write a JavaScript program to get all possible letter combinations that represent the number using recursion.

// Letter Combination:
// 1: 'abc',
// 2: 'def',
// 3: 'ghi',
// 4: 'jkl',
// 5: 'mno',
// 6: 'pqr',
// 7: 'stu',
// 8: 'vwx'
// 9: 'yz'

// Test Data:
// ("12") -> ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
// ("9") -> ["y", "z"]

const letterCombinations = (digits) => {
  // Generate length of the given digits
  const length = digits?.length;
  // Generate result array to store the combinations
  const result = [];

  // Base case
  if (!length) {
    return result;
  }

  const digitMap = {
    1: "abc",
    2: "def",
    3: "ghi",
    4: "jkl",
    5: "mno",
    6: "pqr",
    7: "stu",
    8: "vwx",
    9: "yz",
  };

  const generateCombinations = (index, combination) => {
    var letter;
    var letterIndex;

    if (index >= length) {
      result.push(combination);
      return;
    }

    const digit = digitMap[digits[index]];

    letterIndex = 0;
    while ((letter = digit[letterIndex++])) {
      generateCombinations(index + 1, combination + letter);
    }
  };

  generateCombinations(0, "");

  return result;
};

const prompt = require("prompt-sync")();

var combLen = prompt("Enter The Letter Combination Size : ");

console.log(letterCombinations(combLen));
