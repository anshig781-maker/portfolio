import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#997B48] uppercase block mb-2">
            Section 02 · Academic Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B192C] tracking-tight">
            Education
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A880] mt-3" />
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F7F5F0] border border-[#EBE7DF] text-[#0B192C]">
                    <GraduationCap className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <span className="text-xs font-medium text-[#64748B] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B192C]">
                  {item.degree}
                </h3>

                <p className="text-sm font-semibold text-[#1E3E62] mt-1">
                  {item.institution}
                </p>

                <p className="text-xs text-[#64748B] flex items-center gap-1 mt-1 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                  <span>{item.location}</span>
                </p>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.focus}
                </p>
              </div>

              {item.grade && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-[#64748B]">1st Year Academic Performance</span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B192C] bg-[#F7F3E9] px-3 py-1 rounded-md border border-[#E8DFC9]">
                    <Award className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span className="tabular-nums">{item.grade}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
