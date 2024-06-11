//! Get the access to the value of the input
var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
//! Get the access to the buttons
var btn1 = document.getElementsByClassName("multiply")[0];
var btn2 = document.getElementsByClassName("divide")[0];

//? When btn1 click add the result of the two input box value
btn1.addEventListener("click", function () {
  var result = inp1.value * inp2.value;
  document.getElementById("result").innerHTML = result;
});

//? When btn2 click add the result of the two input box value
btn2.addEventListener("click", () => {
  var result = inp1.value / inp2.value;
  document.getElementById("result").innerHTML = result;
});
