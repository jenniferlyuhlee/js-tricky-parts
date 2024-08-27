function guessingGame() {
    let guesses = 0;
    let wonGame = false;
    let secretNum = Math.floor(Math.random()*100);
    
    return function makeGuess(guess){
        guesses++;
        if (wonGame === true){
            return "The game is over, you already won!"
        }
        if (guess===secretNum){
            wonGame = true;
            return `You win! You found ${secretNum} in ${guesses} guesses.`
        }
        else if (guess > secretNum){
            return `${guess} is too high!`
        }
        else{
            return `${guess} is too low!`
        }
    }
}

module.exports = { guessingGame };
