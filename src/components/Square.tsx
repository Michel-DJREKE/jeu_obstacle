
type Player = 'X' | 'O' | null;

interface SquareProps {
  value: Player;
  onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps) => {
  return (
    <button
      onClick={onClick}
      className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-lg 
                 hover:bg-gray-100 hover:border-gray-300 transition-all
                 flex items-center justify-center text-3xl font-bold
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {value && (
        <span className={value === 'X' ? 'text-blue-600' : 'text-red-600'}>
          {value}
        </span>
      )}
    </button>
  );
};

export default Square;
