let userScore = 0;
let computerScore = 0;


/* Computer Choice */
const computerPlay = () => {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let computerInput = choices[Math.floor(Math.random() * 3)];
    return computerInput;
  }



const playRound = (playerSelection, computerSelection, userScore, computerScore) => {
    const win = { ROCK: "SCISSORS", PAPER: "ROCK", SCISSORS: "PAPER" };
    if (win[playerSelection] === computerSelection) {
        userScore++;
    } else if (win[computerSelection] === playerSelection) {
        computerScore++;
    } 
}


const main = () => {
    while(userScore<5 && computerScore<5){
        let playerSelection = window.prompt("Enter your choice: (Rock, Paper, Scissors).");
        if (playerSelection !== null) {
            playerSelection = playerSelection.trim().toUpperCase();
          } else if (playerSelection === null) {
            playerSelection = 'cancel';
          }
      
          if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS") {
            let computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
          }
    }
    console.log("The Game is over")
    if(userScore>4){
        console.log("You win");
    }
    else{
        console.log("You lose");
    }
}

main();