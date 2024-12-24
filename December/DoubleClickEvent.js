// Write a JavaScript function that listens for a double click on an element and performs a specific action.

const myButton = document.getElementById("myButton");
myButton.addEventListener("dblclick", () => {
  console.log("A double click has been performed!");
});
