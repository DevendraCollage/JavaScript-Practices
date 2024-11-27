// Write a JavaScript function that accepts an argument and returns the type.

// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

const checkDataType = (inp) => {
  return typeof inp;
};

console.log(checkDataType("Devendra"));
console.log(checkDataType(120));
console.log(checkDataType({ name: "Devendra", age: 23 }));
