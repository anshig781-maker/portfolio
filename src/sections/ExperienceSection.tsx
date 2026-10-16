import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, FileSpreadsheet } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#997B48] uppercase block mb-2">
            Section 03 · Practical Office Exposure
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B192C] tracking-tight">
            Professional Experience
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A880] mt-3" />
        </div>

        {/* Experience Showcase Card */}
        {EXPERIENCE_DATA.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 shadow-xs hover:border-[#CBD5E1] transition-all"
          >
            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#F7F5F0] border border-[#EBE7DF] text-[#0B192C] shrink-0 mt-0.5">
                  <Briefcase className="w-6 h-6 text-[#C5A880]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B192C]">
                    {exp.role}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#1E3E62] mt-0.5">
                    {exp.company}
                  </p>
                  <p className="text-xs text-[#64748B] flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                    <span>{exp.location}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end justify-center">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B192C] bg-[#F4F0E8] px-3.5 py-1.5 rounded-lg border border-[#E5DEC9]">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span className="tabular-nums">{exp.period}</span>
                </div>
                <span className="text-[11px] text-[#64748B] mt-1.5 font-medium">
                  Completed Summer Internship
                </span>
              </div>
            </div>

            {/* Core Responsibilities */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B192C] mb-4">
                Key Responsibilities & Office Contributions
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div
                    key={rIdx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF9F5] border border-slate-200/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1E3E62] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Skills Gained (Clean text with typographic separators, zero pills) */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B192C] block mb-1">
                  Practical Competencies Gained
                </span>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#475569]">
                  {exp.skillsGained.map((skill, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="font-medium text-[#1E293B]">{skill}</span>
                      {sIdx < exp.skillsGained.length - 1 && (
                        <span aria-hidden="true" className="text-[#C5A880]">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#64748B] shrink-0">
                <FileSpreadsheet className="w-4 h-4 text-[#0B192C]" />
                <span>200+ Verified Records Handled</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
