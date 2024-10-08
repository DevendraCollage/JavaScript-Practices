// Write a JavaScript program to cast the provided value as an array if it's not one.

const castValue = (val) => {
  return Array.isArray(val) ? val : [val];
};

console.log(castValue("devendra"));
console.log(castValue([123]));
