// Write a JavaScript program to curry (curries) a function

const curry = (fn, arity = fn.length, ...args) => {
  return arity <= args.length
    ? fn(...args)
    : curry.bind(null, fn, arity, ...args);
};

console.log(curry(Math.max, 3)(10)(20)(30)); // Output: 30
console.log(curry(Math.min, 3)(10)(20)(30)); // Output: 10
console.log(curry(Math.pow)(2)(5)); // Output: 32
