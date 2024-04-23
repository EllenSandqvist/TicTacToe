type OutcomeProps = {
  draw: boolean;
  winner: string | null;
  xTurn: boolean;
};

const Outcome = ({ draw, winner, xTurn }: OutcomeProps) => {
  return (
    <h2
      className={winner ? "Outcome winner" : draw ? "Outcome draw" : "Outcome"}
    >
      {winner
        ? `The winner is ${winner}`
        : draw
        ? "Draw"
        : `Next player ${xTurn ? "❌" : "🟢"}`}
    </h2>
  );
};

export default Outcome;
