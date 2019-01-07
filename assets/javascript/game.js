    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var userKey = "C";
    var randomChoice = (Math.floor(Math.random()*26));
    var answer = letters[randomChoice];
        console.log(answer); //making sure my random letter generator worked
        console.log("Don't Cheat!");
    var userText = document.getElementById("userGuesses");
    var newWins = document.getElementById("winCount");
    var newLosses = document.getElementById("lossCount");
    var newGuessesLeft = document.getElementById("guessCount");
    newWins.textContent = wins;
    newLosses.textContent = losses;
    newGuessesLeft.textContent = guessesLeft;
    
    document.onkeyup = function(event) {
        // userText.textContent = event.key;
        userKey = event.key;
        if(userKey==answer) {
            wins = wins+1;
            newWins.textContent = wins;
            guessesLeft = 9;
            newGuessesLeft.textContent = guessesLeft;
            userText.textContent = "";
            $(".userGuesses").empty();
            newAnswer = (Math.floor(Math.random()*26));
            answer = letters[newAnswer];
            console.log(answer); //making sure the new letter resets. Allows the player to cheat easily, however...
            console.log("Don't Cheat!"); 
        } else if(userKey != answer && letters.indexOf(userKey) != -1) {
            userText.insertAdjacentText('beforeend', userKey + ", ");
            guessesLeft = guessesLeft - 1;
            newGuessesLeft.textContent = guessesLeft;
            if(guessesLeft < 1) {
                losses = losses+1;
                newLosses.textContent = losses;
                guessesLeft = 9;
                newGuessesLeft.textContent = guessesLeft;
                userText.textContent = "";
                newAnswer = (Math.floor(Math.random()*26));
                answer = letters[newAnswer];
                console.log(answer); //makeing sure the new letter resets. Allows the player to cheat easily, however...
                console.log("Don't Cheat!"); 
            }  
        }  
    }

