import React from 'react';
import {
  BadgeIndianRupee,
  TrendingUp,
  Compass,
  Truck,
  Users,
  Layers,
  Sparkles,
} from 'lucide-react';
import { CAREER_INTERESTS } from '../data/portfolioData';

export const CareerInterestsSection: React.FC = () => {
  const iconMap: Record<string, any> = {
    BadgeIndianRupee,
    TrendingUp,
    Compass,
    Truck,
    Users,
    Layers,
    Sparkles,
  };

  return (
    <section id="interests" className="py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#997B48] uppercase block mb-2">
            Section 07 · Professional Trajectory
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B192C] tracking-tight">
            Career Interests & Aspirations
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A880] mt-3" />
          <p className="text-xs sm:text-sm text-[#64748B] mt-3">
            Core business domains where I am eager to apply academic research, office administration, and problem-solving.
          </p>
        </div>

        {/* 7 Disciplines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAREER_INTERESTS.map((item, idx) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-[#F7F5F0] border border-[#EBE7DF] text-[#0B192C] w-fit mb-4">
                    <Icon className="w-5 h-5 text-[#C5A880]" />
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#0B192C] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>Applied Interest</span>
                  <span className="text-[#1E3E62] font-semibold">Priority Domain</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
