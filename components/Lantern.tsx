
import React from 'react';

const Lantern: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="lantern-swing w-24 h-32 md:w-32 md:h-44 bg-gradient-to-b from-yellow-300 to-orange-600 rounded-[60%_60%_40%_40%] shadow-[0_0_40px_10px_rgba(255,235,59,0.5)] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-amber-900 rounded-t-lg -mt-6"></div>
        <div className="absolute inset-[25%_15%] bg-radial-gradient from-white to-yellow-400 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] flicker"></div>
        <div className="absolute bottom-2 left-0 w-full flex justify-around opacity-30">
            <div className="w-1 h-8 bg-red-900"></div>
            <div className="w-1 h-8 bg-red-900"></div>
            <div className="w-1 h-8 bg-red-900"></div>
        </div>
      </div>
    </div>
  );
};

export default Lantern;
