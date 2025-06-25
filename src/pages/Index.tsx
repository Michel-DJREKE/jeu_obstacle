
import TicTacToe from "@/components/TicTacToe";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tic-Tac-Toe
        </h1>
        <TicTacToe />
      </div>
    </div>
  );
};

export default Index;
