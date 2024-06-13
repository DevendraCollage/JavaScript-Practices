//! Declare one variable and assign the variable to the string
var var_name = "abc";

//! Declare another variable and assign the value 120.
var n = 120;

//? Now this reference to the assign the value of n
this[var_name] = n;

//? And after print the value of that variable
console.log(this[var_name]);
