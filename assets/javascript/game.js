// HALL OF FAMER IN QUESTION
var currentPlayer;

// WHAT THE PLAYER HAS GUESSED RIGHT SO FAR - begins as empty string
var playerGuess = "";

// WHAT THE PLAYER HAS GUESSED WRONG SO FAR - begins as empty string
var wrongAnswers = "";

var hofPlayers = {
    gameWins: 0,
    gameLosses: 0,
    players: [
        "Hank Aaron",
        "Johnny Bench",
        "Wade Boggs",
        "Lou Brock",
        "George Brett",
        "Rod Carew",
        "Roberto Clemente",
        "Andre Dawson",
        "Dizzy Dean",
        "Joe DiMaggio",
        "Bob Gibson"
    ],

    // FUNCTIONS

    selectPlayer: function () {
        // reset the playerGuess variable
        playerGuess = "";
        // randomly select a HOFer from the list
        var i = Math.floor((Math.random() * this.players.length));
        // console.log(this.players[i]);
        currentPlayer = this.players[i];
        console.log(currentPlayer);
    },
    showAnswer: function () {
        document.getElementById("currentPlayerName").innerHTML = currentPlayer;
    },
    createSpaces: function () {

        // count the length of the name

        for (var i = 0; i < currentPlayer.length; i++) {

            // create a _ for each letter and a space for each space and store it in a string

            if (currentPlayer.charAt(i) == " ") {
                playerGuess = playerGuess + " ";
            }
            else {
                playerGuess = playerGuess + "_";
            }

            // print that string to the #currentPlayerGuess id
            document.getElementById("currentPlayerGuess").innerHTML = playerGuess;
        }
    },
    evaluateInput: function () {
        // This function is run whenever the user presses a key.
        document.onkeyup = function (event) {
            var currentLetter = event.key;
            currentLetter = currentLetter.toUpperCase();
            // console.log("You selected: " + currentLetter);
            var playerUppercase = currentPlayer.toUpperCase();
            //Check if key is in currentPlayer
            if (playerUppercase.includes(currentLetter)) {
                // replace the _ with letter in playerGuess
                for (var i = 0; i < playerUppercase.length; i++) {
                    // console.log("Letter at " + i + " is " + playerUppercase.charAt(i))
                    if (playerUppercase.charAt(i) == currentLetter) {
                        // console.log("Matches");
                        playerGuess = playerGuess.substr(0, i) + currentLetter + playerGuess.substr(i + 1);
                        // console.log(playerGuess);
                        // Update the screen output of currentPlayer
                        document.getElementById("currentPlayerGuess").innerHTML = playerGuess;
                    }
                }
            }
            else if {
                // letter has already been used, do nothing
                // copy from above tomorrow...
            }
            } else {
        // console.log("in else statement1")
        var wrongAnswers = document.getElementById("lettersUsed").innerHTML;
        // console.log("in else statement2")
        // console.log(wrongAnswers);
        // console.log("in else statement3")
        wrongAnswers = wrongAnswers + currentLetter;
        document.getElementById("lettersUsed").innerHTML = wrongAnswers;
        // console.log("in else statement4")
        // console.log(wrongAnswers);
    }
}
    },
};



hofPlayers.selectPlayer();
// hofPlayers.showAnswer();
hofPlayers.createSpaces();
hofPlayers.evaluateInput();
