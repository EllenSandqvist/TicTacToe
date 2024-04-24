//Import of types
import { SquareValue } from "../types/types";

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

  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
      const winningIndexes = [a, b, c];
      return { winner: moves[winningIndexes[0]], winningIndexes };
    }
  }
  return null;
}

export function checkWinnerLarge(moves: SquareValue[], boardSize: number) {
  const winningRowLength = 4;

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

  const winnerLines = [
    ...horizontalLines,
    ...verticalLines,
    ...diagonalLinesLeftToRight,
    ...diagonalLinesRightToLeft,
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
      const winningIndexes = [a, b, c, d];
      return { winner: moves[a], winningIndexes };
    }
  }
  return null;
}

// ***** FUNCTIONS TO FIND POSSIBLE WINNING LINES *****
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
export function checkDraw(moves: SquareValue[]) {
  return moves.every((move) => move !== null);
}
