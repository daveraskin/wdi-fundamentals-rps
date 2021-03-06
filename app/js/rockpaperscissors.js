

function getInput() {
    
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getPlayerMove(move) {
    
    return move || getInput();
}

function getComputerMove(move) {
    
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    if (playerMove == "scissors" && computerMove == "paper") {
        winner = "player";
    }
    else if (playerMove == "paper" && computerMove == "rock") {
        winner = "player";
    }
    else if (playerMove == "rock" && computerMove == "scissors") {
        winner = "player";
    }
    else if (playerMove == "paper" && computerMove == "scissors") {
        winner = "computer";
    }
    else if (playerMove == "rock" && computerMove == "paper") {
        winner = "computer";
    }
    else if (playerMove == "scissors" && computerMove == "rock") {
        winner = "computer";
    }
    else if (playerMove == "paper" && computerMove == "paper") {
        console.log ("There's been a tie!");
    }
    else if (playerMove == "rock" && computerMove == "rock") {
        console.log ("There's been a tie!");
    }
    else if (playerMove == "scissors" && computerMove == "scissors") {
        console.log ("There's been a tie!");
    }
    else {console.log ("Please choose 'rock', 'paper', or 'scissors'."); }
    
   
   
    
    return winner;
    
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors! Start by entering 'rock', 'paper' or 'scissors'!");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        console.log("The computer threw a " + computerMove + " against your " + playerMove);
        var winner = getWinner(playerMove,computerMove);
        if (winner == "player") {
                 playerWins += 1;
                 console.log("You've Won!");
                 
                  console.log("The score is currently " + playerWins + " to " + computerWins );
            }
        else if (winner == "computer") {
                computerWins += 1;
                console.log ("You've lost to the computer. Harsh!");
                
                console.log("The score is currently " + playerWins + " to " + computerWins );
            }
        else {  console.log("The score is currently " + playerWins + " to " + computerWins );

        }
    }
    if (playerWins == 5) {console.log("Thanks for playing! Congrats!")}
    else {console.log("Thanks for playing! Better luck next time!")}
}

playToFive();