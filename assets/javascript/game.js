// The player the computer has selected at random
var currentPlayer;
// create an array for the player guess string
var playerGuess = "";

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
        var i = Math.floor((Math.random() * this.players.length));
        // console.log(this.players[i]);
        currentPlayer = this.players[i].toUpperCase;
        // console.log(currentPlayer);
    },
    showAnswer: function () {
        document.getElementById("currentPlayerName").innerHTML = currentPlayer;
    },
    printGuess: function () {
        document.getElementById("currentPlayerGuess").innerHTML = playerGuess;
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
            this.printGuess();
        }
    },
    evaluateInput: function () {
        // This function is run whenever the user presses a key.
        document.onkeyup = function (event) {
            var currentLetter = event.key.toUpperCase;
            //Check if key is in currentPlayer
            if (currentPlayer.includes(currentLetter)) {
                // replace the _ with letter in playerGuess
                for (var i = 0; i < currentLetter.length; i++) {
                    if (currentPlayer.charAt(i) === currentLetter) {
                        currentPlayer.charAt(i) = currentLetter;
                    }
                }
            }
            // Update the screen output of currentPlayer
            this.printGuess();

        }
    },
};

hofPlayers.selectPlayer();
hofPlayers.showAnswer();
hofPlayers.createSpaces();
