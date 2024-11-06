// Write a JavaScript program to create a function that accepts up to one argument, ignoring any additional arguments.

// Note: Call the provided function, fn, with just the first argument given.

const unary = (fn) => (val) => fn(val);

console.log([1, 2, 3, 4, 5].map(unary(parseFloat)));
