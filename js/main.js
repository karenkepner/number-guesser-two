var userGuess = document.getElementById('user-guess');
var displayLastGuess = document.querySelector('.display-last-guess');
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
    } else if (guess > answer){
    feedback.innerText = 'Your guess was too high.';
   } else {
    feedback.innerText = 'Your guess is too low.';
   }
 }

function clearInputField() {
  document.getElementById('user-guess').value = "";
}

function resetGame() {
  clearInputField();
  return answer = generateRandomNumber(max, min);
}

userGuess.addEventListener('keyup', function() {
  submitButton.disabled = false;
  clearButton.disabled = false;
})

//game loop, well named functions in the clicker
submitButton.addEventListener('click', function() {
  var number = document.getElementById('user-guess').value;
  var guess = parseInt(number);
  //deactivate submit
  displayLastGuess.textContent = guess;
  evaluateGuess(guess, answer);
  // generateRandomNumber();
  // disableGuessButton();
  console.log(answer);
})

resetButton.addEventListener('click', function() {
  resetGame();
  displayLastGuess.textContent = "?";
  feedback.textContent = "You are awesome!";
})

clearButton.addEventListener('click', function() {
  clearInputField();
  // enableGuessButton();
})

//in the click!
// generateRandomNumber()
// get guesscomapare guess()
// clear field()


//junk pile
// debugger;
// event.preventDefault();
// console.log(guess.innerText);
