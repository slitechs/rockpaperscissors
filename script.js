const SELECTIONS = ["rock", "paper", "scissors"];

      function computerPlay() {
          let computerSelect = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
          return computerSelect;
      }

        function playRound(playerSelection, computerSelection) {
          playerSelection = playerSelection.toLowerCase();
          if (playerSelection === computerSelection) {
            return `Tie!`;
          }
          else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
            return `You win!`;
          }
          else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
            return `You lose!`;
          }
          else {
            return "Please select rock, paper, or scissors.";
          }
      }

      function game() {
        const ROUNDS = 5;
        let playerChoice = "";
        let computerChoice = "";
        let result = "";
        let playerScore = 0;
        let computerScore = 0;
        for (let i = 0; i < ROUNDS; i++) {
            playerChoice = prompt("Please enter rock, paper, or scissors: ", "");
            computerChoice = computerPlay();
            console.log("------ Round: ", i + 1);
            console.log("Computer: ", computerChoice);
            result = playRound(playerChoice, computerChoice);
            console.log(result);
            // console.log("result.indexOf('win'): ", result.indexOf("win"));
            // console.log("result.indexOf('lose'): ", result.indexOf("lose"));
            if (result.indexOf("win") >= 0) {
                playerScore++;
            }
            else if (result.indexOf("lose") >= 0) {
                computerScore++;
            }
            else {
                // do nothing
            }
            console.log(`PLAYER SCORE: `, playerScore, `\r\nCOMPUTER SCORE: `, computerScore);
          }          
      }


      // const computerSelection = computerPlay();
      // console.log("Computer: ", computerSelection);
      // console.log(playRound('ROCk', computerSelection));
      
      game();