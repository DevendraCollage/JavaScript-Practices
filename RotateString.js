function animate_string(id) {
  var element = document.getElementById(id); //* Access the HTML element using ID

  var textNode = element.childNodes[0]; //* This will return the NoteList object that will contain the collection of child nodes

  var text = textNode.data;

  //* Rotate the string
  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);
}
