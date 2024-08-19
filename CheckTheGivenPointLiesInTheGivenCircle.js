// Write a JavaScript program to check if a point lies strictly inside the circle.

// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)

const prompt = require("prompt-sync")();

function checkAPoint(x, y, a, b, r) {
  var disPoint = (a - x) * (a - x) + (b - y) * (b - y);

  r = r * r;

  if (disPoint < r) {
    return true;
  }
  return false;
}

console.log("Enter the Circle Center");
console.log("Enter X : ");
var x = parseInt(prompt());
console.log("Enter Y : ");
var y = parseInt(prompt());

console.log("Enter the Point Inside Circle : ");
console.log("Enter A : ");
var a = parseInt(prompt());
console.log("Enter B : ");
var b = parseInt(prompt());

console.log("Enter Radius of Circle : ");
var r = parseInt(prompt());

var check = checkAPoint(x, y, a, b, r);

console.log(check);
