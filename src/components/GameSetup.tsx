import { useState } from "react";

//Import components
import Board from "./Board";
import BoardOption from "./BoardOption";

//Import of types
import { Player, SquareValue } from "../types/types";

const boardOptions = [3, 5, 7];
const initialBoardSize = 3;

const GameSetup = () => {
  const [boardSize, setBoardSize] = useState(initialBoardSize);
  const [isStarted, setIsStarted] = useState(false);
  // State that holds both players moves
  const [moves, setMoves] = useState<SquareValue[]>(
    Array(boardSize * boardSize).fill(null)
  );

  //State that holds turns
  const [isXTurn, setIsXTurn] = useState(true);

  // States that holds draw, winner and indexes of winning line
  const [winner, setWinner] = useState<Player | null>(null);
  const [winnerLine, setWinnerLine] = useState<number[] | null>(null);
  const [isDraw, setIsDraw] = useState(false);

  const handleChangeSize: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newSize = Number(e.target.value);
    setBoardSize(newSize);
    setMoves(Array(newSize * newSize).fill(null));
    setWinner(null);
    setWinnerLine(null);
    setIsXTurn(true);
    setIsDraw(false);
  };

  const handleStart: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsStarted(true);
  };

  const handleRestart = () => {
    setIsStarted(false);
    setBoardSize(initialBoardSize);
    setMoves(Array(initialBoardSize * initialBoardSize).fill(null));
    setWinner(null);
    setWinnerLine(null);
    setIsXTurn(true);
    setIsDraw(false);
  };

  return (
    <>
      {isStarted ? (
        <Board
          boardSize={boardSize}
          handleRestart={handleRestart}
          isDraw={isDraw}
          setIsDraw={setIsDraw}
          moves={moves}
          setMoves={setMoves}
          winner={winner}
          setWinner={setWinner}
          isXTurn={isXTurn}
          setIsXTurn={setIsXTurn}
          winnerLine={winnerLine}
          setWinnerLine={setWinnerLine}
        />
      ) : (
        <>
          <h2 className="setup-heading">Choose board size:</h2>
          <p className="setup-instructions">
            On the 3x3 board, it's three in a row for victory. On the 5x5 and
            7x7 boards, it's four in a row.
          </p>
          <form className="setup-form" onSubmit={(e) => e.preventDefault()}>
            <div className="setup-inputs">
              {boardOptions.map((option) => (
                <BoardOption
                  key={option}
                  id={`size${option}`}
                  value={option}
                  checked={boardSize === option}
                  handleChangeSize={handleChangeSize}
                />
              ))}
            </div>
            <button type="button" className="buttons" onClick={handleStart}>
              Start Game!
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default GameSetup;
