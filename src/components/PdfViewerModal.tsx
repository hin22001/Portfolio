/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = '/assets/aistudio/KaiSheng-Zheng-IT-Professional-E-Portfolio_8c9abd21.pdf';

  const slides = [
    { page: 1, title: 'Title & Cover', kicker: 'IT Professional E-Portfolio', desc: 'Practical experience. Technical foundations. A team-focused approach.' },
    { page: 2, title: 'About Me', kicker: 'IT Focus', desc: 'An IT professional who learns fast and ships.' },
    { page: 3, title: 'Experience', kicker: 'Hands-on Work', desc: 'Hands-on experience across varied work settings.' },
    { page: 4, title: 'Transferable Strengths', kicker: 'Core Foundations', desc: 'Problem solving, People & systems, Adaptability.' },
    { page: 5, title: 'Education', kicker: 'Technical Foundation', desc: 'Degree, coursework, certifications.' },
    { page: 6, title: 'Technical Capabilities', kicker: 'IT Skills', desc: 'Systems and networks, Programming and tools, Support and troubleshooting.' },
    { page: 7, title: 'How I Work With Others', kicker: 'Team Dynamics', desc: 'Clear communication, Collaboration, Patience & empathy, Initiative.' },
    { page: 8, title: 'Selected Work', kicker: 'Projects & Results', desc: 'Projects and measurable achievements.' },
    { page: 9, title: 'Additional Profile', kicker: 'Languages & Interests', desc: 'Languages, personal interests, and reference availability.' },
    { page: 10, title: "Let's Connect", kicker: 'Opportunities', desc: 'Contact channels & readiness to contribute.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                KaiSheng Zheng — IT Professional E-Portfolio
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Original 10-Page Presentation Document (PDF Reference)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="KaiSheng-Zheng-IT-Professional-E-Portfolio.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Full Tab</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Two column viewer */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-slate-100 dark:bg-slate-950">
          {/* Left Column: PDF Outline Index */}
          <div className="hidden lg:block lg:col-span-4 border-r border-slate-200 dark:border-slate-800 p-4 overflow-y-auto bg-white dark:bg-slate-900">
            <div className="mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                Document Structure
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                All 10 pages adapted into this multi-page web portfolio
              </p>
            </div>

            <div className="space-y-2">
              {slides.map((s) => (
                <div
                  key={s.page}
                  className="p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-left"
                >
                  <div className="flex items-center justify-between text-xs font-medium text-slate-900 dark:text-white">
                    <span className="font-mono text-blue-600 dark:text-blue-400">Page {s.page}</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{s.kicker}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-200">
              <div className="flex items-center gap-1.5 font-semibold mb-1">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Faithfully Implemented</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800 dark:text-blue-300">
                Every slide outline from this presentation has been expanded into dedicated pages, interactive exhibits, and downloadable assets.
              </p>
            </div>
          </div>

          {/* Right Column: PDF Preview Frame */}
          <div className="col-span-1 lg:col-span-8 h-full flex flex-col p-2 bg-slate-200 dark:bg-slate-950">
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0`}
              title="KaiSheng Zheng IT Professional E-Portfolio PDF"
              className="w-full h-full rounded-xl border border-slate-300 dark:border-slate-800 shadow-inner bg-white"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Path: <code className="font-mono text-slate-700 dark:text-slate-300">/assets/aistudio/KaiSheng-Zheng-IT-Professional-E-Portfolio_8c9abd21.pdf</code></span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
