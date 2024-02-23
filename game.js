let userPoints = 0;
let computerPoints = 0;

let computerChoice;
function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = "Rock";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissor";
  }
}

function playGame(userMove) {

  var user = document.querySelector('.user');
  user.style.boxShadow = '0 4px 8px 0 rgb(15, 15, 15)';
  var computer = document.querySelector('.computer');
  computer.style.boxShadow = '0 4px 8px 0 rgb(15, 15, 15)';  

  generateComputerChoice();
  let result = gameResult(userMove);

  document.getElementById(
    "userMove"
  ).innerHTML = ` <img id="image" src="image/user.png" alt="image"> ${userMove}`; //User Move
  document.getElementById(
    "computerChoice"
  ).innerHTML = `<img id="image" src="image/computer.png" alt="image"> ${computerChoice}`; //Computer's Move
  document.getElementById(
    "result"
  ).innerHTML = `${trophy(result)} <span style="font-weight: bolder;">${result}</span>`; //Result:

  if (result === "You won") {
    userPoints++;
  } else if (result === "Computer won") {
    computerPoints++;
  } else {
    userPoints++;
    computerPoints++;
  }

  document.getElementById("points").innerHTML = `Points: ${userPoints}`;
  document.getElementById("points1").innerHTML = `Points: ${computerPoints}`;
}
function trophy(result) {
  if (result === "You won") {
    return `<img id="image" src="image/trophy1.jpeg" alt="Trophy">`;
  }
  return "";
}

function gameResult(userMove) {
  if (userMove === "Rock") {
    if (computerChoice === "Rock") {
      return "It's tie!";
    } else if (computerChoice === "Paper") {
      return "Computer won";
    }
    if (computerChoice === "Scissor") {
      return "You won";
    }
  } else if (userMove === "Paper") {
    if (computerChoice === "Rock") {
      return "You won";
    } else if (computerChoice === "Paper") {
      return "It's tie!";
    }
    if (computerChoice === "Scissor") {
      return "Computer won";
    }
  } else {
    if (computerChoice === "Rock") {
      return "Computer won";
    } else if (computerChoice === "Paper") {
      return "You won";
    }
    if (computerChoice === "Scissor") {
      return "It's tie!";
    }
  }
}
