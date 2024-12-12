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

// Função para lidar com os cliques do jogador
function handleCellClick(index) {
  // Se a célula já foi marcada ou o jogo já acabou, não faz nada
  if (gameState[index] !== "" || !gameActive) {
    return;
  }

  // Marca a célula com o jogador atual
  gameState[index] = currentPlayer;
  cells[index].innerText = currentPlayer;

  // Verifica se há um vencedor ou empate
  checkWinner();

  // Alterna para o próximo jogador
  switchPlayer();

  // Se for a vez da máquina, ela faz uma jogada após um pequeno intervalo
  if (gameActive && currentPlayer === "O") {
    setTimeout(machineMove, 500);
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
      gameActive = false; // Finaliza o jogo
      showWinner(gameState[a]); // Exibe a vitória
      return;
    }
  }

  // Verifica empate (se não houverem mais células vazias)
  if (!gameState.includes("")) {
    gameActive = false;
    showTie();
  }
}

// Função para exibir a vitória
function showWinner(player) {
  resultMessage.innerText = `${player} venceu!`;
  winModal.style.display = "flex";
}

// Função para exibir empate
function showTie() {
  resultMessage.innerText = "Empate!";
  winModal.style.display = "flex";
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

// Função que encontra o melhor movimento para a máquina (bloqueio e ataque)
function findBestMove(player) {
  let opponent = player === "X" ? "O" : "X";

  // Tenta bloquear o jogador ou ganhar
  for (let i = 0; i < 9; i++) {
    if (gameState[i] === "") {
      gameState[i] = player;
      if (checkWinFor(player)) {
        gameState[i] = "";
        return i; // Retorna o índice para ganhar
      }
      gameState[i] = "";

      gameState[i] = opponent;
      if (checkWinFor(opponent)) {
        gameState[i] = "";
        return i; // Retorna o índice para bloquear o oponente
      }
      gameState[i] = "";
    }
  }

  // Se não houver jogadas críticas, joga aleatoriamente
  let availableMoves = gameState
    .map((value, index) => (value === "" ? index : null))
    .filter((value) => value !== null);

  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
}

// Função que verifica se um jogador ganhou (para a máquina ou o oponente)
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
  gameActive = true; // Jogo ativado novamente
  cells.forEach((cell) => (cell.innerText = "")); // Limpa o tabuleiro
  winModal.style.display = "none"; // Fecha o modal de vitória
}

// Adiciona o evento de clique para as células
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleCellClick(index));
});
