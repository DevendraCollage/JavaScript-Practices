// Write a JavaScript function to compute the value of bn where n is the exponent and b is the base. Accept b and n from the user and display the results.

const exp = (b, n) => {
  var ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = b * ans;
  }

  return ans;
};

const prompt = require("prompt-sync")();

var base = parseInt(prompt("Enter The Base Value : "));

var n = parseInt(prompt("Enter The N Value : "));

console.log(exp(base, n));
