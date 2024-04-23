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
  // use winner lines to check for winner
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c, d] = winnerLines[i];
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
    [3, 4, 5, 6],

    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],

    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],

    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],

    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],

    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],

    [42, 43, 44, 45],
    [43, 44, 45, 46],
    [44, 45, 46, 47],
    [45, 46, 47, 48],

    // Columns
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 10, 17, 24],
    [4, 11, 18, 25],
    [5, 12, 19, 26],
    [6, 13, 20, 27],

    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],

    [14, 21, 28, 35],
    [15, 22, 29, 36],
    [16, 23, 30, 37],
    [17, 24, 31, 38],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],

    [21, 28, 35, 42],
    [22, 29, 36, 43],
    [23, 30, 37, 44],
    [24, 31, 38, 45],
    [25, 32, 39, 46],
    [26, 33, 40, 47],
    [27, 34, 41, 48],
    // Diagonals
    //I riktning \
    [0, 8, 16, 24],
    [8, 16, 24, 32],
    [16, 24, 32, 40],
    [24, 32, 40, 48],

    [1, 9, 17, 25],
    [9, 17, 25, 33],
    [17, 25, 33, 41],

    [2, 10, 18, 26],
    [10, 18, 26, 34],

    [3, 11, 19, 27],

    [7, 15, 23, 31],
    [15, 23, 31, 39],
    [23, 31, 39, 47],

    [14, 22, 30, 38],
    [22, 30, 38, 46],

    [21, 29, 37, 45],

    //I riktning /
    [3, 9, 15, 21],

    [4, 10, 16, 22],
    [10, 16, 22, 28],

    [5, 11, 17, 23],
    [11, 17, 23, 29],
    [17, 23, 29, 35],

    [6, 12, 18, 24],
    [12, 18, 24, 30],
    [18, 24, 30, 36],
    [24, 30, 36, 42],

    [13, 19, 25, 31],
    [19, 25, 31, 37],
    [25, 31, 37, 43],

    [20, 26, 32, 38],
    [26, 32, 38, 44],

    [27, 33, 39, 45],
  ];

  // use winner lines to check for winner
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c, d] = winnerLines[i];
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

export function checkDraw(moves: string[]) {
  return moves.every((move) => move !== null);
}

//DEN HÄR KODEN FUNKAR FÖR HORISONTELLA LINJER:
const generateHorizontalLines = (boardSize: number, rowLength: number) => {
  const lines = [];

  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col <= boardSize - rowLength; col++) {
      const line = [];
      for (let i = 0; i < rowLength; i++) {
        line.push(row * boardSize + col + i);
      }
      lines.push(line);
    }
  }

  return lines;
};

// Använda funktionen för att generera vinnande horisontella rader
const winningHorizontalLines = generateHorizontalLines(7, 4);
// console.log(winningHorizontalLines);

//DEN HÄR KODEN FUNKAR FÖR HORISONTELLA LINJER:
const generateVerticalLines = (boardSize: number, rowLength: number) => {
  const lines = [];

  for (let col = 0; col < boardSize; col++) {
    for (let row = 0; row <= boardSize - rowLength; row++) {
      const line = [];
      for (let i = 0; i < rowLength; i++) {
        line.push((row + i) * boardSize + col);
      }
      lines.push(line);
    }
  }

  return lines;
};

// Använda funktionen för att generera vinnande vertikala linjer
const winningVerticalLines = generateVerticalLines(7, 4);
console.log(winningVerticalLines);
