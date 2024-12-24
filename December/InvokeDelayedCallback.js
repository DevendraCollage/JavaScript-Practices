// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function invokeAfterDelay(callback) {
  setTimeout(callback, 2000); // 2000 millisecond = 2 second
}

function displayMessage() {
  console.log("Hello, Coder!");
}

invokeAfterDelay(displayMessage);
