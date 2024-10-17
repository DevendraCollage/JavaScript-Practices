// Write a JavaScript program to take any number of iterable objects or objects with a length property and return the longest one.

const longestObj = (...args) => {
  return [...args].sort((a, b) => b.length - a.length)[0];
};

console.log(longestObj(...["devendra", "darshan"]));
console.log(longestObj("hello", "world", "university"));
