import { increment, reset } from "./counter.js";

const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");
const resetButton = document.getElementById("resetBtn");
const inputForm = document.getElementById("inputForm");
const textInput = document.getElementById("textInput");
const messageDiv = document.getElementById("message");

function init() {
  counterDisplay.textContent = increment();
}

incrementButton.addEventListener("click", () => {
  counterDisplay.textContent = increment();
});

resetButton.addEventListener("click", () => {
  counterDisplay.textContent = reset();
});

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = textInput.value.trim();
  try {
    if (inputValue.length >= 3) {
      messageDiv.textContent = `Welcome, ${inputValue}!( ๑ ˃̵ᴗ˂̵)و ♡`;
      messageDiv.style.color = "black";
    } else {
      throw new Error(
        "The input must be at the very least 3 characters long! °՞(ᗒᗣᗕ;)՞°"
      );
    }
  } catch (error) {
    messageDiv.style.color = "red";
    messageDiv.textContent = error;
  }
});

init();
