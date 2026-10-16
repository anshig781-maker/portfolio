import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Mail, MapPin, Eye, EyeOff } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, SKILLS_DATA, OTHER_PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [showEmail, setShowEmail] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#FAF9F5] border border-[#E2E8F0] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-[#0B192C] text-white px-5 sm:px-8 py-3.5 flex items-center justify-between border-b border-[#1E3E62] no-print">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tracking-wide font-serif text-[#FAF9F5]">
              Resume Preview · {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline text-xs text-[#94A3B8]">
              (Print-ready BBA Format)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowEmail(!showEmail)}
              title="Toggle Email Privacy"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-md transition-colors"
            >
              {showEmail ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{showEmail ? 'Hide Email' : 'Show Email'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#1E3E62] hover:bg-[#254F7D] rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Print / PDF</span>
            </button>

            <a
              href="/assets/resume.pdf"
              download="Aanshi_Gupta_Resume.pdf"
              onClick={(e) => {
                // If static pdf doesn't exist yet, trigger print as fallback
                if (!window.location.protocol.startsWith('http')) return;
                fetch('/assets/resume.pdf', { method: 'HEAD' }).then((res) => {
                  if (!res.ok) {
                    e.preventDefault();
                    window.print();
                  }
                }).catch(() => {
                  e.preventDefault();
                  window.print();
                });
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0B192C] bg-[#C5A880] hover:bg-[#D4BC96] rounded-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-[#1E293B] print:p-0 print:overflow-visible text-sm leading-relaxed">
          {/* Header */}
          <div className="border-b-2 border-[#0B192C] pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B192C] tracking-tight">
                  {PERSONAL_INFO.name.toUpperCase()}
                </h1>
                <p className="text-sm font-medium text-[#1E3E62] mt-0.5 tracking-wide">
                  Finance and Marketing Specialization
                </p>
              </div>

              {/* Clean Contact Metadata without pills */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#475569]">
                {showEmail && (
                  <span className="inline-flex items-center gap-1 text-[#0B192C]">
                    <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{PERSONAL_INFO.email}</span>
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <section className="mb-6">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#0B192C] mb-2 border-b border-slate-200 pb-1">
              Career Objective
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 leading-normal">
              {PERSONAL_INFO.objective}
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#0B192C] mb-3 border-b border-slate-200 pb-1">
              Work Experience
            </h2>
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                  <span className="font-semibold text-slate-900 text-xs sm:text-sm">
                    {exp.role} — <span className="font-normal text-slate-700">{exp.company}</span>
                  </span>
                  <span className="text-xs text-slate-500 tabular-nums">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>
                <div className="mt-2 text-xs text-slate-500">
                  <span className="font-medium text-slate-700">Key Competencies: </span>
                  {exp.skillsGained.join(' · ')}
                </div>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#0B192C] mb-3 border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-slate-900">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-slate-700">
                      {edu.institution}, {edu.location}
                    </p>
                    {edu.grade && (
                      <p className="text-xs font-medium text-[#1E3E62] mt-0.5">
                        Academic Score: {edu.grade}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-slate-500 sm:text-right shrink-0">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Breakdown */}
          <section className="mb-6">
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#0B192C] mb-3 border-b border-slate-200 pb-1">
              Key Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILLS_DATA.map((cat, idx) => (
                <div key={idx} className="bg-slate-50/70 p-2.5 rounded-lg border border-slate-200/60">
                  <span className="font-semibold text-slate-900 block mb-1">
                    {cat.category}
                  </span>
                  <p className="text-slate-600 leading-normal">
                    {cat.skills.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Extracurricular & Leadership */}
          <section>
            <h2 className="text-xs font-bold tracking-widest uppercase text-[#0B192C] mb-3 border-b border-slate-200 pb-1">
              Extracurricular & Leadership
            </h2>
            <div className="space-y-2.5 text-xs">
              {OTHER_PROJECTS.map((proj) => (
                <div key={proj.id} className="border-l border-slate-200 pl-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                    <span className="font-semibold text-slate-900">
                      {proj.role} · {proj.title}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-0.5">
                    {proj.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
