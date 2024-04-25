//Import img of boards
import board3x3 from "../assets/board3x3.png";
import board5x5 from "../assets/board5x5.png";
import board7x7 from "../assets/board7x7.png";

type BoardOptionsProps = {
  id: string;
  checked: boolean;
  handleChangeSize: React.ChangeEventHandler<HTMLInputElement>;
  value: number;
};

const BoardOptions = ({
  id,
  checked,
  handleChangeSize,
  value,
}: BoardOptionsProps) => {
  return (
    //The choosen board get the "active" className
    <div className={`boardSize-div ${checked ? "active" : ""}`}>
      <input
        type="radio"
        name="boardSize"
        id={id}
        value={value}
        checked={checked}
        onChange={handleChangeSize}
        //radio button hidden, the user can press the label tag instead
        style={{ display: "none" }}
      />
      <label className="boardOption-label" htmlFor={id}>
        {value}x{value}
        <img
          src={value === 3 ? board3x3 : value === 5 ? board5x5 : board7x7}
          alt={`game board ${value}x${value} squares`}
        />
      </label>
    </div>
  );
};

export default BoardOptions;
