type SquareProps = {
  handleTurn: (index: number) => void;
  index: number;
  value: string;
  xTurn: boolean;
};

const Square = ({ handleTurn, index, value, xTurn }: SquareProps) => {
  return (
    <button
      className={xTurn ? "Square x-turn" : "Square o-turn"}
      onClick={() => handleTurn(index)}
    >
      {value}
    </button>
  );
};

export default Square;
