//Import of types
import { Player } from "../types/types";

type SquareProps = {
  draw: boolean;
  handleTurn: (index: number) => void;
  index: number;
  value: Player | null;
  winnerLine: number[] | null;
  isXTurn: boolean;
};

const Square = ({
  draw,
  handleTurn,
  index,
  value,
  winnerLine,
  isXTurn,
}: SquareProps) => {
  return (
    <button
      className={
        winnerLine && winnerLine.includes(index)
          ? "Square winning-square"
          : draw
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
