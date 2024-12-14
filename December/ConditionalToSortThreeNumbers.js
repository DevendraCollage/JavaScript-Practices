// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.

// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

const sortNum = (n1, n2, n3) => {
  if (n1 > n2 && n1 > n3) {
    if (n2 > n3) {
      console.log(n1 + ", " + n2 + ", " + n3);
    } else {
      console.log(n1 + ", " + n3 + ", " + n2);
    }
  } else if (n2 > n1 && n2 > n3) {
    if (n1 > n3) {
      console.log(n2 + ", " + n1 + ", " + n3);
    } else {
      console.log(n2 + ", " + n3 + ", " + n1);
    }
  } else if (n3 > n1 && n3 > n2) {
    if (n1 > n2) {
      console.log(n3 + ", " + n1 + ", " + n2);
    } else {
      console.log(n3 + ", " + n2 + ", " + n1);
    }
  }
};

const prompt = require("prompt-sync")();

var num1 = parseInt(prompt("Enter The Number-1 : "));
var num2 = parseInt(prompt("Enter The Number-2 : "));
var num3 = parseInt(prompt("Enter The Number-3 : "));

console.log("\n");
sortNum(num1, num2, num3);
