export function checkWinner3x3(moves: string[]) {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
      return moves[a];
    }
  }
  return null;
}

export function checkWinner5x5(moves: string[]) {
  const winnerLines = [
    // Rows
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [6, 7, 8, 9],
    [10, 11, 12, 13],
    [11, 12, 13, 14],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [20, 21, 22, 23],
    [21, 22, 23, 24],
    // Columns
    [0, 5, 10, 15],
    [1, 6, 11, 16],
    [2, 7, 12, 17],
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    [5, 10, 15, 20],
    [6, 11, 16, 21],
    [7, 12, 17, 22],
    [8, 13, 18, 23],
    [9, 14, 19, 24],
    // Diagonals
    [0, 6, 12, 18],
    [1, 7, 13, 19],
    [2, 8, 14, 20],
    [3, 7, 11, 15],
    [4, 8, 12, 16],
    [5, 11, 17, 23],
    [9, 13, 17, 21],
    [10, 14, 18, 22],
    [11, 15, 19, 23],
    [12, 16, 20, 24],
  ];

  checkFourInRowWinner(moves, winnerLines);
}

function checkFourInRowWinner(moves: string[], lines: number[][]) {
  // use winner lines to check for winner
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (
      moves[a] &&
      moves[a] === moves[b] &&
      moves[a] === moves[c] &&
      moves[a] === moves[d]
    ) {
      console.log("vinnaren är: " + moves[a]);
      return moves[a];
    }
  }
  return null;
}

export function checkWinner7x7(moves: string[]) {
  const winnerLines = [
    // Rows
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [6, 7, 8, 9],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [13, 14, 15, 16],
    [14, 15, 16, 17],
    [18, 19, 20, 21],
    [19, 20, 21, 22],
    [20, 21, 22, 23],
    [24, 25, 26, 27],
    [25, 26, 27, 28],
    [26, 27, 28, 29],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [32, 33, 34, 35],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
    // Columns
    [0, 6, 12, 18],
    [1, 7, 13, 19],
    [2, 8, 14, 20],
    [3, 9, 15, 21],
    [4, 10, 16, 22],
    [5, 11, 17, 23],
    [6, 12, 18, 24],
    [7, 13, 19, 25],
    [8, 14, 20, 26],
    [9, 15, 21, 27],
    [10, 16, 22, 28],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [13, 19, 25, 31],
    [14, 20, 26, 32],
    [15, 21, 27, 33],
    [16, 22, 28, 34],
    [17, 23, 29, 35],
    // Diagonals
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],
  ];

  checkFourInRowWinner(moves, winnerLines);
}

export function checkDraw(moves: string[]) {
  return moves.every((move) => move !== null);
}
