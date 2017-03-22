### Make the Number Guesser Game   

 *Number Guesser is a game where the user guesses a number between 1 and 100.

#### Phase One: Basic Requirements

The application should have the following user interface components:

Zero State:

* Input field to type guess into   
* Submit Guess button   
* Clear Input field button   
* Reset Game button   

User’s Guess State:

Display the user’s most recent guess
Display results and feedback:   
If their guess is too high, it should display: “That is too high”   
If their guess is too low, it should display: “That is too low”   
If the guess is correct, it should display: “BOOM!”   

#### Phase Two: More Better

* The input field should only accept numerical entries, within the defined min and max range.   
* The application should display an error message if the guess is not a number.   
* The application should display an error if the guess is outside of the range of possible answers.
* The clear button should be disabled if there is nothing to clear.   
* The reset button should be disabled if there is nothing to reset.

#### Phase Three: Level Up

* Add additional inputs that allow the user to specify the minimum/maximum range.   
*  Upon successful win, user’s range is updated:
   * Every time the user wins a round increase the maximum number by 10.
   * Every time the user wins a round decrease the minimum number by 10.   
   * Appropriate UI is incorporated such that user understands what is happening.   

#### Phase Four: Choose Your Own Adventure

You have liberty with the UI.

Make it two player.   
Incorporate a scoring system based on how quickly user guesses correct number.   
Turn it into a game to teach basic arithmetic to kids.   
