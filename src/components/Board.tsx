
import Square from "./Square";

type Player = 'X' | 'O' | null;

interface BoardProps {
  board: Player[];
  onSquareClick: (index: number) => void;
}

const Board = ({ board, onSquareClick }: BoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 p-4 bg-white rounded-xl shadow-lg">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
