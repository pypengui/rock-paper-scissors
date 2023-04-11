// Define an array of options
const options = ["rock", "paper", "scissors"];

// Get computer choice randomly
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Play one round of the game and determine the winner
function playRound(playerChoice, computerChoice) {
  // Determine the winner or if it's a tie
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Play the game for a specified number of rounds
function playGame(numRounds) {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < numRounds; i++) {
    // Get player choice from prompt
    let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();

    // Validate player choice
    while (!options.includes(playerChoice)) {
      playerChoice = prompt(
        "Invalid choice! Please choose rock, paper, or scissors."
      ).toLowerCase();
    }

    // Get computer choice and play the round
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    console.log(`Round ${i + 1}: ${result}`);

    // Update scores
    if (result === "You win!") {
      playerScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }
  }

  // Determine the winner of the game
  if (playerScore === computerScore) {
    console.log("It's a tie game!");
  } else if (playerScore > computerScore) {
    console.log(
      `Congratulations, you win the game with a score of ${playerScore}-${computerScore}!`
    );
  } else {
    console.log(
      `Sorry, you lose the game with a score of ${playerScore}-${computerScore}. Better luck next time!`
    );
  }
}

// Play the game for 5 rounds
playGame(5)