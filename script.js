let maxNumber = 100;
let secretNumber = Math.floor(Math.random() * maxNumber) + 1;
let attempts = 0;
const maxAttempts = 10;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);

  if (isNaN(guess)) {
    document.getElementById("feedback").textContent = "Please enter a valid number.";
    return;
  }

  if (attempts >= maxAttempts) {
    document.getElementById("feedback").textContent = `Game over! The number was ${secretNumber}.`;
    return;
  }

  attempts++;

  if (guess < secretNumber) {
    document.getElementById("feedback").textContent = "Too low. Try again.";
  } else if (guess > secretNumber) {
    document.getElementById("feedback").textContent = "Too high. Try again.";
  } else {
    document.getElementById("feedback").textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  attempts = 0;
  document.getElementById("feedback").textContent = "";
  document.getElementById("guessInput").value = "";
}

function setDifficulty() {
  maxNumber = parseInt(document.getElementById("difficulty").value);
  resetGame();
}
