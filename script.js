/**
 * Guess The Number Game
 */

let correctNumber = getRandomNumber();
let guesses = [];

/**
 * Functionality for playing the whole game
 */
function playGame() {
  let numberGuess = document.querySelector("#number-guess").value;
  displayResult(numberGuess);
}

function displayResult(numberGuess) {
  numberGuess > correctNumber && showNumberAbove();
  numberGuess < correctNumber && showNumberBelow();
  numberGuess == correctNumber && showYouWon();
  saveGuessHistory(numberGuess);
  displayHistory();
}

function initGame() {
  resetResultContent();
}

function resetResultContent() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("history").innerHTML = "";
  guesses = [];
  correctNumber = getRandomNumber();
  document.getElementById("number-guess").value = "";
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function saveGuessHistory(guess) {
  guesses.push(guess);
}

function displayHistory() {
  let index = 0; // TODO
  let list = "<ul class='list-group'>";
  while (index < guesses.length) {
    list +=
      "<li class='list-group-item'>" +
      "You guessed " +
      guesses[index] +
      "</li>";
    index++;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

document.getElementById("number-submit").addEventListener("click", playGame);
document.getElementById("restart-game").addEventListener("click", initGame);
