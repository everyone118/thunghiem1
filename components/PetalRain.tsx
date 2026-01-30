
import React, { useMemo } from 'react';

const PetalRain: React.FC = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 15}s`,
      delay: `-${Math.random() * 10}s`,
      fontSize: `${20 + Math.random() * 25}px`,
      emoji: ['🌸', '🌺', '❀', '🌼'][Math.floor(Math.random() * 4)],
    }));
  }, []);

  return (
    <>
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            fontSize: p.fontSize,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </>
  );
};

export default PetalRain;
