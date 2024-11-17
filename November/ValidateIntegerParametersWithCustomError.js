// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

const isInteger = (n) => {
  if (!Number.isInteger(n)) {
    throw new Error("Invalid input. Please enter a valid integer!");
  }
  return "Valid integer";
};

try {
  console.log(isInteger(10));
} catch (error) {
  console.error(error.message);
}

try {
  console.log(isInteger("10"));
} catch (error) {
  console.error(error.message);
}

try {
  console.log(isInteger(10.25));
} catch (error) {
  console.error(error.message);
}
