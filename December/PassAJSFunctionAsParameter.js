// Write a JavaScript program to pass a 'JavaScript function' as a parameter.

function inner(value) {
  return "Hello, " + value;
}

function outer(a, func) {
  console.log(func(a));
}

outer("Devendra!", inner);
