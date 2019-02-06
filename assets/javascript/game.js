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
    selectPlayer: function () {
        var i = Math.floor((Math.random() * this.players.length));
        // console.log(this.players[i]);
        currentPlayer = this.players[i];
        // console.log(currentPlayer);
    },
    showAnswer: function () {
        document.getElementById("currentPlayerName").innerHTML = currentPlayer;
    },
    createSpaces: function () {

        // count the length of the name

        for (var i = 0; i < currentPlayer.length; i++) {

            // create a _ for each letter and a space for each space and store it in a string

            if (currentPlayer.charAt(i) == " ") {
                // console.log(currentPlayer.charAt(i))
                playerGuess = playerGuess + " ";
            }
            else {
                // console.log(currentPlayer.charAt(i))
                playerGuess = playerGuess + "_";
            }

            // print that string to the #currentPlayerGuess id
        }
        // console.log(playerGuess);
        document.getElementById("currentPlayerGuess").innerHTML = playerGuess;
    }
};

hofPlayers.selectPlayer();
hofPlayers.showAnswer();
hofPlayers.createSpaces();
