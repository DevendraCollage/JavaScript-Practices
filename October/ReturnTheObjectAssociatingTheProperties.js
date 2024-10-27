// Write a JavaScript program to return the object associating the properties to the values of a given array of valid property identifiers and an array of values.

// Note: Since an object can have undefined values but not undefined property pointers, the array of properties is used to decide the structure of the resulting object using Array.reduce().

// Associates properties to values, given array of valid property identifiers and an array of values.

const zipObject = (props, values) => {
  return props.reduce(
    (obj, prop, index) => ((obj[prop] = values[index]), obj),
    {}
  );
};

console.log(zipObject(["a", "b", "c"], [1, 2]));
console.log(zipObject(["a", "b", "c"], [1, 2, 3]));
console.log(zipObject(["a", "b", "c"], [1, 2, 3, 4]));
