/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Globe, Heart, FileCheck, Send, CheckCircle2, Shield, UserCheck } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { PageId } from '../components/Navbar';

interface ProfilePageProps {
  profile: PortfolioProfile;
  onNavigate: (page: PageId) => void;
  isPlaceholderMode: boolean;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  profile,
  onNavigate,
  isPlaceholderMode,
}) => {
  const [refName, setRefName] = useState('');
  const [refCompany, setRefCompany] = useState('');
  const [refEmail, setRefEmail] = useState('');
  const [refSubmitted, setRefSubmitted] = useState(false);

  const handleRefRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setRefSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* 1. Header & Slide 9 Title */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
          Slide 9 · Additional Profile
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Languages, interests, and references
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Cultural communication competencies, engineering hobbies, and verified professional references available for employer review.
        </p>
      </div>

      {/* 2. Grid for Languages & Interests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Languages Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Multilingual Fluency
                </span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Languages
                </h2>
              </div>
            </div>

            {isPlaceholderMode ? (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 font-mono text-xs text-slate-500">
                [Languages and proficiency levels]
              </div>
            ) : (
              <div className="space-y-3">
                {profile.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/40 flex items-center justify-between"
                  >
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {lang.name}
                    </span>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            Comfortable providing technical user support, written manuals, and verbal briefings across bilingual team environments.
          </p>
        </div>

        {/* Interests Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Technical Passions
                </span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Interests & Hobbies
                </h2>
              </div>
            </div>

            {isPlaceholderMode ? (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 font-mono text-xs text-slate-500">
                [list]
              </div>
            ) : (
              <div className="space-y-2.5">
                {profile.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/40 text-xs text-slate-800 dark:text-slate-200 flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            Dedicated to ongoing continuous learning through homelab experimentation, hardware optimization, and community security CTFs.
          </p>
        </div>
      </div>

      {/* 3. References Available on Request (Slide 9 Exact Focus) */}
      <div className="p-6 sm:p-10 rounded-3xl bg-blue-600 text-white shadow-xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-200">
            <FileCheck className="w-4 h-4" />
            <span>Slide 9 Focus · Professional References</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            References available on request
          </h2>
          <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-medium">
            &ldquo;I can provide reference details for follow-up.&rdquo;
          </p>
          <p className="text-xs text-blue-100/90 leading-relaxed">
            Former supervisors, systems engineering leads, and academic faculty can attest to my technical competence, calm demeanor under deadline pressure, and dependability.
          </p>
        </div>

        {/* Reference Request Form */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md max-w-2xl">
          {refSubmitted ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold">Reference Request Sent</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                Thank you, {refName}. The contact details and professional recommendation letters from KaiSheng’s previous supervisors will be emailed to <span className="font-mono font-medium text-slate-900 dark:text-white">{refEmail}</span> shortly.
              </p>
              <button
                type="button"
                onClick={() => setRefSubmitted(false)}
                className="mt-2 text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleRefRequest} className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Instant Reference Verification Request</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins (Hiring Manager)"
                    value={refName}
                    onChange={(e) => setRefName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Cloud Corp"
                    value={refCompany}
                    onChange={(e) => setRefCompany(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="s.jenkins@acmecloud.com"
                  value={refEmail}
                  onChange={(e) => setRefEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request Verified Reference Dossier</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
