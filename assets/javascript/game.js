var winCounter = 0
var lossCounter = 0
var guessCounter = 9
var playerGuess = 0
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var compChoice = ""

// BEGINNING OF DOCUMENT READY
$(document).ready(function() {

    var compChoice = ""

    // Create screen text
    document.querySelector("#wins").textContent = "Wins:  " + winCounter
    document.querySelector("#losses").textContent = "Losses:  " + lossCounter
    document.querySelector("#guessChoices").textContent = "Guess Choices:  " + guessChoices
    document.querySelector("#guessesLeft").textContent = "Guesses Left:  " + guessCounter


    // Computer Choice Logic Function
    function compLogic() {
        var compChoice = alphabet[Math.floor(Math.random() * 26)]
        console.log(compChoice)
    }

    compLogic()


    // On key up, run a function
    document.onkeyup = function(event) {

        guessCounter--

        // put the pressed key into a variable
        var playerChoice = event.key
        var compChoice = compChoice
        console.log("Choice: " + playerChoice)
        
        // Win Conditions
        if (playerChoice === compChoice) {
            winCounter++
            complogic()
            console.log(compChoice)
            alert("You have won! Game resetting...")
        }
        // Loss Conditions
        else if (guessCounter === 0) {
            guessCounter = 9
            lossCounter++
            compLogic()
            console.log(compChoice)
            alert("You have lost! Game resetting...")
        }
        

        // Update text on screen
        document.querySelector("#wins").textContent = "Wins:  " + winCounter
        document.querySelector("#losses").textContent = "Losses:  " + lossCounter
        document.querySelector("#guessChoices").textContent = "Guess Choices:  " + guessChoices
        document.querySelector("#guessesLeft").textContent = "Guesses Left:  " + guessCounter
    }










  }); 
//   END OF DOCUMENT READY