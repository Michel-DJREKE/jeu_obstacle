
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Board from "./Board";

type Player = 'X' | 'O' | null;

const TicTacToe = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<Player>(null);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  const checkWinner = (board: Player[]): Player => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const isBoardFull = (board: Player[]): boolean => {
    return board.every(cell => cell !== null);
  };

  const handleSquareClick = (index: number) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameOver(true);
      toast({
        title: "🎉 Victoire !",
        description: `Le joueur ${gameWinner} a gagné !`,
      });
    } else if (isBoardFull(newBoard)) {
      setGameOver(true);
      toast({
        title: "Match nul !",
        description: "Personne n'a gagné cette partie.",
      });
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameOver(false);
    setWinner(null);
    toast({
      title: "Nouvelle partie",
      description: "Le jeu a été réinitialisé !",
    });
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-center">
        {!gameOver ? (
          <p className="text-xl font-semibold text-gray-700">
            Tour du joueur: <span className="text-blue-600">{currentPlayer}</span>
          </p>
        ) : (
          <p className="text-xl font-semibold">
            {winner ? (
              <span className="text-green-600">Joueur {winner} a gagné ! 🎉</span>
            ) : (
              <span className="text-orange-600">Match nul ! 🤝</span>
            )}
          </p>
        )}
      </div>

      <Board board={board} onSquareClick={handleSquareClick} />

      <Button 
        onClick={resetGame}
        className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
      >
        Nouvelle partie
      </Button>
    </div>
  );
};

export default TicTacToe;
