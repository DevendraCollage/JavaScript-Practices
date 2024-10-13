// Write a JavaScript program to create a deep clone of an object.

const deepClone = (obj) => {
  let clone = Object.assign({}, obj);

  Object.keys(clone).forEach((key) => {
    clone[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
  });

  return Array.isArray(obj)
    ? (clone.length = obj.length) && Array.from(clone)
    : clone;
};

const a = { foo: "bar", obj: { a: 1, b: 2 } };
const b = deepClone(a);
console.log(b);
