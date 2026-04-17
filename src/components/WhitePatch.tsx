import React from 'react';

interface WhitePatchProps {
  children: React.ReactNode;
  title: string;
  icon?: React.ElementType;
}

const WhitePatch = ({ children, title, icon: Icon }: WhitePatchProps) => (
  <div className="relative bg-slate-50 text-slate-800 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden mb-16 transform transition-transform hover:-translate-y-1">
    {/* Stitched border inner */}
    <div className="absolute inset-3 border-[3px] border-dashed border-blue-300 rounded-[2.5rem] pointer-events-none"></div>
    
    <div className="relative z-10 flex flex-col items-center">
      {Icon && (
        <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-700 shadow-inner">
          <Icon size={32} />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900 tracking-tight" style={{ fontFamily: "'Fredoka', 'Quicksand', sans-serif" }}>
        {title}
      </h2>
      <div className="text-lg md:text-xl leading-relaxed text-slate-700 space-y-6 text-justify w-full max-w-4xl">
        {children}
      </div>
    </div>
  </div>
);

export default WhitePatch;
