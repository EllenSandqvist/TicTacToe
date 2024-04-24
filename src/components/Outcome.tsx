//Import of types
import { Player } from "../types/types";

type OutcomeProps = {
  boardSize: number;
  draw: boolean;
  winner: Player | null;
  isXTurn: boolean;
};

const Outcome = ({ boardSize, draw, winner, isXTurn }: OutcomeProps) => {
  return (
    <h2
      style={{ marginTop: boardSize === 7 ? "1em" : "4em" }}
      className={winner ? "Outcome winner" : draw ? "Outcome draw" : "Outcome"}
    >
      {winner
        ? `The winner is ${winner}`
        : draw
        ? "Draw"
        : `Next player ${isXTurn ? "❌" : "🟢"}`}
    </h2>
  );
};

export default Outcome;
