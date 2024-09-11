// Write a JavaScript program to replace multiple object keys' names with the values provided.

const renameKeys = (keysMap, obj) => {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );
};

const obj1 = {
  name: "Devendra",
  age: 22,
  job: "Programmer",
};
console.log("Original Object");
console.log(obj1);
console.log("------------------");

var result = renameKeys({ name: "FirstName", job: "actor" }, obj1);
console.log("New Object");
console.log(result);
