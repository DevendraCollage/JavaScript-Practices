// Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately.

const divideNumbers = (x, y) => {
  try {
    if (typeof x !== "number" && typeof y !== "number") {
      return new TypeError("Invalid Arguments. both numbers should be numbers");
    }

    if (y === 0) {
      return new Error("Invalid divisor. cannot divide by zero.");
    }

    const result = x / y;

    return `Result : ${result}`;
  } catch (error) {
    if (error instanceof TypeError) {
      return `TypeError : ${error.message}`;
    } else {
      return `Error : ${error.message}`;
    }
  }
};

console.log(divideNumbers(20, "4"));
console.log(divideNumbers(20, 4));
console.log(divideNumbers(20, 0));
