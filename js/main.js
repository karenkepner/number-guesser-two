// great javascript ideas
//x generate a random number between 1-100 as the answer
//collect an input guess from the user from the input box
//compare the guess to the answer
//return info about the guess: too high, too low, win!
//place the guess in the "last guess" div
//clear the input field and disable it.
//state functions at top

 function generateRandomNumber() {
	return Math.floor(Math.random()*100+1);
 }

 //this will go inside the display last guess function
 // document.querySelect('.display-last-guess');
var displayLastGuess = document.querySelector('.display-last-guess');


 function evaluateGuess(guess, answer) {
    if (guess === answer) {
     'Boom! You win!';
    } else if (guess > answer){
    return 'Your guess was ' + guess + ' is too high. The answer is ' + answer;
   } else {
    return 'Your guess was ' + guess + ' is too low. The answer is ' + answer;
   }
 }

function clearInputField() {
  document.getElementById('user-guess').value = "";
}


function disableGuessButton() {
  document.getElementById('submit-guess').setAttribute('disabled', 'true')
}


var submitButton = document.getElementById('submit-guess');
var clearButton = document.getElementById('clear-input-field');

//game loop, well named functions in the clicker
submitButton.addEventListener("click", function(){
  var number = document.getElementById('user-guess').value;
  var answer = generateRandomNumber();
  var guess = parseInt(number);
  //display last guess//clear input field
  //deactivate submit
  disableGuessButton();
  displayLastGuess.textContent = guess;
  console.log(evaluateGuess(guess, answer));
})


clearButton.addEventListener('click', function() {
  clearInputField();
})

//in the click!
// generateRandomNumber()
// get guesscomapare guess()
// clear field()


//junk pile
// debugger;
// event.preventDefault();
// console.log(guess.innerText);
