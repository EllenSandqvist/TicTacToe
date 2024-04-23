import { useState } from "react";
import Board from "./Board";
import board3x3 from "../assets/board3x3.png";
import board5x5 from "../assets/board5x5.png";
import board7x7 from "../assets/board7x7.png";

const GameSetup = () => {
  const [boardSize, setBoardSize] = useState(9);
  const [isStarted, setIsStarted] = useState(false);

  const handleSize: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newSize = Number(e.target.value);
    console.log(newSize);
    setBoardSize(newSize);
  };

  const handleStart: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsStarted(!isStarted);
  };

  return (
    <>
      {isStarted ? (
        <Board boardSize={boardSize} handleStart={handleStart} />
      ) : (
        <>
          <h2>Choose board size:</h2>
          <form className="setup-form" onSubmit={(e) => e.preventDefault()}>
            <div className="setup-inputs">
              <div className="boardSize-div">
                <div className="boardSize-text">
                  <input
                    type="radio"
                    name="boardSize"
                    id="size9"
                    value={9}
                    checked={boardSize === 9}
                    onChange={handleSize}
                  />
                  <label htmlFor="size9"> 3x3</label>
                </div>
                <img src={board3x3} alt="game board 3x3 squares" />
              </div>
              <div className="boardSize-div">
                <div className="boardSize-text">
                  <input
                    type="radio"
                    name="boardSize"
                    id="size16"
                    value={25}
                    checked={boardSize === 25}
                    onChange={handleSize}
                  />
                  <label htmlFor="size16"> 5x5</label>
                </div>
                <img src={board5x5} alt="game board 5x5 squares" />
              </div>
              <div className="boardSize-div">
                <div className="boardSize-text">
                  <input
                    type="radio"
                    name="boardSize"
                    id="size25"
                    value={49}
                    checked={boardSize === 49}
                    onChange={handleSize}
                  />
                  <label htmlFor="size25"> 7x7</label>
                </div>
                <img src={board7x7} alt="game board 7x7 squares" />
              </div>
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
