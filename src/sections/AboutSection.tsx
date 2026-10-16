import React from 'react';
import { BookOpen, TrendingUp, Users, Cpu, FileCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: FileCheck,
      title: 'Financial & Regulatory Rigor',
      description: 'Hands-on exposure to KYC documentation, statutory PAN/TAN filings, and precise data management in MS Excel at a Chartered Accountancy firm.',
    },
    {
      icon: TrendingUp,
      title: 'Market & Product Research',
      description: 'Analyzing consumer demand patterns, pricing feasibility, packaging strategies, and structured Go-to-Market execution models.',
    },
    {
      icon: Users,
      title: 'Teamwork & Leadership Poise',
      description: 'Proven track record of leading multidisciplinary student teams in national competitions and academic symposiums.',
    },
    {
      icon: Cpu,
      title: 'Technological Adaptability',
      description: 'Actively applying Generative AI, structured prompt engineering, and digital workflows to modern business problem-solving.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#997B48] uppercase block mb-2">
            Section 01 · Professional Profile
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B192C] tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A880] mt-3" />
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Narrative - 7 Columns */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
            {PERSONAL_INFO.aboutText.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? "text-base sm:text-lg text-[#1E293B] font-medium leading-relaxed" : ""}>
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-200/80">
              <div className="bg-[#F4F0E8] p-5 rounded-xl border border-[#E5DEC9]">
                <span className="text-xs font-semibold tracking-wider text-[#997B48] uppercase block mb-1">
                  Guiding Conviction
                </span>
                <p className="text-sm font-serif italic text-[#0B192C] leading-normal">
                  "I believe in continuous learning and exploring how business knowledge and technology can solve real-world problems."
                </p>
              </div>
            </div>
          </div>

          {/* Pillars & Competency Cards - 5 Columns */}
          <div className="lg:col-span-5 space-y-3.5">
            <span className="text-xs font-semibold tracking-wider text-[#0B192C] uppercase block mb-1">
              Core Working Principles
            </span>
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-xl border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#FAF9F5] border border-[#E2E8F0] text-[#0B192C] shrink-0">
                      <Icon className="w-4 h-4 text-[#C5A880]" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-[#0B192C]">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#64748B] mt-1 leading-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
