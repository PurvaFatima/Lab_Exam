// script.js

// JavaScript to change the text of the Submit button
const submitButton = document.getElementById("submitButton");
let isClicked = false;

submitButton.addEventListener("click", function() {
  if (isClicked) {
    submitButton.textContent = "Clicked!";
  } else {
    submitButton.textContent = "Submitted!";
  }
  isClicked = !isClicked;
});
