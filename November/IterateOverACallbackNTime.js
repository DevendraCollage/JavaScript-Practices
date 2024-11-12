// Write a JavaScript program to iterate over a callback n times.

const time = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = "";

time(10, (i) => (output += i));

console.log(output);
