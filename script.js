let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(cellIndex) {
  if (gameActive && board[cellIndex] === '') {
    board[cellIndex] = currentPlayer;
    document.querySelectorAll('.cell')[cellIndex].textContent = currentPlayer;
    checkForWin();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('status').textContent = `Vez do Jogador ${currentPlayer}`;
}

function checkForWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      gameActive = false;
      document.getElementById('status').textContent = `Jogador ${board[a]} venceu!`;
    }
  }

  if (board.every((cell) => cell !== '')) {
    gameActive = false;
    document.getElementById('status').textContent = 'Empate!';
  }
}

function resetBoard() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('status').textContent = 'Vez do Jogador X';
  document.querySelectorAll('.cell').forEach((cell) => cell.textContent = '');
}

// Inicia o jogo
document.getElementById('status').textContent = 'Vez do Jogador X';
