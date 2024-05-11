// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input field
    const userGuess = parseInt(document.getElementById('userGuess').value);
    
    // Get the element to display the result
    const resultElement = document.getElementById('result');
    
    // Check if the user's guess matches the random number
    if (userGuess === randomNumber) {
        resultElement.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < randomNumber) {
        resultElement.textContent = 'Too low! Try a higher number.';
    } else {
        resultElement.textContent = 'Too high! Try a lower number.';
    }
}
