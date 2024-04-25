//Import of types
import { Player } from "../types/types";

type SquareProps = {
  isDraw: boolean;
  handleTurn: (index: number) => void;
  index: number;
  value: Player | null;
  winnerLine: number[] | null;
  isXTurn: boolean;
};

const Square = ({
  isDraw,
  handleTurn,
  index,
  value,
  winnerLine,
  isXTurn,
}: SquareProps) => {
  return (
    <button
      //Use of winnerLine to apply styling on the squares in the winning line
      className={
        winnerLine && winnerLine.includes(index)
          ? "Square winning-square"
          : isDraw
          ? "Square"
          : isXTurn
          ? "Square x-turn"
          : "Square o-turn"
      }
      onClick={() => handleTurn(index)}
    >
      {value}
    </button>
  );
};

export default Square;
