// Write a JavaScript program to hash an given input string into a whole number.

// Hashes the input string into a whole number.

const sdbm = (str) => {
  let arr = str.split("");
  return arr.reduce(
    (hashCode, currVal) =>
      (hashCode =
        currVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
    0
  );
};

console.log(sdbm("Devendra"));
console.log(sdbm("Darshan"));
