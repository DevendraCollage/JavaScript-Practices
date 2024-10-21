// Write a JavaScript program to replace all but the last number of characters with the specified mask character.

const mask = (cc, num = 0, mask = "*") => {
  return ("" + cc).slice(0, -num).replace(/./g, mask) + ("" + cc).slice(-num);
};

console.log(mask(123456789));
console.log(mask(123456789, 5));
console.log(mask(123456789, 5, "@")); // We can also give the choice of characters
