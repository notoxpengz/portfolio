'use client';

import React from 'react';

interface RhombusGridProps {
  rows?: number;
  cols?: number;
  className?: string;
}

const RhombusGrid: React.FC<RhombusGridProps> = ({ 
  rows = 8, 
  cols = 12, 
  className = '' 
}) => {
  const diamonds = [];
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const delay = (row + col) * 0.1;
      diamonds.push(
        <div
          key={`diamond-${row}-${col}`}
          className="w-4 h-4 bg-gradient-to-br from-blue-400/10 to-purple-400/10 transform rotate-45 border border-blue-200/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:from-blue-400/20 hover:to-purple-400/20"
          style={{
            animationDelay: `${delay}s`,
            gridColumn: col + 1,
            gridRow: row + 1,
          }}
        />
      );
    }
  }
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className="grid gap-2 opacity-80 animate-pulse"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {diamonds}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/10 pointer-events-none" />
    </div>
  );
};

export default RhombusGrid;
