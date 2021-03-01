"use strict";

//random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Display the random number in the console for testing purposes
// console.log(secretNumber);

// Make a reference for the score and high score
const score = document.querySelector(".score");
const highScoreRef = document.querySelector(".highscore");

// Variable for current score and high score
let currentScore = 20;
let highScore = 0;

// document.querySelector(".score").textContent = 15;

// event handler for "Check!" button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //   when there is no input
  if (!guess) {
    displayMessage("❌ No Number!");

    // when the guess is incorrect
  } else if (guess !== secretNumber) {
    if (currentScore > 1) {
      // guess < secretNumber
      //   ? displayMessage("📉 Too Low!")
      //   : displayMessage("📈 Too High!");
      displayMessage(guess < secretNumber ? "📉 Too Low!" : "📈 Too High!");
      currentScore--;
      score.textContent = currentScore;
    } else {
      score.textContent = 0; //change the score to the zero when the user loses. otherwise, it would show a score of 1 under the lose message
      displayMessage("💥 You lost the game!");
    }
    // when the guess is correct
  } else {
    displayMessage("🎉 Correct!");
    document.querySelector(".number").textContent = secretNumber;
    // set high score equal to the new score
    compareScore();

    // change the style of the webpage for when the player wins
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
  }
});

// event handler for "Again!" button
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...!");
  currentScore = 20;
  score.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});

function compareScore() {
  if (currentScore > highScore) {
    highScore = currentScore;
    highScoreRef.textContent = score.textContent;
  }
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}
