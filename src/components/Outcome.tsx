//Import of types
import { Player } from "../types/types";

type OutcomeProps = {
  draw: boolean;
  winner: Player | null;
  isXTurn: boolean;
};

const Outcome = ({ draw, winner, isXTurn }: OutcomeProps) => {
  return (
    <h2
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
