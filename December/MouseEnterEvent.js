function changeBackgroundColor(elementId, color) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("mouseenter", () => {
      element.style.backgroundColor = color;
    });
  }
}
