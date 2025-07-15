import { increment, reset } from "./counter.js";

const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");
const resetButton = document.getElementById("resetBtn");
const inputForm = document.getElementById("inputForm");
const textInput = document.getElementById("textInput");
const messageDiv = document.getElementById("message");

incrementButton.addEventListener("click", () => {
  counterDisplay.textContent = increment();
});

resetButton.addEventListener("click", () => {
  counterDisplay.textContent = reset();
});

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const InputValue = textInput.value.trim();
  if (InputValue.length >= 3) {
    messageDiv.textContent = `Welcome, ${InputValue}!`;
    messageDiv.style.color = "black";
    textInput.value = "";
  } else {
    messageDiv.textContent =
      "Error: The input must be at the very least 3 characters long!";
    messageDiv.style.color = "red";
  }
});
