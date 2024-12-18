// Write a JavaScript program to construct the following pattern, using a nested for loop.

// *
// * *
// * * *
// * * * *
// * * * * *

var ch;

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j < i; j++) {
    ch = ch + "* ";
  }
  console.log(ch);
  ch = "";
}
