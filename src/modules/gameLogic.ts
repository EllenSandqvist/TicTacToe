//Import of types
import { SquareValue } from "../types/types";

//Separate function to check for winner on the small board
export function checkWinner3x3(moves: SquareValue[]) {
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
  // loop through all possible winning lines and check if the checkers in the line are of same kind
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
      const winningIndexes = [a, b, c];
      //return both winner and indexes for winning line
      return { winner: moves[a], winningIndexes };
    }
  }
  return null;
}

// Function to check for a winner on 5x5 and 7x7 board
export function checkWinnerLarge(moves: SquareValue[], boardSize: number) {
  //to win on 5x5 or 7x7 board 4 checkers in a row is needed
  const winningRowLength = 4;

  //call functions to get all possible winnings lines
  const horizontalLines = generateHorizontalLines(boardSize, winningRowLength);

  const verticalLines = generateVerticalLines(boardSize, winningRowLength);

  const diagonalLinesLeftToRight = generateDiagonalLinesLeftToRight(
    boardSize,
    winningRowLength
  );

  const diagonalLinesRightToLeft = generateDiagonalLinesRightToLeft(
    boardSize,
    winningRowLength
  );

  // combine all possible winninglines in winnerLines
  const winnerLines = [
    ...horizontalLines,
    ...verticalLines,
    ...diagonalLinesLeftToRight,
    ...diagonalLinesRightToLeft,
  ];

  // loop through all possible winnerLines to check for winner
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c, d] = winnerLines[i];
    if (
      moves[a] &&
      moves[a] === moves[b] &&
      moves[a] === moves[c] &&
      moves[a] === moves[d]
    ) {
      const winningIndexes = [a, b, c, d];
      //return both winner and indexes for winning line
      return { winner: moves[a], winningIndexes };
    }
  }
  return null;
}

// ***** FUNCTIONS TO FIND POSSIBLE WINNING LINES *****

//Function to find all possible horizontal winning lines
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

//Function to find all possible vertical winning lines
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

//Function to find all possible diagonal from left to right winning lines
const generateDiagonalLinesLeftToRight = (
  boardSize: number,
  rowLength: number
) => {
  const lines = [];

  for (let row = 0; row <= boardSize - rowLength; row++) {
    for (let col = 0; col <= boardSize - rowLength; col++) {
      const line = [];
      for (let i = 0; i < rowLength; i++) {
        line.push((row + i) * boardSize + col + i);
      }
      lines.push(line);
    }
  }

  return lines;
};

//Function to find all possible diagonal from right to left winning lines
const generateDiagonalLinesRightToLeft = (
  boardSize: number,
  rowLength: number
) => {
  const lines = [];

  for (let row = 0; row <= boardSize - rowLength; row++) {
    for (let col = boardSize - 1; col >= rowLength - 1; col--) {
      const line = [];
      for (let i = 0; i < rowLength; i++) {
        line.push((row + i) * boardSize + col - i);
      }
      lines.push(line);
    }
  }

  return lines;
};

// ***** FUNCTION TO CHECK FOR DRAW *****
// are run after check for winner, so this will only run if there is no winner
export function checkDraw(moves: SquareValue[]) {
  return moves.every((move) => move !== null);
}
