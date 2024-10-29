// Write a JavaScript program that returns true if the given value is a number, false otherwise.

const checkInput = (inp) => {
  if (isNaN(inp)) {
    return false;
  }
  return true;
};

console.log(checkInput(10));
console.log(checkInput("ABC"));
