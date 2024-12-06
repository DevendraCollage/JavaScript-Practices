// Write a JavaScript function to get the function name.

function funcName(func) {
  let val = func.name;
  console.log(val);
}

function helloWorld() {}

funcName(helloWorld);
