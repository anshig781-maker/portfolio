import React from 'react';
import { ArrowDown, FileText, Sparkles, Building2, Award, FolderKanban } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-[#E2E8F0]/70 bg-gradient-to-b from-[#FAF9F5] via-[#FAF9F5] to-[#F5F2EA]">
      {/* Subtle architectural background line */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#0B192C_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Metadata kicker - unboxed text with typographic separator (Anti-slop compliant) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#997B48] uppercase mb-4">
              <span>BBA Student</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Finance & Marketing</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Business Operations</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B192C] tracking-tight leading-[1.15] text-balance">
              Hello, I'm {PERSONAL_INFO.name}.
            </h1>

            <p className="text-lg sm:text-xl lg:text-[22px] font-medium text-[#1E3E62] mt-3 font-serif leading-snug text-balance">
              Building my understanding of business, finance and innovation.
            </p>

            <p className="text-sm sm:text-base text-[#475569] mt-4 leading-relaxed max-w-xl">
              I'm a BBA student specializing in Finance and Marketing at Allenhouse Business School, passionate about business strategy, financial management, market research and innovative ideas that create real-world impact.
            </p>

            {/* Professional Tagline */}
            <div className="mt-5 py-2.5 px-4 bg-[#F2EDE2]/70 rounded-lg border border-[#E5DEC9] text-xs sm:text-sm font-medium text-[#0B192C] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>"{PERSONAL_INFO.tagline}"</span>
            </div>

            {/* Two Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mt-7">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0B192C] rounded-lg hover:bg-[#1E3E62] active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#0B192C] bg-white border border-[#CBD5E1] rounded-lg hover:bg-[#FAF9F5] hover:border-[#94A3B8] active:scale-[0.98] transition-all shadow-2xs"
              >
                <FileText className="w-4 h-4 text-[#C5A880]" />
                <span>Download My Resume</span>
              </button>
            </div>

            {/* Quiet sub-note */}
            <div className="mt-6 flex items-center gap-4 text-xs text-[#64748B]">
              <span>📍 {PERSONAL_INFO.location}</span>
              <span aria-hidden="true">·</span>
              <span>Allenhouse Business School</span>
            </div>
          </div>

          {/* Right Column: Profile Visual Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-xs sm:max-w-sm">
              {/* Outer decorative ivory/gold hairline border */}
              <div className="relative p-2.5 bg-white rounded-2xl border border-[#E2E8F0] shadow-md transition-transform duration-300 group-hover:-translate-y-1">
                <div className="overflow-hidden rounded-xl aspect-square bg-[#EFECE4] relative">
                  <img
                    src="/profile.jpg"
                    alt="Aanshi Gupta - BBA Student and Business Professional"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      // Fallback to stylized SVG portrait placeholder if needed
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-profile')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-profile w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B192C] to-[#1E3E62] text-white p-6 text-center';
                        fallback.innerHTML = `
                          <div class="w-20 h-20 rounded-full border-2 border-[#C5A880] flex items-center justify-center text-2xl font-serif font-bold text-[#C5A880] mb-3">AG</div>
                          <span class="font-serif font-semibold text-base">Aanshi Gupta</span>
                          <span class="text-xs text-slate-300 mt-1">BBA Student · Finance & Marketing</span>
                        `;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>

                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#0B192C] block font-serif">Aanshi Gupta</span>
                    <span className="text-[11px] text-[#64748B]">BBA 2nd Year · Allenhouse</span>
                  </div>
                  <span className="text-[11px] text-[#997B48] font-medium bg-[#F7F3E9] px-2 py-0.5 rounded border border-[#EBE4D5]">
                    Candidate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics & Highlights Row Below the Split */}
        <div className="mt-14 pt-8 border-t border-[#E2E8F0] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#0B192C] tabular-nums">
              8.30 <span className="text-xs font-sans text-[#64748B]">/ 10</span>
            </span>
            <span className="text-xs font-medium text-[#475569] mt-0.5">
              1st Year Academic Score
            </span>
            <span className="text-[11px] text-[#94A3B8]">Allenhouse Business School</span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#0B192C] tabular-nums">
              200+
            </span>
            <span className="text-xs font-medium text-[#475569] mt-0.5">
              KYC & Client Records Handled
            </span>
            <span className="text-[11px] text-[#94A3B8]">CA Firm Office Administration</span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#0B192C] tabular-nums">
              5
            </span>
            <span className="text-xs font-medium text-[#475569] mt-0.5">
              Operational Hub Divisions
            </span>
            <span className="text-[11px] text-[#94A3B8]">Gram-Tech Studio Framework</span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#0B192C] tabular-nums">
              3x
            </span>
            <span className="text-xs font-medium text-[#475569] mt-0.5">
              Team Leader Positions
            </span>
            <span className="text-[11px] text-[#94A3B8]">National Competitions & Forums</span>
          </div>
        </div>
      </div>
    </section>
  );
};
