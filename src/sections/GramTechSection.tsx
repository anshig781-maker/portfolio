import React, { useState } from 'react';
import {
  Quote,
  AlertCircle,
  Lightbulb,
  Building,
  Store,
  Layers,
  CheckCircle,
  Truck,
  Calculator,
  Users2,
  CalendarDays,
  Target,
  ArrowRight,
  TrendingDown,
  Sparkles,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';
import { GRAM_TECH_STUDIO } from '../data/portfolioData';

export const GramTechSection: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<string>('sales');

  const divisionIcons: Record<string, any> = {
    sales: Store,
    branding: Layers,
    quality: CheckCircle,
    logistics: Truck,
    billing: Calculator,
  };

  const currentDiv = GRAM_TECH_STUDIO.divisions.find((d) => d.id === selectedDivision) || GRAM_TECH_STUDIO.divisions[0];

  return (
    <section id="gram-tech" className="py-20 lg:py-28 bg-[#F4F0E8] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Project Kicker */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#997B48] uppercase mb-2">
              <span>Flagship Strategic Concept</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Social Innovation</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Rural Entrepreneurship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B192C] tracking-tight">
              {GRAM_TECH_STUDIO.title}
            </h2>
            <p className="text-base sm:text-lg font-medium text-[#1E3E62] mt-2 font-serif">
              {GRAM_TECH_STUDIO.subtitle}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FAF9F5] border border-[#CBD5E1] text-xs font-semibold text-[#0B192C]">
            <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
            <span>Academic & Conceptual Proposal</span>
          </div>
        </div>

        {/* Featured Project Imagery & Quotes Lockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-stretch">
          {/* Main Visual Asset (16:9 Image) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2E8F0] p-3 shadow-md flex flex-col justify-between">
            <div className="overflow-hidden rounded-xl aspect-[16/9] bg-slate-200 relative">
              <img
                src="/gram_tech_hub.jpg"
                alt="Gram-Tech Studio Rural Supply Chain Hub Concept"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 bg-[#0B192C]/85 backdrop-blur-xs text-white text-[11px] px-3 py-1 rounded-md">
                Hyperlocal Aggregation & Logistics Facility Model
              </div>
            </div>
            <div className="pt-3 px-2 flex items-center justify-between text-xs text-[#64748B]">
              <span>Shared-Infrastructure Village Hub</span>
              <span className="font-medium text-[#0B192C]">Rural MSME & FPO Enablement</span>
            </div>
          </div>

          {/* Featured Project Quotes (Hindi & English) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {GRAM_TECH_STUDIO.quotes.map((quote, qIdx) => (
              <div
                key={qIdx}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs relative flex flex-col justify-between h-full"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#C5A880] mb-3 opacity-60" />
                  <p
                    className={`text-slate-800 leading-relaxed ${
                      quote.isHindi
                        ? 'text-base sm:text-lg font-serif font-medium text-[#0B192C]'
                        : 'text-sm sm:text-base font-serif italic text-[#1E3E62]'
                    }`}
                  >
                    "{quote.text}"
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>{quote.attribution}</span>
                  <span className="text-[#C5A880] font-semibold">Gram-Tech Philosophy</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Problem vs The Solution Side-by-Side Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* Problem */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-red-100 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-red-50 text-red-700">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0B192C]">
                {GRAM_TECH_STUDIO.problem.title}
              </h3>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              {GRAM_TECH_STUDIO.problem.description}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-red-500" />
              <span>Result: Seasonal distress, wage suppression, loss of local youth talent.</span>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800">
                <Lightbulb className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0B192C]">
                {GRAM_TECH_STUDIO.solution.title}
              </h3>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              {GRAM_TECH_STUDIO.solution.description}
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Result: Decentralized income, institutional market linkages, village retention.</span>
            </div>
          </div>
        </div>

        {/* Supply-Chain Process Diagram */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#997B48] uppercase block mb-1">
                Operational Architecture
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B192C]">
                Hyperlocal Supply-Chain Process Flow
              </h3>
            </div>
            <span className="text-xs text-slate-500">End-to-End Value Realization</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
            {[
              { step: '01', title: 'Farmgate Aggregation', desc: 'Farmers & FPOs supply harvest to local village studio.' },
              { step: '02', title: 'Grading & Packaging', desc: 'Moisture testing, quality inspection, and regional branding.' },
              { step: '03', title: 'Digital Marketplace', desc: 'B2B WhatsApp cataloging, e-grocery & wholesale listings.' },
              { step: '04', title: 'Route Agri-Logistics', desc: 'Consolidated freight transport to regional distribution centers.' },
              { step: '05', title: 'Transparent Invoicing', desc: 'Instant ledger reconciliation and direct farmer payouts.' },
            ].map((node, nIdx) => (
              <div
                key={nIdx}
                className="bg-[#FAF9F5] p-4 rounded-xl border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#C5A880] tabular-nums block mb-1.5">
                    STEP {node.step}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0B192C] mb-1">
                    {node.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    {node.desc}
                  </p>
                </div>
                {nIdx < 4 && (
                  <div className="hidden lg:flex justify-end mt-3 text-slate-300">
                    <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 5 Key Operational Divisions - Interactive Cards */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#997B48] uppercase block mb-1">
                Organizational Structure
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B192C]">
                Five Core Operational Divisions
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Interactive departmental division breakdown
            </p>
          </div>

          {/* Interactive Division Selector */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {GRAM_TECH_STUDIO.divisions.map((div) => {
              const Icon = divisionIcons[div.id] || Store;
              const isActive = selectedDivision === div.id;
              return (
                <button
                  key={div.id}
                  onClick={() => setSelectedDivision(div.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0B192C] text-white shadow-xs'
                      : 'bg-[#FAF9F5] text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#C5A880]' : 'text-slate-500'}`} />
                  <span>{div.number}. {div.name}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Spotlight of Selected Division */}
          <div className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#997B48] block mb-1">
                DIVISION {currentDiv.number}
              </span>
              <h4 className="text-lg font-serif font-bold text-[#0B192C] mb-2">
                {currentDiv.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-2xl">
                {currentDiv.focus}
              </p>
            </div>
            <div className="shrink-0 p-4 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-600 max-w-xs">
              <span className="font-semibold text-[#0B192C] block mb-1">Role in Local Economy</span>
              Creates specialized digital or logistical competencies in the village without urban relocation.
            </div>
          </div>
        </div>

        {/* Recruitment Model & Training Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#997B48] uppercase block mb-1">
                Talent Pipeline
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B192C] mb-4">
                Recruitment & Skill-Building Model
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Rather than relying on abstract resume screenings, Gram-Tech Studio establishes a grassroots vocational discovery program designed specifically for rural youth.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#F7F5F0] border border-[#EBE7DF]">
              <span className="text-xs font-semibold text-[#0B192C] block mb-1">
                Equal Opportunity Discovery
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Youth test their aptitude across sales, packaging, grading, route logistics, and accounts before committing to a permanent role.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {GRAM_TECH_STUDIO.recruitmentModel.map((item, rIdx) => (
              <div
                key={rIdx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-2xs flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-[#0B192C] text-[#C5A880] font-mono font-bold text-sm shrink-0 flex items-center justify-center w-11 h-11">
                  {item.step}
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm sm:text-base font-semibold text-[#0B192C]">
                      {item.name}
                    </h4>
                    <span className="text-xs font-medium text-[#997B48] bg-[#F7F3E9] px-2.5 py-0.5 rounded border border-[#EBE4D5] shrink-0">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Beneficiaries & Social Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Target Beneficiaries */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-[#F7F5F0] text-[#0B192C]">
                <Target className="w-5 h-5 text-[#C5A880]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B192C]">
                  Target Beneficiaries
                </h3>
                <span className="text-xs text-slate-500">Key Community Stakeholders</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {GRAM_TECH_STUDIO.beneficiaries.map((b, bIdx) => (
                <div key={bIdx} className="p-3.5 rounded-xl bg-[#FAF9F5] border border-slate-200/60">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0B192C] mb-0.5">
                    {b.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">
                    {b.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Social Impact */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-[#F7F5F0] text-[#0B192C]">
                  <TrendingDown className="w-5 h-5 text-[#1E3E62]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B192C]">
                    Expected Social Impact
                  </h3>
                  <span className="text-xs text-slate-500">Socio-economic value creation</span>
                </div>
              </div>

              <div className="space-y-3">
                {GRAM_TECH_STUDIO.expectedImpact.map((impact, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                    <span className="text-[#C5A880] font-bold mt-0.5">✓</span>
                    <span className="leading-relaxed">{impact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Model Projection Box */}
            <div className="mt-6 p-4 rounded-xl bg-[#F4F0E8] border border-[#E5DEC9]">
              <span className="text-xs font-semibold text-[#997B48] uppercase tracking-wider block mb-1">
                Projected Financial Model
              </span>
              <p className="text-xs text-[#0B192C] leading-relaxed">
                <strong>Local Retention: </strong> The study's proposed financial model projects that up to <strong>70%</strong> of earned income could be saved or spent locally due to lower living expenses compared to tier-1 cities. <span className="text-slate-500 italic block mt-0.5">(Academic model projection; subject to field testing).</span>
              </p>
            </div>
          </div>
        </div>

        {/* Potential Market Connections & Disclaimer */}
        <div className="bg-[#FAF9F5] p-5 sm:p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0B192C]">
              <ShieldAlert className="w-4 h-4 text-[#997B48]" />
              <span>Academic Integrity & Conceptual Framing</span>
            </div>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              {GRAM_TECH_STUDIO.marketChannelsNote}
            </p>
          </div>
          <span className="text-[11px] text-slate-500 font-mono italic shrink-0">
            {GRAM_TECH_STUDIO.disclaimer}
          </span>
        </div>
      </div>
    </section>
  );
};
