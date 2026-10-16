import React from 'react';
import { ArrowUp, BookOpen, FileText, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenDeploymentGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenDeploymentGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B192C] text-[#FAF9F5] border-t border-[#1E3E62] pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-slate-800">
          <div>
            <span className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              BBA Candidate · Finance & Marketing · Allenhouse Business School, Kanpur
            </p>
            <p className="text-xs text-[#C5A880] mt-1 font-serif italic">
              "{PERSONAL_INFO.tagline}"
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Resume</span>
            </button>

            <span className="text-slate-700">·</span>

            <button
              onClick={onOpenDeploymentGuide}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>GitHub Pages Deployment</span>
            </button>

            <span className="text-slate-700">·</span>

            <a
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed for professional presentation.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#C5A880] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
