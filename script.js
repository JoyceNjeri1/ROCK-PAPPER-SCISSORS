// Create a function that returns a random choice from rock, paper, or scissors.
function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let bothTie = 0;

  function getHumanChoice() {
    return prompt(
      `What Do You Choose?\nYou: ${humanScore}\nComputer: ${computerScore}`
    );
  }

  function playRound(human, computer) {
    human = human.toLowerCase();

    console.log(human, computer);

    if (human === computer) {
      console.log(`It's a TIE! You both chose ${computer}.`);
      alert(`It's a TIE! You both chose ${computer}.`);
      bothTie++;
    } else if (
      (human === "rock" && computer === "scissors") ||
      (human === "paper" && computer === "rock") ||
      (human === "scissors" && computer === "paper")
    ) {
      console.log(`You won this round! ${human} beats ${computer}.`);
      alert(`You won this round! ${human} beats ${computer}.`);
      humanScore++;
    } else {
      console.log(`You lost this round! ${computer} beats ${human}.`);
      alert(`You lost this round! ${computer} beats ${human}.`);
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore === computerScore) {
    console.log(
      `It's a TIE! You won ${humanScore} rounds, lost ${computerScore}, and tied ${bothTie} out of 5.`
    );
    alert(
      `It's a TIE! You won ${humanScore} rounds, lost ${computerScore}, and tied ${bothTie} out of 5.`
    );
  } else if (humanScore > computerScore) {
    console.log(
      `You won the game! You won ${humanScore} rounds, lost ${computerScore}, and tied ${bothTie} out of 5.`
    );
    alert(
      `You won the game! You won ${humanScore} rounds, lost ${computerScore}, and tied ${bothTie} out of 5.`
    );
  } else {
    console.log(
      `You lost the game! You lost ${computerScore} rounds, won ${humanScore} rounds, and tied ${bothTie} out of 5.`
    );
    alert(
      `You lost the game! You lost ${computerScore} rounds, won ${humanScore} rounds, and tied ${bothTie} out of 5.`
    );
  }
}

playGame();