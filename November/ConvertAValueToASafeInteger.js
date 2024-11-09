// Write a JavaScript program to convert a value to a safe integer.

const toSafeInteger = (num) => {
  return Math.round(
    Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
  );
};

console.log(toSafeInteger(3.2514));
