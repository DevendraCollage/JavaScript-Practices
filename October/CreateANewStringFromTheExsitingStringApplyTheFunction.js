// Write a JavaScript program to create an updated string with the results of calling a provided function on every character in the called string.

const mapString = (str, fn) => {
  return str
    .split("")
    .map((c, i) => fn(c, i, str))
    .join("");
};

console.log(mapString("JavaScript Program", (c) => c.toUpperCase()));
