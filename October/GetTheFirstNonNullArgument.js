// Write a JavaScript program to get the first non-null / undefined argument.

const coalesce = (...args) => args.find((_) => ![undefined, null].includes(_));

console.log(coalesce(null, undefined, "", NaN, "abcd"));
