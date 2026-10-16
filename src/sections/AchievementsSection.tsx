import React from 'react';
import { Award, Compass, Presentation, Music } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const icons = [Award, Presentation, Compass, Music];

  return (
    <section id="achievements" className="py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#997B48] uppercase block mb-2">
            Section 06 · Distinctions & Roles
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B192C] tracking-tight">
            Leadership & Achievements
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A880] mt-3" />
          <p className="text-xs sm:text-sm text-[#64748B] mt-3">
            Recognized roles leading collegiate delegations, case study presentations, and co-curricular pursuits.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[#F7F5F0] border border-[#EBE7DF] text-[#0B192C] w-fit mb-4">
                    <Icon className="w-5 h-5 text-[#C5A880]" />
                  </div>

                  <span className="text-[11px] font-semibold text-[#997B48] uppercase tracking-wider block mb-1">
                    {item.highlight}
                  </span>

                  <h3 className="text-base font-serif font-bold text-[#0B192C] mb-1 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-medium text-[#1E3E62] mb-3">
                    {item.event}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Allenhouse B-School</span>
                  <span className="text-[#0B192C] font-semibold">Active Role</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
