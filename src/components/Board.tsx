import { useState } from "react";
import Square from "./Square";
import Outcome from "./Outcome";

import {
  checkDraw,
  checkWinner3x3,
  checkWinner5x5,
  checkWinner7x7,
} from "../modules/gameLogic";

type BoardProps = {
  boardSize: number;
  handleStart: React.MouseEventHandler<HTMLButtonElement>;
};

const Board = ({ boardSize, handleStart }: BoardProps) => {
  //State that holds turns
  const [xTurn, setXTurn] = useState(true);
  // State that holds both players moves
  const [moves, setMoves] = useState(Array(boardSize).fill(null));

  const handleTurn = (i: number) => {
    //if square is already filled return
    if (
      moves[i] || moves.length === 9
        ? checkWinner3x3(moves)
        : moves.length === 25
        ? checkWinner5x5(moves)
        : checkWinner7x7(moves)
    ) {
      return;
    } else if (checkDraw(moves)) {
      return;
    }
    //copy the moves array
    const nextMoves = [...moves];

    //fill the right square with X or O
    nextMoves[i] = xTurn ? "❌" : "🟢";

    setMoves(nextMoves);
    setXTurn(!xTurn);
  };

  const winner =
    moves.length === 9
      ? checkWinner3x3(moves)
      : moves.length === 25
      ? checkWinner5x5(moves)
      : checkWinner7x7(moves);
  const draw = checkDraw(moves);

  const numOfCol = Math.sqrt(boardSize);

  return (
    <>
      <Outcome draw={draw} winner={winner} xTurn={xTurn} />
      <div
        className="Board"
        style={{ gridTemplateColumns: `repeat(${numOfCol}, 1fr)` }}
      >
        {moves.map((_, index) => (
          <Square
            key={index}
            handleTurn={handleTurn}
            index={index}
            value={moves[index]}
            xTurn={xTurn}
            // winner={winner}
            // draw={draw}
          />
        ))}
      </div>
      <button className="buttons" onClick={handleStart}>
        Restart
      </button>
    </>
  );
};

export default Board;
