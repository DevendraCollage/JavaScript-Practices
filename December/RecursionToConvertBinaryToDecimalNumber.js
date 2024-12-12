// Write a JavaScript program to convert binary number (positive) to decimal number using recursion.

const decNum = (n, index = 0) => {
  // Base Case
  if (index === n.length) {
    return 0;
  }
  const currDigit = parseInt(n[index]);

  const resetDec = decNum(n, index + 1);
  const currDec = currDigit * Math.pow(2, n.length - index - 1);

  return currDec + resetDec;
};

const prompt = require("prompt-sync")();

var binNum = prompt("Enter The Binary Number : ");

console.log("\n");
console.log(decNum(binNum));
