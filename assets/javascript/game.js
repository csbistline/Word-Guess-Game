// HALL OF FAMER IN QUESTION
var currentPlayer;

// WHAT THE PLAYER HAS GUESSED RIGHT SO FAR - begins as empty string
var playerGuess = "";

// WHAT THE PLAYER HAS GUESSED WRONG SO FAR - begins as empty string
var wrongAnswers = "";

// Initialize the wrong answer counter
var answersLeft = 10;



var hofPlayers = {
    gameWins: 0,
    gameLosses: 0,
    playerImage: "",
    isGameOver: true,

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
        // set game over to false to begin new game
        this.isGameOver = false;
        // reset the playerGuess variable
        playerGuess = "";
        // randomly select a HOFer from the list
        var i = Math.floor((Math.random() * this.players.length));
        currentPlayer = this.players[i];

        //assign picture url to string
        this.playerImage = "assets/images/" + currentPlayer + ".jpg";
        console.log(this.playerImage);

    },
    showAnswer: function () {
        document.getElementById("currentPlayerName").innerHTML = currentPlayer;
        document.getElementById("playerPic").src = this.playerImage;

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

            // make everything uppercase to compare
            var currentLetter = event.key;
            currentLetter = currentLetter.toUpperCase();
            var playerUppercase = currentPlayer.toUpperCase();

            //Check if currentLetter is in currentPlayer
            if (playerUppercase.includes(currentLetter)) {
                // replace the _ with letter in playerGuess
                for (var i = 0; i < playerUppercase.length; i++) {
                    if (playerUppercase.charAt(i) == currentLetter) {
                        playerGuess = playerGuess.substr(0, i) + currentLetter + playerGuess.substr(i + 1);

                        // Update the screen output of currentPlayer
                        document.getElementById("currentPlayerGuess").innerHTML = playerGuess;
                    }
                }
            }
            else if (!wrongAnswers.includes(currentLetter)) {
                // the resonse is wrong, get the wrong answer string
                wrongAnswers = document.getElementById("lettersUsed").innerHTML;

                // add the current letter to the wrong answer string and display it
                wrongAnswers = wrongAnswers + currentLetter;
                document.getElementById("lettersUsed").innerHTML = wrongAnswers;

                // decrement the counter by one and display it
                answersLeft--;
                document.getElementById("guessesRemaining").innerHTML = answersLeft;
            }
            //EVALUATE WIN OR LOSS CONDITION
            if (playerGuess === playerUppercase) {

                // change messages on screen, show answers
                document.getElementById("guessMessage").innerHTML = "You got it!";
                hofPlayers.showAnswer();

                //increment win counter and display to screen
                hofPlayers.gameWins++;
                document.getElementById("playerWins").innerHTML = "Wins: " + hofPlayers.gameWins;

                // confirm("You won! Would you like to play again?");
                hofPlayers.isGameOver = true;

                // start a new game
                hofPlayers.playGame();

            } else if (answersLeft === 0) {
                // change messages on screen, update player name and picture
                document.getElementById("guessMessage").innerHTML = "You didn't get it.";
                hofPlayers.showAnswer();

                //increment loss counter and display to screen
                hofPlayers.gameLosses++;
                document.getElementById("playerLosses").innerHTML = "Losses: " + hofPlayers.gameLosses;

                // set isGameOverFlag
                hofPlayers.isGameOver = true;


                // WHY IS THIS EXECUTING BEFORE THE SCREEN UPDATES?
                // start a new game
                hofPlayers.playGame();
            }
        }
    },
    playGame: function () {
        // if game over is set to true and user confirms to play, then execute these functions
        var confirmPlay = confirm("Would you like to play?")
        if (this.isGameOver || confirmPlay) {
            this.selectPlayer();
            this.createSpaces();
            this.evaluateInput();
        }
    }
};

// MAIN EXECUTION OF GAME
hofPlayers.playGame();
