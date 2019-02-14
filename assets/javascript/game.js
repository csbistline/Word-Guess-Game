// HALL OF FAMER IN QUESTION
var currentPlayer;

// WHAT THE PLAYER HAS GUESSED RIGHT SO FAR - begins as empty string
var playerGuess = "";

// WHAT THE PLAYER HAS GUESSED WRONG SO FAR - begins as empty string
var wrongAnswers = "";

// Initialize the wrong answer counter
var answersLeft;
var maxAnswers = 12;



var hofPlayers = {
    gameWins: 0,
    gameLosses: 0,
    playerImage: "",
    isGameOver: true,
    defaultImage: "assets/images/150x150.png",
    soundWin: "assets/sounds/cheer.wav",
    soundLose: "assets/sounds/boo.wav",
    takeMeOut: "assets/sounds/ballgame.mp3",

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
        "Bob Gibson",
        "Jimmie Foxx",
        "Ford Frick",
        "Lou Gehrig",
        "Josh Gibson",
        "Ken Griffey Jr",
        "Vladimir Guerrero",
        "Tony Gwynn",
        "Rickey Henderson",
        "Rogers Hornsby",
        "Reggie Jackson",
        "Randy Johnson",
        "Chipper Jones",
        "Sandy Koufax"
    ],

    // FUNCTIONS

    selectPlayer: function () {
        // reset all variables to begin new game
        this.isGameOver = false;
        wrongAnswers = "";
        playerGuess = "";
        answersLeft = maxAnswers;

        // reset the answer counter to max number
        document.getElementById("guessesRemaining").innerHTML = answersLeft;

        // reset lettersUsed to empty
        document.getElementById("lettersUsed").innerHTML = wrongAnswers;



        // randomly select a HOFer from the list
        var i = Math.floor((Math.random() * this.players.length));
        currentPlayer = this.players[i];
        // console.log(i);

        //assign picture url to string
        this.playerImage = "assets/images/" + currentPlayer + ".jpg";

        // reset startButton text and make invisible
        var myButton = document.getElementById("startButton");
        myButton.value = "Play again?";
        myButton.style.visibility = "hidden";
        // document.getElementById("startButton").value = "Play again?";

    },
    showAnswer: function () {
        document.getElementById("currentPlayerName").innerHTML = currentPlayer;
        document.getElementById("playerPic").src = this.playerImage;
        var myButton = document.getElementById("startButton");
        // myButton.value = "Play again?";
        myButton.style.visibility = "visible";


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
            var currentKeycode = event.keyCode;

            ////////////////////////////////////////////////////////////
            // if the game isn't over, process the keystroke, otherwise ignore it

            if (!this.isGameOver && this.validateInput()) {

                // make everything uppercase to compare
                currentLetter = currentLetter.toUpperCase();
                var playerUppercase = currentPlayer.toUpperCase();

                ////////////////////////////////////////////////////////////
                //Check if currentLetter is in currentPlayer

                if (playerUppercase.includes(currentLetter)) {
                    // replace the _ with letter in playerGuess
                    for (var i = 0; i < playerUppercase.length; i++) {
                        if (playerUppercase.charAt(i) == currentLetter) {
                            playerGuess = playerGuess.substr(0, i) + currentLetter + playerGuess.substr(i + 1);

                            // Update the screen output of currentPlayer with playerGuess
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
                ////////////////////////////////////////////////////////////


                ////////////////////////////////////////////////////////////
                //EVALUATE WIN OR LOSS CONDITION

                if (playerGuess === playerUppercase) {
                    // YOU WIN
                    // change messages on screen, show answers
                    document.getElementById("guessMessage").innerHTML = "You got it!";
                    this.showAnswer();

                    //increment win counter and display to screen
                    this.gameWins++;
                    document.getElementById("playerWins").innerHTML = "Wins: " + this.gameWins;

                    // set game over flag to true so game resets
                    this.isGameOver = true;

                    // play a cheering sound
                    var audio = new Audio(this.soundWin);
                    audio.play();

                } else if (answersLeft === 0) {
                    // YOU LOSE
                    // change messages on screen, update player name and picture
                    document.getElementById("guessMessage").innerHTML = "You didn't get it.";
                    this.showAnswer();

                    //increment loss counter and display to screen
                    this.gameLosses++;
                    document.getElementById("playerLosses").innerHTML = "Losses: " + this.gameLosses;

                    // set isGameOverFlag
                    this.isGameOver = true;

                    // play a booing sound
                    var audio = new Audio(this.soundLose);
                    audio.play();
                }
                ////////////////////////////////////////////////////////////

            }
            ////////////////////////////////////////////////////////////
        }.bind(this);
    },
    playGame: function () {
        if (this.isGameOver) {
            this.selectPlayer();
            this.createSpaces();
            this.resetPlayer();
            this.evaluateInput();
        }
        else if (confirm("Are you sure you want to restart?")) {
            this.selectPlayer();
            this.createSpaces();
            this.resetPlayer();
            this.evaluateInput();
        }
    },
    resetPlayer: function () {
        document.getElementById("guessMessage").innerHTML = "Guess the Hall of Famer";
        document.getElementById("currentPlayerName").innerHTML = "Keep guessing...";
        document.getElementById("playerPic").src = this.defaultImage;
    },
    validateInput: function (val) {
        // Check if keyCode of currentLetter is between a-z
        if (65 <= val && val <= 90) {
            return true;
        }
        else {
            return false;
        }
    },
};


