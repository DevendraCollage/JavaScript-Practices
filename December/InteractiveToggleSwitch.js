// Write a JavaScript program to implement a toggle switch that changes its state when clicked.

const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("on");
});
