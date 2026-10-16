import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Terminal, GitBranch, Globe, Sparkles } from 'lucide-react';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const steps = [
    {
      id: 'step1',
      title: '1. Create a New Repository on GitHub',
      content:
        'Log into GitHub.com, click the "+" icon in the top right, and choose "New repository". Name it (e.g., `portfolio` or `aanshi-gupta-portfolio`). Choose "Public", do NOT initialize with README (we already have a complete one), and click "Create repository".',
      code: null,
    },
    {
      id: 'step2',
      title: '2. Set Your Repository Name in vite.config.ts',
      content:
        'In `vite.config.ts`, update the `base` property to match your repo name. For example, if your repository is named `portfolio` on GitHub:',
      code: `// In vite.config.ts:
base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',`,
    },
    {
      id: 'step3',
      title: '3. Push Your Code to GitHub',
      content: 'Run these commands in your local project terminal:',
      code: `git init
git add .
git commit -m "feat: complete Aanshi Gupta portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main`,
    },
    {
      id: 'step4',
      title: '4. Enable GitHub Pages with GitHub Actions',
      content:
        'On your GitHub repository page: Navigate to Settings → Pages → Under "Build and deployment" Source, select "GitHub Actions". The pre-configured `.github/workflows/deploy.yml` workflow will automatically build and publish your website in under 2 minutes!',
      code: null,
    },
    {
      id: 'step5',
      title: '5. How to Update Your Portfolio Later',
      content: 'Whenever you want to add new projects, grades, or certifications:',
      code: `// 1. Edit src/data/portfolioData.ts or replace public/profile.jpg
git add .
git commit -m "update: add new certification and project details"
git push origin main
// GitHub Actions will automatically re-deploy the updated site!`,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#FAF9F5] border border-[#E2E8F0] w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B192C] text-white px-6 py-4 flex items-center justify-between border-b border-[#1E3E62]">
          <div className="flex items-center gap-2.5">
            <Globe className="w-5 h-5 text-[#C5A880]" />
            <h2 className="text-base font-serif font-bold text-white">
              GitHub Pages Deployment Guide
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close guide"
            className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto text-sm space-y-6 text-[#1E293B]">
          <div className="bg-[#F7F5F0] border border-[#E2E8F0] p-4 rounded-xl flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              <strong className="text-[#0B192C] font-semibold">100% Free Hosting: </strong>
              This portfolio is built with a pure static React + Vite architecture. It does not require any paid servers, databases, or API keys. It runs seamlessly on GitHub Pages forever for $0.
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="border-b border-slate-200/80 pb-5 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-[#0B192C] text-sm mb-1.5 flex items-center gap-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 mb-2 leading-relaxed">
                  {step.content}
                </p>
                {step.code && (
                  <div className="relative mt-2">
                    <pre className="bg-[#0B192C] text-slate-200 text-xs p-3.5 rounded-lg overflow-x-auto font-mono leading-relaxed border border-slate-800">
                      {step.code}
                    </pre>
                    <button
                      onClick={() => copyToClipboard(step.code!, step.id)}
                      className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="Copy code"
                    >
                      {copiedId === step.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-200">
            <span>Also detailed in root repository: <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">README.md</code></span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#0B192C] text-white font-medium rounded-lg text-xs hover:bg-[#1E3E62] transition-colors"
            >
              Got it, close guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
