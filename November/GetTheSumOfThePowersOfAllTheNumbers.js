// Write a JavaScript program to get the sum of the powers of all the numbers from start to end (both inclusive).

const sumPower = (end, power = 2, start = 1) => {
  return Array(end + 1 - start)
    .fill(0)
    .map((x, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0);
};

console.log(sumPower(10));
console.log(sumPower(5, 3));
