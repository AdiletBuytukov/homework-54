import React, { useState } from 'react';
import './App.css';
import Square from './Square/Square.tsx';
import createItems from './Item/Item.tsx';

const App: React.FC = () => {
  const [items, setItems] = useState(createItems);
  const [attempts, setAttempts] = useState(0);

  const squareClick = (row: number, col: number) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[row][col].isOpen = true;
      return newItems;
    });
    setAttempts((prevAttempts) => prevAttempts + 1);
  };

  const handleReset = () => {
    setItems(createItems);
    setAttempts(0);
  };

  return (
    <div>
      <div className="game-board">
        {items.map((row, rowIndex) =>
          row.map((item, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`}
              ring={item.ring}
              squareOpen={item.isOpen}
              onClick={() => squareClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
      <div>
        <button onClick={handleReset} className="reset-btn">Reset</button>
        <p>Attempts: {attempts}</p>
      </div>
    </div>
  );
};

export default App;
