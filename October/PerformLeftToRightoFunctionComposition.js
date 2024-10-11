// Write a JavaScript program to perform left-to-right function composition.

const addAndSquare = (a, b) => {
  return (a + b) ** 2;
};

console.log(addAndSquare(1, 2)); // Output: 9
console.log(addAndSquare(3, 2)); // Output: 25
