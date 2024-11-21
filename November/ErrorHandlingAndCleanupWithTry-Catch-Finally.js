// Write a JavaScript program that demonstrates the use of the 'try-catch-finally' statement to catch and handle an error, and then execute some cleanup code in the 'finally' block.

const divideNumbers = (x, y) => {
  try {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Invalid Arguments. Both arguments should be numbers.");
    }

    if (y === 0) {
      throw new Error("Invalid Divisor. Cannot divide by zero.");
    }

    const res = x / y;
    console.log(`Result : ${res}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
  } finally {
    console.log("Cleanup code executed.");
  }
};

divideNumbers(10, 2);
divideNumbers(10, 0);
divideNumbers(10, "2");
