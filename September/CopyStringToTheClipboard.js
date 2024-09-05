// Write a JavaScript program to copy a string to the clipboard.

function copyOfTheText() {
  var copiedText = document.getElementById("CLIP").value;
  navigator.clipboard.writeText(copiedText).then(
    function () {
      document.getElementById("clp").innerHTML =
        "Copied the text: " + copiedText;
    },
    function (err) {
      console.error("Error copying text: ", err);
    }
  );
}
