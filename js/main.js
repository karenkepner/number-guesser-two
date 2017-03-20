var userGuess = document.getElementById('user-guess');
var displayLastGuess = document.querySelector('.display-last-guess');
var submitButton = document.getElementById('submit-guess');
var clearButton = document.getElementById('clear-input-field');
var resetButton = document.getElementById('reset-game');
var min = 1;
var max = 100;
var range = document.querySelector('.number-range');

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
    console.log('value of ' + max);
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

userGuess.addEventListener('keyup', function() {
  submitButton.disabled = false;
  submitButton.classList.remove('disabled-background');
  clearButton.disabled = false;
  // clearButton.classList.remove('disabled-background');
})

//game loop, well named functions in the clicker
submitButton.addEventListener('click', function() {
  var number = document.getElementById('user-guess').value;
  var guess = parseInt(number);
  submitButton.disabled = true;
  submitButton.className = "disabled-background";
  clearButton.className = "disabled-background";

  displayLastGuess.textContent = guess;
  evaluateGuess(guess, answer);
  console.log(answer);
})

resetButton.addEventListener('click', function() {
  resetGame();
  displayLastGuess.textContent = "?";
  feedback.textContent = "You are awesome!";
  range.innerText = 'Guess a number between ' +min+ ' and ' +max+ '.';
})

clearButton.addEventListener('click', function() {
  clearInputField();
})

document.addEventListener('onload', function() {
})
//in the click!
// generateRandomNumber()
// get guesscomapare guess()
// clear field()


//junk pile
// debugger;
// event.preventDefault();
// console.log(guess.innerText);
