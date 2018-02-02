var winCounter = 0
var lossCounter = 0
var guessCounter = 9
var guessArr = []
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var compHolder = []

// BEGINNING OF DOCUMENT READY
$(document).ready(function() {

    // Create original screen text
    document.querySelector("#wins").textContent = "Wins:  " + winCounter
    document.querySelector("#losses").textContent = "Losses:  " + lossCounter
    document.querySelector("#guessChoices").textContent = "Guess Choices:  " + guessArr
    document.querySelector("#guessesLeft").textContent = "Guesses Left:  " + guessCounter


    // Computer Choice Logic Function
    function compLogic() {
        var compLetter = alphabet[Math.floor(Math.random() * 26)]
        compHolder.splice(0, 1, compLetter)
    }

    compLogic()

    // Reset Function
    function reset() {
        guessCounter = 9
        guessArr = []
        compLogic()
    }


    // On key up, run function
    document.onkeyup = function(event) {

        var compChoice = compHolder[0]
        guessCounter--

        // put the pressed key into a variable
        var playerChoice = event.key
        
        // Win Conditions
        if (playerChoice === compChoice) {
            winCounter++
            reset()
            alert("You have won! Game resetting...")
        }
        // Loss Conditions
        else if (guessCounter === 0) {
            guessCounter = 9
            lossCounter++
            reset()
            alert("You have lost! Game resetting...")
        }
        // Wrong Guess Conditions
        else if (playerChoice != compChoice) {
            guessArr.push(" " + playerChoice)
        }
        

        // Update text on screen
        document.querySelector("#wins").textContent = "Wins:  " + winCounter
        document.querySelector("#losses").textContent = "Losses:  " + lossCounter
        document.querySelector("#guessChoices").textContent = "Guess Choices:  " + guessArr
        document.querySelector("#guessesLeft").textContent = "Guesses Left:  " + guessCounter
    }










  }); 
//   END OF DOCUMENT READY