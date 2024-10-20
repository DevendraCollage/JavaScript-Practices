// Write a JavaScript program to create an object with the same keys as the provided object. It will also generate values generated by running the provided function for each value.

// Maps the values of an object using the provided function, generating a new object with the same keys.

const mapValues = (obj, fn) => {
  return Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj);
    return acc;
  }, {});
};

const users = {
  fred: { user: "fred", age: 25 },
  pebbles: { user: "mitchel", age: 33 },
};

console.log(mapValues(users, (u) => u.age));
