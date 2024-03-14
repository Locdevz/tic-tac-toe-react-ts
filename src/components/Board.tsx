import React from "react";
import Square from "./Square";
import { calculateWinner } from "../helpers/calculateWinner";
type BoardProps = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
};

const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };
  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {[0, 1, 2].map((i) => {
          return (
            <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
          );
        })}
        {/* <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> */}
        {/* <Square value={squares[1]} onSquareClick={() => handleClick(1)} /> */}
        {/* <Square value={squares[2]} onSquareClick={() => handleClick(2)} /> */}
      </div>
      <div className="board-row">
        {[3, 4, 5].map((i) => {
          return (
            <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
          );
        })}
      </div>
      <div className="board-row">
        {[6, 7, 8].map((i) => {
          return (
            <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
          );
        })}
      </div>
    </>
  );
};

export default Board;
