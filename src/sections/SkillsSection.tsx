import React from 'react';
import { Landmark, TrendingUp, Laptop, Users, Check } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const categoryIcons = [Landmark, TrendingUp, Laptop, Users];

  return (
    <section id="skills" className="py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#997B48] uppercase block mb-2">
            Section 04 · Functional Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B192C] tracking-tight">
            Skills & Competencies
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A880] mt-3" />
          <p className="text-xs sm:text-sm text-[#64748B] mt-3">
            Grounded in academic business management, CA-firm office operations, and competitive case frameworks.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS_DATA.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-[#F7F5F0] border border-[#EBE7DF] text-[#0B192C]">
                      <Icon className="w-5 h-5 text-[#C5A880]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#0B192C]">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-[#64748B]">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF9F5] border border-slate-200/60"
                      >
                        <span className="text-xs sm:text-[13px] font-medium text-slate-800">
                          {skill}
                        </span>
                        <Check className="w-3.5 h-3.5 text-[#1E3E62]" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>Applied in Academic & Office Practice</span>
                  <span className="font-semibold text-[#0B192C]">Core Capability</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
