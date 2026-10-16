import React, { useState } from 'react';
import {
  Trophy,
  BrainCircuit,
  Users2,
  Mic2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Layers,
  X,
  CheckCircle2,
} from 'lucide-react';
import { OTHER_PROJECTS, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'competition' | 'conference' | 'cocurricular'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? OTHER_PROJECTS
    : OTHER_PROJECTS.filter((p) => p.type === activeFilter);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'aarambh':
        return Trophy;
      case 'ai-conference':
        return BrainCircuit;
      case 'hr-event':
        return Users2;
      case 'reeth':
        return Mic2;
      default:
        return Layers;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#997B48] uppercase block mb-2">
              Section 05 · Applied Business Initiatives
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B192C] tracking-tight">
              Projects & Engagements
            </h2>
            <div className="w-12 h-[2px] bg-[#C5A880] mt-3" />
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Case competitions, academic conferences, organizational leadership, and cultural pursuits.
            </p>
          </div>

          {/* Interactive filter controls - Styled segmented controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F0EDE4] rounded-xl border border-[#E5DFC9]/70 shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-white text-[#0B192C] shadow-2xs font-semibold'
                  : 'text-[#64748B] hover:text-[#0B192C]'
              }`}
            >
              All Projects ({OTHER_PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('competition')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'competition'
                  ? 'bg-white text-[#0B192C] shadow-2xs font-semibold'
                  : 'text-[#64748B] hover:text-[#0B192C]'
              }`}
            >
              Case Competitions
            </button>
            <button
              onClick={() => setActiveFilter('conference')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'conference'
                  ? 'bg-white text-[#0B192C] shadow-2xs font-semibold'
                  : 'text-[#64748B] hover:text-[#0B192C]'
              }`}
            >
              AI Conference
            </button>
            <button
              onClick={() => setActiveFilter('cocurricular')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === 'cocurricular'
                  ? 'bg-white text-[#0B192C] shadow-2xs font-semibold'
                  : 'text-[#64748B] hover:text-[#0B192C]'
              }`}
            >
              Cultural & Stage
            </button>
          </div>
        </div>

        {/* Featured Case Competition Spotlight Card (Aarambh 2.0 with photography) */}
        {activeFilter === 'all' && (
          <div className="mb-10 bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:border-[#CBD5E1] transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-5 relative bg-slate-100 overflow-hidden min-h-[240px]">
                <img
                  src="/business_competition.jpg"
                  alt="Aarambh 2.0 National Business Idea Competition"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-[#0B192C]/85 text-white text-[11px] font-medium px-2.5 py-1 rounded">
                  National Case Competition
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs text-[#997B48] font-semibold tracking-wide uppercase">
                      Featured Competition · Aarambh 2.0
                    </span>
                    <span className="text-xs font-medium text-[#1E3E62] bg-[#F7F5F0] px-2.5 py-0.5 rounded border border-[#EBE7DF]">
                      Role: Team Leader
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B192C]">
                    Aarambh 2.0 – National-Level Business Idea Competition
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] mt-2.5 leading-relaxed">
                    Spearheaded a multi-member student team formulating an end-to-end commercialization plan for an innovative consumer proposition, conducting product research, pricing viability, and packaging strategy.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-500">
                    <span className="text-slate-800 font-medium">Team Leadership</span>
                    <span>·</span>
                    <span className="text-slate-800 font-medium">Product Research</span>
                    <span>·</span>
                    <span className="text-slate-800 font-medium">Financial Planning</span>
                    <span>·</span>
                    <span className="text-slate-800 font-medium">Go-to-Market Strategy</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Rigorous 5-pillar strategic roadmap</span>
                  <button
                    onClick={() => setSelectedProject(OTHER_PROJECTS[0])}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B192C] hover:text-[#1E3E62] transition-colors cursor-pointer"
                  >
                    <span>View Project Details</span>
                    <ChevronRight className="w-4 h-4 text-[#C5A880]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = getProjectIcon(project.id);
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-[#F7F5F0] border border-[#EBE7DF] text-[#0B192C]">
                      <Icon className="w-5 h-5 text-[#C5A880]" />
                    </div>
                    <span className="text-xs font-medium text-[#1E3E62] bg-[#FAF9F5] px-2.5 py-0.5 rounded border border-slate-200">
                      {project.role}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-[#997B48] uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#0B192C] mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-slate-500 mb-4 pt-3 border-t border-slate-100">
                    {project.tags.map((tag, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span>{tag}</span>
                        {tIdx < project.tags.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-[#0B192C] bg-[#FAF9F5] hover:bg-[#F2EDE2] rounded-lg border border-slate-200 transition-colors cursor-pointer"
                  >
                    <span>Read Full Experience</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div
            className="relative bg-white border border-[#E2E8F0] w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
              <div>
                <span className="text-xs font-semibold text-[#997B48] uppercase tracking-wider block mb-1">
                  {selectedProject.category} · Role: {selectedProject.role}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#0B192C]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="p-1 text-slate-400 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-5">
              {selectedProject.summary}
            </p>

            <div className="space-y-2.5 mb-6">
              <span className="text-xs font-bold text-[#0B192C] uppercase tracking-wider block mb-2">
                Key Contributions & Insights
              </span>
              {selectedProject.bullets.map((bullet, bIdx) => (
                <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1E3E62] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex flex-wrap gap-x-2 text-xs text-slate-500">
                {selectedProject.tags.join(' · ')}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-[#0B192C] text-white text-xs font-medium rounded-lg hover:bg-[#1E3E62] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
