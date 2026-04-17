import React from 'react';
import { Target, Heart, Compass, Map, Milestone, BookOpen, Scale, Award, HeartHandshake, Bookmark } from 'lucide-react';

// --- Aesthetic UI Components (Inspired by the uploaded image) ---

const DenimButton = ({ className = "" }) => (
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

const WhitePatch = ({ children, title, icon: Icon }: any) => (
  <div className="relative bg-slate-50 text-slate-800 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden mb-16 transform transition-transform hover:-translate-y-1">
    {/* Stitched border inner */}
    <div className="absolute inset-3 border-[3px] border-dashed border-blue-300 rounded-[2.5rem] pointer-events-none"></div>
    
    <div className="relative z-10 flex flex-col items-center">
      {Icon && (
        <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-700 shadow-inner">
          <Icon size={32} />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900 tracking-tight" style={{ fontFamily: "'Fredoka', 'Quicksand', sans-serif", lineHeight: "1.3" }}>
        {title}
      </h2>
      <div className="text-lg md:text-xl leading-relaxed text-slate-700 space-y-6 text-justify w-full max-w-4xl">
        {children}
      </div>
    </div>
  </div>
);

const TimelineItem = ({ year, title, description, icon: Icon, isLast }: any) => (
  <div className="flex flex-col md:flex-row gap-6 relative">
    {/* Vertical Line for Desktop */}
    {!isLast && <div className="hidden md:block absolute left-8 top-16 bottom-[-2rem] w-[3px] bg-dashed border-l-[3px] border-dashed border-blue-300 z-0"></div>}
    
    <div className="flex-none flex items-center md:items-start justify-center z-10">
      <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border-4 border-slate-50">
        <Icon size={24} />
      </div>
    </div>
    
    <div className="flex-grow bg-white bg-opacity-60 rounded-2xl p-6 shadow-sm border border-blue-100 hover:bg-opacity-100 transition-all">
      <div className="text-blue-800 font-bold text-xl mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>{title}</span>
        <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">{year}</span>
      </div>
      <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>{description}</p>
    </div>
  </div>
);

// --- Main Application ---

export default function App() {
  return (
    <div className="min-h-screen bg-blue-800 relative py-12 px-4 sm:px-6 lg:px-8 font-sans"
         style={{
           // Creating a denim-like texture using repeating linear gradients
           backgroundImage: `
             linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.9)),
             repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
             repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)
           `
         }}>
      
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

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto relative z-10 mt-8 mb-16">
        
        {/* Header / Title Patch */}
        <div className="text-center mb-16">
          <p className="text-blue-200 tracking-widest uppercase font-semibold text-xs md:text-sm mb-4" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>Senior's Integration Program</p>
          <div className="inline-block relative">
             <div className="bg-slate-50 py-5 px-10 md:py-6 md:px-12 rounded-[100%] shadow-2xl border-4 border-blue-900 relative z-10 transform -rotate-1">
                <div className="absolute inset-2 border-2 border-dashed border-blue-300 rounded-[100%]"></div>
                <h1 className="text-5xl md:text-6xl font-bold text-blue-800" style={{ fontFamily: "'Caveat', cursive" }}>
                  My Passion Plan
                </h1>
                <p className="text-blue-600 font-bold mt-2 text-xl md:text-2xl" style={{ fontFamily: "'Caveat', cursive" }}>The Journey of an AdDU Accountancy Student</p>
             </div>
          </div>

          {/* Student Details Tag */}
          <div className="mt-10 flex justify-center relative z-10">
            <div className="bg-blue-900/60 backdrop-blur-md border border-blue-300/40 rounded-2xl p-5 md:p-6 text-blue-50 shadow-xl text-sm md:text-base inline-block text-center relative overflow-hidden transform transition-all hover:scale-105">
              {/* Subtle inner stitched border */}
              <div className="absolute inset-1.5 border border-dashed border-blue-200/30 rounded-xl pointer-events-none"></div>
              
              <p className="font-bold text-white text-lg md:text-xl tracking-wide mb-3">by: MA. MARVIE BOSQUE</p>
              <div className="space-y-1 text-blue-100/90 font-medium">
                <p>ASF 4202 | Class 20-010</p>
                <p>Ms. Johna Marie Tabanguil</p>
                <p>10:30A - 12:30P (Wednesday)</p>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Personal Mission Statement */}
        <WhitePatch title="Personal Mission Statement" icon={Target}>
          <p className="text-xl md:text-2xl leading-relaxed text-slate-700 text-center font-medium px-4 md:px-8" style={{ fontFamily: "'Fredoka', 'Quicksand', sans-serif" }}>
            I seek to build a life’s work marked not only by excellence, but by a steady and unyielding integrity, recognizing that true success is not merely achieved but lived through service. What I once measured through accomplishment, I now understand as an opportunity to uplift others, allowing my profession to become a quiet instrument for community and human flourishing. Embracing <span className="font-bold text-blue-800">cura personalis</span>, I am learning that fulfillment lies not in reaching a single peak, but in choosing, each day, to care with intention, humility, and sincerity. Guided by the assurance of <span className="font-bold text-blue-800">Philippians 4:13—“I can do all things through Christ who strengthens me”</span>—I move forward with trust over control, committing to lead and serve in a way that extends beyond outcomes, so that my life’s work reflects meaning, faith, and a quiet, enduring conviction.
          </p>
        </WhitePatch>

        {/* 2. Prayer for My Future Self */}
        <WhitePatch title="Prayer for My Future Self" icon={Heart}>
          <div className="italic font-serif text-center px-4 md:px-12 text-blue-900 border-l-4 border-r-4 border-blue-200 py-6">
            <p className="mb-4">
              Lord, as I stand on the threshold of my professional journey, I lift my future self to You. 
              Guide my mind as I prepare for the rigorous trials ahead, and keep my heart steadfast when the hours grow long and the challenges heavy.
            </p>
            <p className="mb-4">
              Grant me the unwavering courage to always choose what is right over what is easy. When I am tempted to compromise my integrity, remind me of my roots and the truth I have promised to uphold.
            </p>
            <p className="mb-4">
              I pray for a future where I am not just successful, but deeply purposeful. Help me grow into a leader who mentors with compassion, a provider who loves generously, and a citizen who builds up our nation.
            </p>
            <p>
              Keep me <em>Fortes in Fide</em>—strong in faith. Remind me always that my ultimate vocation is to be a person for and with others. Amen.
            </p>
          </div>
        </WhitePatch>

        {/* 3. 10–20 Year Passion Plan */}
        <WhitePatch title="10–20 Year Passion Plan: Becoming a CPA-Lawyer for Justice and Purpose" icon={Compass}>
          <p className="text-center text-slate-600 mb-10 text-base md:text-lg italic" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>
            "A long path rising forward, starting at graduation and leading toward a life of impact."
          </p>

          <div className="space-y-10 md:space-y-12">
            <TimelineItem 
              year="Year 0–1"
              title="Review Season"
              description="Right after graduation, focusing fully on reviewing for the CPA board exam. Days are slow and disciplined. Progress feels small, but steady. There are doubts, pressure, and moments of fear—but also deep trust. Learning that waiting is not wasted time, but preparation."
              icon={BookOpen}
            />
            
            <TimelineItem 
              year="Years 1–3"
              title="Becoming a CPA"
              description="Passing the board exam and earning the CPA title. Stepping into the real world of work—learning, adjusting, growing. Building skills, confidence, and independence. Choosing to do things with honesty and excellence, even when no one is watching."
              icon={Award}
            />

            <TimelineItem 
              year="Years 3–5"
              title="Preparing for Something Bigger"
              description="Continuing to work while preparing for law school. Saving, planning, and strengthening the reason behind the dream. Staying close to advocacy—especially for women and justice. Knowing this next step is not just ambition, but calling."
              icon={Map}
            />

            <TimelineItem 
              year="Years 5–10"
              title="Law School Years"
              description="Entering law school and choosing to stay, even when it gets hard. Reading, writing, thinking deeply. Growing not just in knowledge, but in courage. Learning to speak, to question, and to stand firm. Holding on to purpose through every challenge."
              icon={Bookmark}
            />

            <TimelineItem 
              year="Years 10–12"
              title="Becoming a Lawyer"
              description="Passing the bar and becoming a lawyer. Carrying both titles: CPA and Lawyer. Stepping into a profession with power—and choosing to use it with care, fairness, and integrity."
              icon={Scale}
            />

            <TimelineItem 
              year="Years 12–15"
              title="Building a Meaningful Career"
              description="Using both skills—law and accountancy—to create real impact. Taking on work that matters. Standing for what is right, even when it is not easy. Becoming known not just for skill, but for values."
              icon={Milestone}
            />

            <TimelineItem 
              year="Years 15–20"
              title="Leadership and Legacy"
              description="Growing into a leader and an advocate. Lifting others, especially women. Speaking for those who are unheard. Creating change that lasts. Living a life that is not only successful—but meaningful, honest, and full of purpose."
              icon={HeartHandshake}
              isLast={true}
            />
          </div>
        </WhitePatch>

        {/* Footer */}
        <div className="text-center text-blue-200 mt-12 pb-8">
          <p className="font-semibold text-lg tracking-wide uppercase">Fortes in Fide</p>
          <p className="text-sm opacity-80 mt-2">Final Summative Assessment • Senior's Integration Program • AdDU</p>
        </div>

      </div>
    </div>
  );
}