import React from 'react';
import FilmStripItem from '@/components/FilmStripItem';
import { Heart, Compass, MapPin, Sparkles, Star } from 'lucide-react';

export default function JourneyMap() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] relative overflow-hidden font-sans text-gray-800 pb-20">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}></div>

      {/* Hero / Cover Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>

        <div className="z-10 bg-white/60 backdrop-blur-lg p-12 rounded-[3rem] shadow-xl border border-white/50 max-w-4xl w-full">
          <p className="text-pink-500 font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">AdDU BSA '26!</p>
          <h1 className="text-6xl md:text-8xl font-extrabold text-slate-800 mb-6" style={{ fontFamily: "'Caveat', cursive" }}>
            My Journey Map
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 mx-auto rounded-full mb-8"></div>
          <p className="text-2xl md:text-3xl text-slate-600 font-medium" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Ma. Marvie L. Bosque
          </p>
        </div>
      </section>

      {/* Meaningful Places Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-orange-100 text-orange-600 rounded-full mb-6 shadow-sm">
            <MapPin size={32} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6" style={{ fontFamily: "'Caveat', cursive" }}>Meaningful Places</h2>
          <p className="text-xl md:text-2xl text-slate-600 italic max-w-2xl mx-auto font-serif">
            "the quiet corners that held my biggest dreams and heard my earnest prayers"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="group relative overflow-hidden rounded-3xl shadow-lg h-96 transform hover:-translate-y-2 transition-all duration-300">
             <img src="/journey-images/img-000.png" alt="My Study Desk" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-8">
               <h3 className="text-white text-3xl font-bold" style={{ fontFamily: "'Quicksand', sans-serif" }}>My Study Desk</h3>
               <p className="text-white/80 mt-2 font-light">Where dreams were studied into reality</p>
             </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl shadow-lg h-96 transform hover:-translate-y-2 transition-all duration-300">
             <img src="/journey-images/img-033.png" alt="Univ Chapel" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-8">
               <h3 className="text-white text-3xl font-bold" style={{ fontFamily: "'Quicksand', sans-serif" }}>Univ Chapel</h3>
               <p className="text-white/80 mt-2 font-light">A sanctuary for earnest prayers</p>
             </div>
          </div>
        </div>
      </section>

      {/* Meaningful Values Section */}
      <section className="bg-slate-800 py-24 text-white relative z-10 overflow-hidden">
         {/* Subtle pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
         
         <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-blue-900/50 text-blue-300 border border-blue-700/50 rounded-full mb-8">
              <Sparkles size={32} />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300" style={{ fontFamily: "'Caveat', cursive" }}>Meaningful Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-200">Cura Personalis</h3>
                <p className="text-slate-400 leading-relaxed text-justify">Caring for the entire person—mind, body, and spirit—in a holistic approach that defines my interactions and goals.</p>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-pink-200">Men & Women for Others</h3>
                <p className="text-slate-400 leading-relaxed text-justify">A commitment to service, putting the needs of the community at the heart of my professional journey.</p>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-yellow-200">AMDG+</h3>
                <p className="text-slate-400 leading-relaxed text-justify">For the Greater Glory of God. Dedicating my achievements, hard work, and passions to a higher purpose.</p>
              </div>
            </div>
         </div>
      </section>

      {/* Meaningful Moments Section */}
      <section className="max-w-6xl mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-purple-100 text-purple-600 rounded-full mb-6 shadow-sm">
            <Compass size={32} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6" style={{ fontFamily: "'Caveat', cursive" }}>Meaningful Moments</h2>
          <p className="text-xl text-slate-500 font-medium">A timeline captured in film</p>
        </div>

        {/* Film Strips Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-5xl mx-auto">
           <FilmStripItem year="Freshie Yr" imageUrl="/journey-images/img-061.png" description="The beginning of the BSA journey. Learning the ropes, building friendships." />
           <FilmStripItem year="Sophie Year" imageUrl="/journey-images/img-083.png" description="Navigating intermediate accounting, overcoming doubts, and finding rhythm." />
           <FilmStripItem year="Junior Year" imageUrl="/journey-images/img-104.png" description="The hardest trials. Late night coffee, endless taxation laws, and pure grit." />
           <FilmStripItem year="Senior Year" imageUrl="/journey-images/img-142.png" description="The culmination. Integration program, thesis, and the final stretch to graduation." />
        </div>
      </section>

      {/* Meaningful People / Faith Section */}
      <section className="relative py-32 px-4 mt-10">
         <div className="absolute inset-0">
           <img src="/journey-images/img-191.png" alt="Meaningful People Background" className="w-full h-full object-cover filter brightness-50" />
           <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-transparent to-black/90"></div>
         </div>
         
         <div className="relative z-10 max-w-4xl mx-auto text-center text-white pt-20">
           <Heart className="mx-auto text-pink-400 mb-8" size={48} />
           <h2 className="text-6xl md:text-7xl font-bold mb-10" style={{ fontFamily: "'Caveat', cursive" }}>Meaningful People</h2>
           <div className="bg-black/40 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 inline-block">
             <p className="text-3xl md:text-5xl font-light italic" style={{ fontFamily: "'Quicksand', sans-serif" }}>
               "by faith, through grace"
             </p>
           </div>
         </div>
      </section>

    </div>
  );
}