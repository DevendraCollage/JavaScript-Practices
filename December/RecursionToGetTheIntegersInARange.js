// Write a JavaScript program to get integers in the range (x, y) using recursion.

// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

const getTheNumber = (start, end) => {
  // Base Case
  if (end - start === 2) {
    return [start + 1];
  } else {
    // Recursive Case
    var list = getTheNumber(start, end - 1);
    list.push(end - 1);
    return list;
  }
};

const prompt = require("prompt-sync")();

var start = parseInt(prompt("Enter The Start Range : "));

var end = parseInt(prompt("Enter The End Number : "));

console.log(getTheNumber(start, end));
