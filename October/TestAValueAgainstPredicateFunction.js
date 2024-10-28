// Write a JavaScript program to test a value, x, against a predicate function. If true, return fn(x). Else, return x.

// Return a function expecting a single value, x, that returns the appropriate value based on pred.

const when = (pred, whenTrue) => (x) => pred(x) ? whenTrue(x) : x;

const doubleEvenNumbers = when(
  (x) => x % 2 === 0,
  (x) => x * 2
);

console.log(doubleEvenNumbers(2));
console.log(doubleEvenNumbers(4));
console.log(doubleEvenNumbers(3));
