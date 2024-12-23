// Write a JavaScript program to create a progress bar that updates its width based on task completion.

// Function to fill the percentage for the progress bar
function updateProgress(progressPercentage) {
  const progressBarFill = document.getElementById("progress");
  progressBarFill.style.width = `${progressPercentage}%`;
}
