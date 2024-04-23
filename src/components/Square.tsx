type SquareProps = {
  draw: boolean;
  handleTurn: (index: number) => void;
  index: number;
  value: string;
  winner: string | null;
  xTurn: boolean;
};

const Square = ({
  draw,
  handleTurn,
  index,
  value,
  winner,
  xTurn,
}: SquareProps) => {
  return (
    <button
      className={
        winner || draw ? "Square" : xTurn ? "Square x-turn" : "Square o-turn"
      }
      onClick={() => handleTurn(index)}
    >
      {value}
    </button>
  );
};

export default Square;
