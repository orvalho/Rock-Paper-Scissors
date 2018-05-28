var userChoice = prompt("Choose rock, paper or scissors!!!");
var computerChoice = Math.floor(Math.random() * 3);

switch (computerChoice) {
  case 0:
    computerChoice = "rock";
    break;
  case 1:
    computerChoice = "paper";
    break;
  default:
    computerChoice = "scissors";
}

function playGame (choice1, choice2) {
  choice1 = choice1.toLowerCase();
  console.log("User chose " + choice1 + ".");
  console.log("Computer chose " + choice2 + ".");
  if (choice1 === choice2) {
    console.log("It's a tie!!!");
  } else if (choice1 === "paper") {
    console.log(choice2 === "rock" ? "Paper wins!" : "Scissors wins!");
  } else if (choice1 === "rock") {
    console.log(choice2 === "paper" ? "Paper wins!" : "Rock wins!");
  } else if (choice1 === "scissors") {
    console.log(choice2 === "paper" ? "Scissors wins!" : "Rock wins!");
  } else if (choice1 !== "rock" && choice1 !== "paper" && choice2 !== "scissors") {
    console.log("You need to choose rock, paper or scissors!");
  }
}

playGame(userChoice, computerChoice);
