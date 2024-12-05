// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

const longestCountry = (arr) => {
  return arr.reduce(function (lname, country) {
    return lname.length > country.length ? lname : country;
  }, "");
};

const prompt = require("prompt-sync")();

var n = parseInt(prompt("Enter The Country Array Size : "));

var arr = [];

console.log("Enter The Country Array Elements : ");
for (let i = 0; i < n; i++) {
  var elem = prompt(`${i} : `);
  arr.push(elem);
}
console.log("\n");

console.log(longestCountry(arr));
