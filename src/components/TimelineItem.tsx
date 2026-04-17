import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  isLast?: boolean;
}

const TimelineItem = ({ year, title, description, icon: Icon, isLast }: TimelineItemProps) => (
  <div className="flex flex-col md:flex-row gap-6 relative">
    {/* Vertical Line for Desktop */}
    {!isLast && <div className="hidden md:block absolute left-8 top-16 bottom-[-2rem] w-[3px] bg-dashed border-l-[3px] border-dashed border-blue-300 z-0"></div>}
    
    <div className="flex-none flex items-center md:items-start justify-center z-10">
      <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border-4 border-slate-50">
        <Icon size={24} />
      </div>
    </div>
    
    <div className="flex-grow bg-white bg-opacity-60 rounded-2xl p-6 shadow-sm border border-blue-100 hover:bg-opacity-100 transition-all">
      <div className="text-blue-800 font-bold text-xl mb-1 flex items-center justify-between">
        <span>{title}</span>
        <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{year}</span>
      </div>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
);

export default TimelineItem;
