const board = document.getElementById("board");
const cells = Array.from(document.getElementsByClassName("cell"));
let gameState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"; // X começa
let gameActive = true; // O jogo começa ativado

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winModal = document.getElementById("winModal");
const resultMessage = document.getElementById("resultMessage");

// Placar
let playerWins = 0; // Vitórias do jogador
let machineWins = 0; // Vitórias da máquina
let ties = 0; // Empates

const playerWinsDisplay = document.getElementById("playerWins");
const machineWinsDisplay = document.getElementById("machineWins");
const tiesDisplay = document.getElementById("ties");

// Função para lidar com os cliques do jogador
function handleCellClick(index) {
  if (gameState[index] !== "" || !gameActive) {
    return;
  }

  gameState[index] = currentPlayer;
  cells[index].innerText = currentPlayer;

  checkWinner();

  switchPlayer();

  if (gameActive && currentPlayer === "O") {
    setTimeout(machineMove, 200);
  }
}

// Função para alternar entre os jogadores
function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Função que verifica o vencedor ou empate
function checkWinner() {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      gameActive = false;
      showWinner(gameState[a]);
      return;
    }
  }

  if (!gameState.includes("")) {
    gameActive = false;
    showTie();
  }
}

// Função para exibir a vitória
function showWinner(player) {
  resultMessage.innerText = `${player} venceu!`;
  winModal.style.display = "flex";

  if (player === "X") {
    playerWins++;
    playerWinsDisplay.innerText = playerWins;
  } else if (player === "O") {
    machineWins++;
    machineWinsDisplay.innerText = machineWins;
  }
}

// Função para exibir empate
function showTie() {
  resultMessage.innerText = "Empate!";
  winModal.style.display = "flex";

  ties++;
  tiesDisplay.innerText = ties;
}

// Função que faz a jogada da máquina
function machineMove() {
  if (gameActive) {
    let bestMove = findBestMove("O");
    if (bestMove !== -1) {
      gameState[bestMove] = "O";
      cells[bestMove].innerText = "O";
      checkWinner();
      switchPlayer();
    }
  }
}

function findBestMove(player) {
  let opponent = player === "X" ? "O" : "X";

  for (let i = 0; i < 9; i++) {
    if (gameState[i] === "") {
      gameState[i] = player;
      if (checkWinFor(player)) {
        gameState[i] = "";
        return i;
      }
      gameState[i] = "";

      gameState[i] = opponent;
      if (checkWinFor(opponent)) {
        gameState[i] = "";
        return i;
      }
      gameState[i] = "";
    }
  }

  let availableMoves = gameState
    .map((value, index) => (value === "" ? index : null))
    .filter((value) => value !== null);

  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
}

function checkWinFor(player) {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      gameState[a] === player &&
      gameState[b] === player &&
      gameState[c] === player
    ) {
      return true;
    }
  }
  return false;
}

// Função para reiniciar o jogo
function resetGame() {
  gameState = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  cells.forEach((cell) => (cell.innerText = ""));
  winModal.style.display = "none";
}

// Adiciona o evento de clique para as células
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleCellClick(index));
});

const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", () => {
  resetGame();

  // Reseta os valores do placar
  playerWins = 0;
  machineWins = 0;
  ties = 0;

  playerWinsDisplay.innerText = playerWins;
  machineWinsDisplay.innerText = machineWins;
  tiesDisplay.innerText = ties;
});
