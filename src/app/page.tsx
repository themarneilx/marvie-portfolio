import React from 'react';
import { Target, Heart, Compass, Milestone, BookOpen, Scale, HeartHandshake } from 'lucide-react';
import DenimButton from '@/components/DenimButton';
import WhitePatch from '@/components/WhitePatch';
import TimelineItem from '@/components/TimelineItem';

export default function Home() {
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
          <p className="text-xl md:text-2xl leading-relaxed text-slate-700 text-center font-medium italic px-4 md:px-8" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>
            To forge a career of profound success anchored in unyielding integrity, transforming my profession into a catalyst for community upliftment and human progress. Embracing <span className="font-bold text-blue-800">cura personalis</span>, my ultimate pursuit is not mere professional triumph, but a quiet, enduring contentment found in making a meaningful impact on every life I am privileged to touch. Guided by the unwavering conviction of <span className="font-bold text-blue-800">Philippians 4:13: "I can do all things through Christ who strengthens me,"</span> I commit to serving with purpose, ensuring my life's work echoes far beyond the balance sheet as a testament to diligent care and authentic leadership.
          </p>
        </WhitePatch>

        {/* 2. Prayer for My Future Self */}
        <WhitePatch title="Prayer for My Future Self" icon={Heart}>
          <div className="italic font-serif text-center px-4 md:px-12 text-blue-900 border-l-4 border-r-4 border-blue-200 py-6">
            <p className="mb-4">
              "Lord, as I stand on the threshold of my professional journey, I lift my future self to You. 
              Guide my mind as I prepare for the rigorous trials ahead, and keep my heart steadfast when the hours grow long and the challenges heavy."
            </p>
            <p className="mb-4">
              "Grant me the unwavering courage to always choose what is right over what is easy. When I am tempted to compromise my integrity, remind me of my roots and the truth I have promised to uphold. May my skills in accountancy be an instrument of Your justice and truth in the corporate world."
            </p>
            <p className="mb-4">
              "I pray for a future where I am not just successful, but deeply purposeful. Help me grow into a leader who mentors with compassion, a provider who loves generously, and a citizen who builds up our nation."
            </p>
            <p>
              "Keep me <em>Fortes in Fide</em>—strong in faith. Remind me always that my ultimate vocation is to be a person for and with others. Amen."
            </p>
          </div>
        </WhitePatch>

        {/* 3. 10–20 Year Passion Plan */}
        <WhitePatch title="10–20 Year Passion Plan" icon={Compass}>
          <p className="text-center text-slate-600 mb-10 text-base md:text-lg">
            A long-term roadmap outlining my envisioned vocation as a Certified Public Accountant, focusing on ethical leadership and creating a life of purpose.
          </p>

          <div className="space-y-10 md:space-y-12">
            <TimelineItem 
              year="Years 1–3"
              title="The Foundation: Licensure & Early Practice"
              description="Graduate with honors from AdDU. Successfully pass the rigorous CPA Licensure Examination (CPALE). Begin my career as an Audit Associate at a prestigious auditing firm (e.g., SGV/EY, PwC) to build a robust foundation in assurance, tax, and corporate systems."
              icon={BookOpen}
            />
            
            <TimelineItem 
              year="Years 4–7"
              title="Mastery & Expanding Horizons"
              description="Ascend to a Senior Auditor or Managerial role. Deepen my expertise in risk management and corporate governance. During this phase, I plan to either pursue an MBA to sharpen my strategic business acumen or enter Law School (Ateneo Law) to specialize in corporate and tax law."
              icon={Scale}
            />

            <TimelineItem 
              year="Years 8–12"
              title="Leadership & Vocation"
              description="Transition from external audit to a high-level Corporate Finance role (e.g., Financial Controller or budding CFO) or establish my own consulting firm in Davao. Marry the love of my life and begin building a family grounded in faith and mutual respect."
              icon={Milestone}
            />

            <TimelineItem 
              year="Years 13–20"
              title="Legacy, Giving Back, & Purpose"
              description="Attain the position of CFO or Managing Partner. Actively give back by establishing a scholarship fund for underprivileged accountancy students in Mindanao. Dedicate time to teaching part-time at AdDU to mold the next generation of ethical CPAs. Maintain a beautiful balance between a thriving family life, my faith, and my profession."
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