// Write a JavaScript program to measure the time a function to execute.

const prompt = require("prompt-sync")();

const timeTakes = (call) => {
  const res = call();
  return res;
};

console.log(
  "Time Taken : ",
  timeTakes(() => Math.pow(2, 10)),
  "ms"
);
console.log(
  "Time Taken : ",
  timeTakes(() => Math.sqrt(224)),
  "ms"
);
