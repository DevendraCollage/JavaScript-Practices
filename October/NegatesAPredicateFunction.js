// Write a JavaScript program to negates a predicate function.
const negate =
  (func) =>
  (...args) =>
    !func(...args);

console.log([1, 2, 3, 4, 5].filter(negate((n) => n % 2 == 0)));
