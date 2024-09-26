// Write a JavaScript program to create an array of key-value pair arrays from a given object.

const objectToArray = (obj) => {
  return Object.keys(obj).map((k) => [k, obj[k]]);
};

console.log(objectToArray({ 1: "1", 2: "2", 3: "3" }));
