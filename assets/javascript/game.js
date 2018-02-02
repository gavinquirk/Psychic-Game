var winCounter = 0
var lossCounter = 0
var guessCounter = 9
var playerGuess = 0
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = document.getElementById("wins")
var compChoice = ""

// BEGINNING OF DOCUMENT READY
$(document).ready(function() {

    // Create screen text
    document.querySelector("#wins").textContent = "Wins:  " + winCounter
    document.querySelector("#losses").textContent = "Losses:  " + lossCounter
    document.querySelector("#guessChoices").textContent = "Guess Choices:  " + guessChoices
    document.querySelector("#guessesLeft").textContent = "Guesses Left:  " + guessCounter

    // Computer Choice Logic
        
    function compLogic() {
        var compChoice = alphabet[Math.floor(Math.random() * 10)]
    }

    compLogic()
    console.log(compChoice)



    // On key up, run a function
    document.onkeyup = function(event) {

        guessCounter--

        // put the pressed key into a variable
        var playerChoice = event.key
        console.log("Choice: " + playerChoice)
        
        // Reset Conditions
        if (guessCounter === 0) {
            guessCounter = 9
            alert("You have lost! Game resetting...")
        }
        // Win Conditions
        else if (playerChoice === compChoice) {
            winCounter++
        }
        // Loss Conditions
        else if (playerChoice != compChoice) {
            lossCounter++
        }
        

        // Update text on screen
        document.querySelector("#wins").textContent = "Wins:  " + winCounter
        document.querySelector("#losses").textContent = "Losses:  " + lossCounter
        document.querySelector("#guessChoices").textContent = "Guess Choices:  " + guessChoices
        document.querySelector("#guessesLeft").textContent = "Guesses Left:  " + guessCounter
    }










  }); 
//   END OF DOCUMENT READY