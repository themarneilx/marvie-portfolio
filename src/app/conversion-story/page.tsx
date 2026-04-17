import React from 'react';
import { Heart, Sparkles, BookOpen } from 'lucide-react';
import DenimButton from '@/components/DenimButton';
import WhitePatch from '@/components/WhitePatch';

export default function ConversionStory() {
  return (
    <div className="min-h-screen bg-blue-800 relative py-12 px-4 sm:px-6 lg:px-8 font-sans"
         style={{
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
      <div className="max-w-4xl mx-auto relative z-10 mt-8 mb-16">
        
        {/* Header / Title Patch */}
        <div className="text-center mb-16">
          <p className="text-blue-200 tracking-widest uppercase font-semibold text-xs md:text-sm mb-4" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>A Story of Redirection</p>
          <div className="inline-block relative">
             <div className="bg-slate-50 py-5 px-10 md:py-6 md:px-12 rounded-[100%] shadow-2xl border-4 border-blue-900 relative z-10 transform -rotate-1">
                <div className="absolute inset-2 border-2 border-dashed border-blue-300 rounded-[100%]"></div>
                <h1 className="text-5xl md:text-6xl font-bold text-blue-800" style={{ fontFamily: "'Caveat', cursive" }}>
                  My Conversion Story
                </h1>
                <p className="text-blue-600 font-bold mt-2 text-xl md:text-2xl" style={{ fontFamily: "'Caveat', cursive" }}>From Interruption to Grace</p>
             </div>
          </div>
        </div>

        {/* Story Patches */}
        <WhitePatch title="A Quiet Undoing" icon={BookOpen}>
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 text-justify mb-6" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>
            Some moments do not just interrupt your plans—they quietly undo the person you thought you had to be.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 text-justify mb-6" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>
            For me, that moment came in my third year, when I failed a major course and realized I would have to delay my graduation by a year. What felt like a single academic setback quickly became something far more unsettling. As someone who had always defined herself through achievement, consistency, and doing things “right,” failure was not just unfamiliar—it was disorienting. It forced me to confront a version of myself I did not recognize: one that was no longer in control, no longer ahead, and no longer certain of what came next.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 text-justify" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>
            In the silence that followed, I wrestled with questions I had long avoided. If I am not excelling, who am I? If my plans do not unfold the way I intended, what remains of my direction? There was frustration, self-doubt, and a quiet grief for the timeline I had so carefully constructed. Accountancy, in many ways, humbled me. It stripped away my illusions of control and exposed how tightly I had been holding onto my own expectations.
          </p>
        </WhitePatch>

        <WhitePatch title="The Shift" icon={Sparkles}>
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 text-justify mb-6" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>
            Yet in that same space of uncertainty, something began to shift.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 text-justify mb-6" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>
            What once felt like a delay slowly revealed itself as an invitation—to wait, to trust, and to see differently. I began to notice a quiet beauty in not rushing, in allowing things to unfold without forcing them into my own timeline. The waiting, which I once resisted, became something I learned to hold with gentleness rather than fear. I found myself loosening my grip on certainty and, in doing so, discovering a deeper kind of peace.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 text-justify" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>
            I came to understand that this moment was not a rejection, but a redirection. That perhaps the path I had so carefully planned was never meant to be followed exactly as I imagined. Instead, I was being asked to trust in something greater than my own sense of control—to trust in God’s timing, even when it did not align with my own.
          </p>
        </WhitePatch>

        <WhitePatch title="Grace in the Waiting" icon={Heart}>
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 text-justify mb-6" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>
            This experience has changed the way I see both myself and my journey. I no longer measure my worth solely by how quickly or how perfectly I achieve things. I have learned to appreciate how far I have come, rather than fixating on how far behind I feel. More importantly, I have begun to believe that growth does not always happen in forward motion—sometimes, it unfolds in pauses, in detours, and in moments that seem like setbacks.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 text-justify mb-6" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>
            Now, I carry a quieter but firmer hope. I am learning to become someone who trusts, who waits, and who believes that blooming does not have to be rushed. I may not be where I once thought I would be, but I am becoming someone I might not have been otherwise.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-blue-800 font-bold italic text-center mt-10" style={{ fontFamily: "'Century Gothic', CenturyGothic, AppleGothic, sans-serif" }}>
            And perhaps that, in itself, is grace.
          </p>
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