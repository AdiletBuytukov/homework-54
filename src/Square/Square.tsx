import React from 'react';

interface Props {
  ring: boolean;
  squareOpen: boolean;
  onClick: () => void;
}

const Square: React.FC<Props> = ({ring, squareOpen, onClick}) => {
  const squareClass = squareOpen ? (ring ? 'square with-ring' : 'square') : 'square hidden';

  return (
    <div className={squareClass} onClick={onClick}>
      {squareOpen && ring && <span>О</span>}
    </div>
  );
};

export default Square;