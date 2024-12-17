// Write a JavaScript program to find the Armstrong numbers of 3 digits.

// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

const digitArm = (n) => {
  const digits = n.toString().split("");
  const order = digits.length;
  const sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(parseInt(digit), order);
  }, 0);

  if (sum === n) {
    console.log(`${n} Armstrong Number`);
  } else {
    console.log(`${n} Not Armstrong Number`);
  }
};

const prompt = require("prompt-sync")();

var num = parseInt(prompt("Enter the number here : "));

digitArm(num);
