import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Github,
  Check,
  Copy,
  Eye,
  EyeOff,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [showEmail, setShowEmail] = useState(true);
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('Internship Opportunity / Inquiry for Aanshi Gupta');
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${senderName}\nOrganization: ${senderOrg}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Narrative & Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#997B48] uppercase block mb-2">
                Section 08 · Connect
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B192C] tracking-tight">
                Get In Touch
              </h2>
              <div className="w-12 h-[2px] bg-[#C5A880] mt-3" />
            </div>

            <p className="text-base sm:text-lg font-serif italic text-[#1E3E62] leading-relaxed">
              "Have an opportunity or an interesting idea? Let's connect."
            </p>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              I am open to internship opportunities, business case discussions, and research projects in finance, marketing, and business operations.
            </p>

            {/* Email Card with Privacy Controls */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B192C]">
                  Official Email
                </span>
                <button
                  onClick={() => setShowEmail(!showEmail)}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 cursor-pointer"
                  title="Toggle email privacy visibility"
                >
                  {showEmail ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showEmail ? 'Hide Email' : 'Show Email'}</span>
                </button>
              </div>

              {showEmail ? (
                <div className="flex items-center justify-between gap-2 p-2.5 bg-[#FAF9F5] rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#0B192C] hover:text-[#1E3E62] truncate"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-md hover:bg-slate-200 text-slate-600 transition-colors shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ) : (
                <div className="p-3 bg-[#FAF9F5] rounded-xl border border-dashed border-slate-200 text-xs text-slate-500 text-center">
                  Email is hidden for privacy. Click "Show Email" to view and copy.
                </div>
              )}

              <p className="text-[11px] text-[#94A3B8]">
                Confidentiality respected: personal telephone and residential address remain unlisted.
              </p>
            </div>

            {/* Location & Professional Links */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#0B192C] block">
                    Location
                  </span>
                  <p className="text-xs text-slate-600">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF9F5] hover:bg-[#F0EDE4] border border-slate-200 text-xs font-medium text-slate-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF9F5] hover:bg-[#F0EDE4] border border-slate-200 text-xs font-medium text-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-900" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B192C] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mb-6">
              Fill out this form to prepare a direct email inquiry to Aanshi Gupta.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
                <span>Your email application has been launched with your inquiry!</span>
                <button
                  onClick={() => setSubmitted(false)}
                  className="underline text-emerald-900 font-semibold cursor-pointer"
                >
                  Send another
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0B192C] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-[#0B192C] bg-[#FAF9F5]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B192C] uppercase tracking-wider mb-1.5">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    value={senderOrg}
                    onChange={(e) => setSenderOrg(e.target.value)}
                    placeholder="e.g. FinCorp Solutions"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-[#0B192C] bg-[#FAF9F5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B192C] uppercase tracking-wider mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-[#0B192C] bg-[#FAF9F5]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B192C] uppercase tracking-wider mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about the role, collaborative idea, or business inquiry..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-[#0B192C] bg-[#FAF9F5]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Sends directly to <span className="font-semibold text-[#0B192C]">anshig781@gmail.com</span>
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#0B192C] hover:bg-[#1E3E62] text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Send Email</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
