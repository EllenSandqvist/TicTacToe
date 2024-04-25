//Import of types
import { Player } from "../types/types";

type OutcomeProps = {
  boardSize: number;
  isDraw: boolean;
  winner: Player | null;
  isXTurn: boolean;
};

const Outcome = ({ boardSize, isDraw, winner, isXTurn }: OutcomeProps) => {
  return (
    <h2
      style={{ marginTop: boardSize === 7 ? "1em" : "4em" }}
      className={
        winner ? "Outcome winner" : isDraw ? "Outcome draw" : "Outcome"
      }
    >
      {winner
        ? `The winner is ${winner}`
        : isDraw
        ? "Draw"
        : `Next player ${isXTurn ? "❌" : "🟢"}`}
    </h2>
  );
};

export default Outcome;
