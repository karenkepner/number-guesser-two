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

 function evaluateGuess(guess, answer) {
   if (guess === answer) {
     return 'Boom! ' + answer;
   } else if (guess > answer){
     return 'Your guess was ' + guess + ' is too high. The answer is ' + answer;
   } else {
     return 'Your guess was ' + guess + ' is too low. The answer is ' + answer;
   }
 }

var submitButton = document.getElementById('submit-guess');

//game loop, well named functions in the clicker
submitButton.addEventListener("click", function(){
  var number = document.getElementById('user-guess').value;
  var answer = generateRandomNumber();
  var guess = parseInt(number);
  //display last guess//clear input field
  //deactivate submit
  console.log(evaluateGuess(guess, answer));
})

//in the click!
// generateRandomNumber()
// get guesscomapare guess()
// clear field()


//junk pile
// debugger;
// event.preventDefault();
// console.log(guess.innerText);
