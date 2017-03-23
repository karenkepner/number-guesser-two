var userGuess = document.getElementById('user-guess');
var submitButton = document.getElementById('submit-guess');
var clearButton = document.getElementById('clear-input-field');
var resetButton = document.getElementById('reset-game');
var newRange = document.getElementById('new-range');
var min = 1;
var max = 100;
var player1score = 0;
var guesses = 0;

function generateRandomNumber(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var answer = generateRandomNumber(max,min);

function evaluateGuess(guess, answer) {
  var feedback = document.getElementById('feedback');
  if (guess === answer) {
    feedback.innerText = 'Boom! You win!'
    min -= 10;
    max += 10;
    guesses = 0;
    newRange.disabled = false;
  } else if (guess == NaN ) {
    feedback.innerText = 'Please enter a number.';
  } else if (guess > max || guess < min){
    feedback.innerText = 'Your guess is outside the range.';
  } else if (guess > answer) {
    feedback.innerText = 'Your guess was too high.';
  } else if (guess < answer) {
    feedback.innerText = 'Your guess is too low.';
  } else {
    feedback.innerText = 'Guess a number between ' +min+ ' and ' +max+ '.';
  }
}

function clearInputField() {
  document.getElementById('user-guess').value = "";
  document.getElementById('new-min').value = "";
  document.getElementById('new-max').value = "";
}

function resetGame() {
  clearInputField();
  answer = generateRandomNumber(min, max);
}

function postNumberRange(){
  document.querySelector('.number-range').innerText = 'Guess a number between ' +min+ ' and ' +max+ '.';
}

function playerScore(guesses) {
  var score = document.querySelector('.player-score');
  if(guesses === 1) {
      score += 3000;
    } else if (guesses >= 2 && guesses <= 5) {
      score += 20;
    } else if (guesses >=6 && guesses <= 8) {
      score += 10;
    } else if (guesses >= 10 && guesses <= 15) {
      score += 5;
    } else if (guesses > 16) {
      score += 1;
  }
  document.querySelector('.player-score').value = score;
}

userGuess.addEventListener('input', function() {
  if (userGuess.value === "") {
    clearButton.disabled = true;
    } else {
    clearButton.disabled = false;
    }
  submitButton.disabled = false;
})

submitButton.addEventListener('click', function() {
  var number = document.getElementById('user-guess').value;
  var guess = parseInt(number);
  guesses++
  playerScore(guesses);
  console.log('guesses ' +guesses);
  submitButton.disabled = true;
  resetButton.disabled = false;
  document.querySelector('.display-last-guess').textContent = guess;
  evaluateGuess(guess, answer);
  console.log(answer); //delete this for final review
})

resetButton.addEventListener('click', function() {
  resetGame();
  document.querySelector('.display-last-guess').textContent = "?";
  feedback.textContent = "You are awesome!";
  postNumberRange();
 })

clearButton.addEventListener('click', function() {
  clearInputField();
  clearButton.disabled = true;
});

(function() {
  postNumberRange();
})();

newRange.addEventListener('click', function() {
  var newMin = document.getElementById('new-min').value;
  min = parseInt(newMin)
  var newMax = document.getElementById('new-max').value;
  max = parseInt(newMax)
  clearInputField();
  postNumberRange();
  return min, max;
})
