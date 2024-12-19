// Write a JavaScript program that creates a button and add a click event listener to log a message when it's clicked.
//! This program only works in the DOM (Document Object Model) outside the DOM it not working

const button = document.createElement("button");
button.textContent = "Click Me";

button.addEventListener("click", () => {
  console.log("Button Clicked!");
});

document.body.appendChild(button);
