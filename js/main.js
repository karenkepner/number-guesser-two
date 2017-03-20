var submitButton = document.getElementById('submit-guess');
var clearButton = document.getElementById('clear-input-field');
var resetButton = document.getElementById('reset-game');
var min = 1;
var max = 100;

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
    min = min - 10;
    max = max + 10;
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
}

function resetGame() {
  clearInputField();
  return answer = generateRandomNumber(min, max);
}

document.getElementById('user-guess').addEventListener('keyup', function() {
  submitButton.disabled = false;
  clearButton.disabled = false;
})

//game loop, well named functions in the clicker
submitButton.addEventListener('click', function() {
  var number = document.getElementById('user-guess').value;
  var guess = parseInt(number);
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
  document.querySelector('.number-range').innerText = 'Guess a number between ' +min+ ' and ' +max+ '.';
})

clearButton.addEventListener('click', function() {
  clearInputField();
  clearButton.disabled = true;
})

window.onload = function() {
  document.querySelector('.number-range').innerText = 'Guess a number between ' +min+ ' and ' +max+ '.';
}
