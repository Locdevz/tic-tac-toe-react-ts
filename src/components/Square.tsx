import React from "react";
type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <div className="square" onClick={onSquareClick}>
      {value}
    </div>
  );
};

export default Square;
