import React from 'react';

const DenimButton = ({ className = "" }: { className?: string }) => (
  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500 shadow-[inset_0_-4px_6px_rgba(0,0,0,0.3),0_4px_10px_rgba(0,0,0,0.5)] flex items-center justify-center border-4 border-blue-700 relative ${className}`}>
    {/* Inner rim */}
    <div className="absolute inset-1 border-2 border-blue-400 rounded-full opacity-50"></div>
    {/* 4 Button Holes */}
    <div className="grid grid-cols-2 gap-2 md:gap-3 z-0">
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-900 shadow-inner"></div>
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-900 shadow-inner"></div>
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-900 shadow-inner"></div>
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-900 shadow-inner"></div>
    </div>
    {/* White Thread X */}
    <div className="absolute inset-0 flex items-center justify-center z-10 drop-shadow-md">
      <div className="w-6 h-1.5 md:w-8 md:h-2 bg-slate-100 rotate-45 rounded-full absolute"></div>
      <div className="w-6 h-1.5 md:w-8 md:h-2 bg-slate-100 -rotate-45 rounded-full absolute"></div>
    </div>
  </div>
);

export default DenimButton;
