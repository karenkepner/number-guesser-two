var userGuess = document.getElementById('user-guess');
var displayLastGuess = document.querySelector('.display-last-guess');
var submitButton = document.getElementById('submit-guess');
var clearButton = document.getElementById('clear-input-field');
var resetButton = document.getElementById('reset-game');
var max = 100;
var min = 1;


 function generateRandomNumber() {
	return Math.floor(Math.random()*100+1);
 }

 var answer = generateRandomNumber();

 //this will go inside the display last guess function
 // document.querySelect('.display-last-guess');


 function evaluateGuess(guess, answer) {
   var feedback = document.getElementById('feedback');
   if (guess === answer) {
    feedback.innerText = 'Boom! You win!'
    resetGame();
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
  displayLastGuess.textContent = "!";
}
function disableGuessButton() {
  document.getElementById('submit-guess').setAttribute('disabled', 'true');
}

function enableGuessButton() {
  document.getElementById('submit-guess').setAttribute('disabled', 'false');
  console.log("trying to enable guess button")
}

userGuess.addEventListener('keyup', function() {
  enableGuessButton();
  // enableClearButton();
})

//game loop, well named functions in the clicker
submitButton.addEventListener('click', function() {
  var number = document.getElementById('user-guess').value;
  var guess = parseInt(number);
  //deactivate submit
  displayLastGuess.textContent = guess;
  evaluateGuess(guess, answer);
  disableGuessButton();
  console.log(answer);
})

resetButton.addEventListener('click', function() {
  resetGame();
  displayLastGuess.textContent = "?";
  feedback.textContent = "You are awesome!";
})

clearButton.addEventListener('click', function() {
  clearInputField();
  enableGuessButton();
})

//in the click!
// generateRandomNumber()
// get guesscomapare guess()
// clear field()


//junk pile
// debugger;
// event.preventDefault();
// console.log(guess.innerText);
