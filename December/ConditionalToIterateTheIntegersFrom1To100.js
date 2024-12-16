// Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

const fizzBuzz = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0) {
      console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} Buzz`);
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} FizzBuzz`);
    } else {
      console.log(`${i}`);
    }
  }
};

const prompt = require("prompt-sync")();

var start = parseInt(prompt("Enter The Start Range : "));
var end = parseInt(prompt("Enter The End Range : "));

console.log("\n");
fizzBuzz(start, end);
