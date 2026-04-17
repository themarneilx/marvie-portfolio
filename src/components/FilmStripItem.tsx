import React from 'react';

const FilmStripItem = ({ year, imageUrl, description }: { year: string, imageUrl?: string, description?: string }) => {
  return (
    <div className="bg-black p-4 rounded-md shadow-2xl my-8 transform hover:scale-[1.02] transition-transform duration-300">
      {/* Film negative holes top */}
      <div className="flex justify-between px-2 mb-3">
        {[...Array(12)].map((_, i) => (
          <div key={`top-${i}`} className="w-4 h-4 bg-white rounded-sm opacity-80"></div>
        ))}
      </div>
      
      <div className="bg-white/10 p-2 rounded">
        {imageUrl ? (
          <img src={imageUrl} alt={year} className="w-full h-64 object-cover rounded filter grayscale sepia-[.3] contrast-125" />
        ) : (
          <div className="w-full h-64 bg-slate-800 flex items-center justify-center rounded">
            <span className="text-white/50 text-xl font-mono">Image Placehodler</span>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-white font-bold text-2xl tracking-widest uppercase font-mono">{year}</h3>
        {description && <p className="text-gray-300 mt-2 font-mono text-sm">{description}</p>}
      </div>

      {/* Film negative holes bottom */}
      <div className="flex justify-between px-2 mt-4 pt-1 border-t border-white/20">
        {[...Array(12)].map((_, i) => (
          <div key={`bottom-${i}`} className="w-4 h-4 bg-white rounded-sm opacity-80"></div>
        ))}
      </div>
      <div className="text-yellow-500/80 font-mono text-xs tracking-widest mt-1 text-center">FILM NEGATIVE 13 A</div>
    </div>
  );
};

export default FilmStripItem;