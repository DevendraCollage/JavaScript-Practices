// Write a JavaScript program that adds a keydown event listener to a text input to detect when the "Enter key" is pressed.

const textInput = document.getElementById("textInput");
textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Enter Key Pressed!");
  }
});
