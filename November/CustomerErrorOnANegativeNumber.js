// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.

const isNegative = (n) => {
  try {
    if (n < 0) {
      return new Error("Error : Negative numbers are not allowed!");
    }
    return n;
  } catch (error) {
    return error;
  }
};

console.log(isNegative(-1));
console.log(isNegative(1));
