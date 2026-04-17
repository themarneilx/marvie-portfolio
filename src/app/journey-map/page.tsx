"use client";

import React, { useState } from 'react';
import { Maximize, Minimize, Download } from 'lucide-react';

export default function JourneyMapPDF() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className={`min-h-screen bg-[#FDFBF7] font-sans text-gray-800 transition-all duration-500 ${isFullscreen ? 'p-0 flex flex-col fixed inset-0 z-[100]' : 'py-12 px-4 flex flex-col items-center'}`}>
      
      {/* Decorative Background when not fullscreen */}
      {!isFullscreen && (
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}></div>
      )}

      {/* Header when not fullscreen */}
      {!isFullscreen && (
        <div className="text-center mb-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
            My Journey Map
          </h1>
          <p className="text-xl text-slate-500 font-medium">AdDU BSA '26</p>
        </div>
      )}

      {/* PDF Container - Sleek Window Frame */}
      <div className={`relative z-10 bg-white shadow-2xl overflow-hidden flex flex-col transition-all duration-500 ${isFullscreen ? 'w-full h-full rounded-none' : 'w-full max-w-5xl rounded-3xl border border-slate-200'} `} style={{ height: isFullscreen ? '100%' : '75vh' }}>
        
        {/* Top Window Bar */}
        <div className="bg-slate-100/90 backdrop-blur px-4 py-3 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-inner cursor-pointer hover:bg-red-500 transition-colors" onClick={() => isFullscreen && setIsFullscreen(false)}></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-inner cursor-pointer hover:bg-yellow-500 transition-colors" onClick={() => setIsFullscreen(!isFullscreen)}></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-inner cursor-pointer hover:bg-green-500 transition-colors" onClick={() => setIsFullscreen(true)}></div>
            <span className="text-xs text-slate-500 font-medium ml-4 hidden sm:block tracking-wide">AdDU Journey Map.pdf</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="/journey-map.pdf" 
              download="BOSQUE_Ma_Marvie_AdDU_Journey_Map.pdf"
              className="text-slate-500 hover:text-slate-800 transition-colors p-1.5 rounded-md hover:bg-slate-200"
              title="Download PDF"
            >
              <Download size={18} />
            </a>
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)} 
              className="text-slate-500 hover:text-slate-800 transition-colors p-1.5 rounded-md hover:bg-slate-200"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
          </div>
        </div>

        {/* The PDF iframe */}
        <div className="w-full flex-grow relative bg-[#525659]">
           {/* Fallback loading/background color matches typical PDF viewers to make iframe blend better, 
               but the iframe itself will render the PDF with toolbar disabled. */}
           <iframe 
             src="/journey-map.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" 
             className="absolute inset-0 w-full h-full border-none"
             title="Journey Map PDF Document"
             style={{ backgroundColor: '#525659' }}
           />
        </div>

      </div>
    </div>
  );
}