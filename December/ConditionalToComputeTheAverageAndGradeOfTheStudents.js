// Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

// Student Name	Marks
// David	    80
// Vinoth	    77
// Divya	    88
// Ishitha	    95
// Thomas	    68
// The grades are computed as follows:

// Range	Grade
// <60	    F
// <70	    D
// <80	    C
// <90	    B
// <100	    A

const calcGrade = (s1, s2, s3, s4, s5) => {
  var total = s1 + s2 + s3 + s4 + s5;
  var average = total / 5;
  if (average < 60) {
    return "F Grade";
  } else if (average < 70) {
    return "D Grade";
  } else if (average < 80) {
    return "C Grade";
  } else if (average < 90) {
    return "B Grade";
  } else {
    return "A Grade";
  }
};

const prompt = require("prompt-sync")();

var david = parseInt(prompt("David Enter Your Marks : "));
var vinoth = parseInt(prompt("Vinoth Enter Your Marks : "));
var divya = parseInt(prompt("Divya Enter Your Marks : "));
var ishitha = parseInt(prompt("Ishitha Enter Your Marks : "));
var thomas = parseInt(prompt("Thomas Enter Your Marks : "));

console.log("\n");
console.log(calcGrade(david, vinoth, divya, ishitha, thomas));
