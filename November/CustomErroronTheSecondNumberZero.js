// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.

const numberDivision = (n1, n2) => {
  try {
    if (n2 === 0) {
      return new Error("Error : Division by zero is not allowed.");
    } else {
      let ans = n1 / n2;
      return ans;
    }
  } catch (error) {
    return error;
  }
};

console.log(numberDivision(5, 2));
console.log(numberDivision(5, 0));
