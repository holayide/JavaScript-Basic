// GRADED ASSIGNMENT
// Random Number Guessing Game: 
// Develop a program that generates a random number between 1 and 100.
// Allow the user to guess the number and provide feedback 
// on whether the guess is too high, too low, or correct.

function guessingGame(input) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (input > randomNumber) {
       return `Your guess ${input} is too high, the number is ${randomNumber}`;
    } else if (input < randomNumber) {
        return `Your guess ${input} is too low, the number is ${randomNumber}`;
    } else {
        return `Bravo, you guessed right`;
    }
}

let guessedNumber = guessingGame(38);
console.log (guessedNumber);