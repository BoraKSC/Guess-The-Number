let guesses = [];

// Variable for store the correct random number

let correctNumber = getRandomNumber();
console.log(correctNumber);

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
};
let refreshPage = document.getElementById("restart-game");

refreshPage.onclick = function () {
  window.location.reload();
};

function playGame() {
  let NumberGuess = document.getElementById("number-guess").value;
  displayResult(NumberGuess);
  saveGuessHistory(NumberGuess);
}

function displayResult(NumberGuess) {
  if (NumberGuess > correctNumber) {
    showNumberAbove();
  } else if (NumberGuess < correctNumber) {
    showNumberBelow();
  } else {
    showYouWon();
  }
}

//Return a random number between 1 and 100

function getRandomNumber() {
  let randomNmuber = Math.floor(Math.random() * 100 + 1);

  return randomNmuber;
}

function saveGuessHistory(guess) {
  guesses.push(guess);
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
  const text = "Your guess is too HIGH!";

  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too LOW!";

  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
