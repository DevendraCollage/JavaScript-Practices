// Write a JavaScript program to create a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.

const nthArgs =
  (n) =>
  (...args) =>
    args.slice(n)[0];

const third = nthArgs(2);

third(1, 2, 3);
third(1, 2);

const last = nthArgs(-1);
console.log(last(1, 2, 3, 4, 5));
