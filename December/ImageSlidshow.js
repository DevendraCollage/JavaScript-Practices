// Write a JavaScript program to create a slideshow that changes the displayed image when a next or previous button is clicked.

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
var currentIndex = 0;

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const image = document.getElementById("image");

previousBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  image.src = images[currentIndex];
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1 + images.length) % images.length;
  image.src = images[currentIndex];
});
