"use client";

import React, { useState } from 'react';
import { Maximize, Minimize } from 'lucide-react';
import DenimButton from '@/components/DenimButton';

export default function JourneyMapPDF() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className={`min-h-screen bg-blue-800 font-sans text-gray-800 transition-all duration-500 ${isFullscreen ? 'p-0 flex flex-col fixed inset-0 z-[100]' : 'relative py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center'}`}
         style={!isFullscreen ? {
           // Creating a denim-like texture using repeating linear gradients
           backgroundImage: `
             linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.9)),
             repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
             repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)
           `
         } : {}}>
      
      {!isFullscreen && (
        <>
          {/* Background Outer Stitching (like the image) */}
          <div className="absolute inset-4 md:inset-8 border-[4px] border-dashed border-white/40 pointer-events-none rounded-3xl z-0"></div>

          {/* 4 Corner Buttons */}
          <DenimButton className="absolute top-0 left-0 -mt-6 -ml-6 md:-mt-8 md:-ml-8 scale-75 md:scale-100" />
          <DenimButton className="absolute top-0 right-0 -mt-6 -mr-6 md:-mt-8 md:-mr-8 scale-75 md:scale-100" />
          <DenimButton className="absolute bottom-0 left-0 -mb-6 -ml-6 md:-mb-8 md:-ml-8 scale-75 md:scale-100" />
          <DenimButton className="absolute bottom-0 right-0 -mb-6 -mr-6 md:-mb-8 md:-mr-8 scale-75 md:scale-100" />

          {/* Inject Handwritten Font */}
          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');`}
          </style>

          {/* Header / Title Patch */}
          <div className="text-center mb-10 mt-4 relative z-10">
            <p className="text-blue-200 tracking-widest uppercase font-semibold text-xs md:text-sm mb-4" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>AdDU BSA '26</p>
            <div className="inline-block relative">
              <div className="bg-slate-50 py-4 px-10 md:py-6 md:px-14 rounded-[100%] shadow-2xl border-4 border-blue-900 relative z-10 transform -rotate-1">
                  <div className="absolute inset-2 border-2 border-dashed border-blue-300 rounded-[100%]"></div>
                  <h1 className="text-4xl md:text-6xl font-bold text-blue-800" style={{ fontFamily: "'Caveat', cursive" }}>
                    My Journey Map
                  </h1>
              </div>
            </div>
          </div>
        </>
      )}

      {/* PDF Container - Sleek Window Frame */}
      <div className={`relative z-10 bg-white shadow-2xl overflow-hidden flex flex-col transition-all duration-500 ${isFullscreen ? 'w-full h-full rounded-none' : 'w-full max-w-7xl rounded-3xl border-4 border-blue-900'} `} style={{ height: isFullscreen ? '100%' : '85vh' }}>
        
        {/* Top Window Bar */}
        <div className={`bg-slate-100/90 backdrop-blur px-4 py-3 flex items-center justify-between border-b border-slate-200 ${!isFullscreen ? 'border-b-4 border-blue-900' : ''}`}>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-inner cursor-pointer hover:bg-red-500 transition-colors" onClick={() => isFullscreen && setIsFullscreen(false)}></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-inner cursor-pointer hover:bg-yellow-500 transition-colors" onClick={() => setIsFullscreen(!isFullscreen)}></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-inner cursor-pointer hover:bg-green-500 transition-colors" onClick={() => setIsFullscreen(true)}></div>
            <span className="text-xs text-slate-500 font-medium ml-4 hidden sm:block tracking-wide">AdDU Journey Map.pdf</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)} 
              className="text-slate-500 hover:text-slate-800 transition-colors p-1.5 rounded-md hover:bg-slate-200"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
          </div>
        </div>

        {/* The PDF embed */}
        <div className="w-full flex-grow relative bg-[#525659]">
           {/* Fallback loading/background color matches typical PDF viewers to make embed blend better */}
           <embed 
             src="/journey-map.pdf#toolbar=0&navpanes=0&scrollbar=0" 
             type="application/pdf"
             className="absolute inset-0 w-full h-full border-none"
             title="Journey Map PDF Document"
             style={{ backgroundColor: '#525659' }}
           />
        </div>

      </div>

      {!isFullscreen && (
        <div className="text-center text-blue-200 mt-12 pb-8 relative z-10 w-full">
          <p className="font-semibold text-lg tracking-wide uppercase">Fortes in Fide</p>
          <p className="text-sm opacity-80 mt-2">Final Summative Assessment • Senior's Integration Program • AdDU</p>
        </div>
      )}
    </div>
  );
}