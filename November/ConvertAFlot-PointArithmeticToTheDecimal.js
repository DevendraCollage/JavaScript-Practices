// Write a JavaScript program that converts float-point arithmetic to decimal form, and creates a comma separated string from a number.

const toDecimalMark = (num) => {
  return num.toLocaleString("en-US");
};

console.log(toDecimalMark(12345.12345));
