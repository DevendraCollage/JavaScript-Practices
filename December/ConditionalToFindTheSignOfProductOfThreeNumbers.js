// Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

// Sample numbers : 3, -7, 2
// Output : The sign is -

const signOfTheNum = (n1, n2, n3) => {
  if (n1 > 0 && n2 > 0 && n3 > 0) {
    console.log("The sign is +");
  } else if (n1 < 0 && n2 < 0 && n3 < 0) {
    console.log("The sign is -");
  } else if (n1 > 0 && n2 < 0 && n3 < 0) {
    console.log("The sign is +");
  } else if (n1 < 0 && n2 > 0 && n3 < 0) {
    console.log("The sign is + ");
  } else {
    console.log("The sign is -");
  }
};

const prompt = require("prompt-sync")();

var num1 = parseInt(prompt("Enter The Number-1 : "));
var num2 = parseInt(prompt("Enter The Number-2 : "));
var num3 = parseInt(prompt("Enter The Number-3 : "));

console.log("\n");
signOfTheNum(num1, num2, num3);
