// Variables globales
let currentPlayer = "X";
let gameEnded = false;
const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

// Fonction appelée lorsqu'une case est cliquée
function cellClicked(row, col) {
  if (gameEnded || board[row][col] !== "") {
    return;
  }

  board[row][col] = currentPlayer;
  document.getElementById(`cell-${row}-${col}`).innerText = currentPlayer;
  
  if (checkWin(currentPlayer)) {
    endGame(`${currentPlayer} a gagné !`);
  } else if (checkDraw()) {
    endGame("Match nul !");
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

// Fonction pour vérifier si un joueur a gagné
function checkWin(player) {
  // Vérification des lignes
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      return true;
    }
  }

  // Vérification des colonnes
  for (let j = 0; j < 3; j++) {
    if (
      board[0][j] === player &&
      board[1][j] === player &&
      board[2][j] === player
    ) {
      return true;
    }
  }

  // Vérification des diagonales
  if (
    (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  ) {
    return true;
  }

  return false;
}

// Fonction pour vérifier s'il y a match nul
function checkDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}

// Fonction pour terminer le jeu
function endGame(message) {
  gameEnded = true;
  alert(message);
}

// Création de la grille du morpion dans le HTML
window.addEventListener("DOMContentLoaded", function () {
  const boardContainer = document.getElementById("board-container");
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.id = `cell-${i}-${j}`;
      cell.addEventListener("click", function () {
        cellClicked(i, j);
      });
      boardContainer.appendChild(cell);
    }
  }
});