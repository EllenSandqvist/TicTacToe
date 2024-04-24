import { useEffect } from "react";
import Square from "./Square";
import Outcome from "./Outcome";

//Import of functions for game logic
import {
  checkDraw,
  checkWinner3x3,
  checkWinnerLarge,
} from "../modules/gameLogic";

//Import of types
import { Player, SquareValue } from "../types/types";

type BoardProps = {
  boardSize: number;
  handleRestart: React.MouseEventHandler<HTMLButtonElement>;
  moves: SquareValue[];
  setMoves: React.Dispatch<React.SetStateAction<SquareValue[]>>;
  winner: Player | null;
  setWinner: React.Dispatch<React.SetStateAction<Player | null>>;
  winnerLine: number[] | null;
  setWinnerLine: React.Dispatch<React.SetStateAction<number[] | null>>;
  isXTurn: boolean;
  setIsXTurn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Board = ({
  boardSize,
  handleRestart,
  moves,
  setMoves,
  winner,
  setWinner,
  winnerLine,
  setWinnerLine,
  isXTurn,
  setIsXTurn,
}: BoardProps) => {
  const handleTurn = (i: number) => {
    //if square is already filled or if game is settled return
    if (moves[i] || winner || checkDraw(moves)) {
      return;
    }

    //copy the moves array
    const nextMoves = [...moves];

    //fill the right square with X or O
    nextMoves[i] = isXTurn ? "❌" : "🟢";

    setMoves(nextMoves);
    setIsXTurn(!isXTurn);
  };

  useEffect(() => {
    const winningLine =
      moves.length === 9
        ? checkWinner3x3(moves)
        : checkWinnerLarge(moves, boardSize);

    if (winningLine) {
      setWinner(winningLine.winner);
      setWinnerLine(winningLine.winningIndexes);
    }
  }, [moves]);

  const draw = checkDraw(moves);

  return (
    <>
      <Outcome
        boardSize={boardSize}
        draw={draw}
        winner={winner}
        isXTurn={isXTurn}
      />
      <div
        className="Board"
        style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}
      >
        {moves.map((_, index) => (
          <Square
            key={index}
            draw={draw}
            handleTurn={handleTurn}
            index={index}
            value={moves[index]}
            winnerLine={winnerLine}
            isXTurn={isXTurn}
          />
        ))}
      </div>
      <button className="buttons" onClick={handleRestart}>
        Restart
      </button>
    </>
  );
};

export default Board;
