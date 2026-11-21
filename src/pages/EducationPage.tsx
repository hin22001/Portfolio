/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, ShieldCheck, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { educationData, certificationsData } from '../data/defaultData';
import { PageId } from '../components/Navbar';

interface EducationPageProps {
  onNavigate: (page: PageId) => void;
  isPlaceholderMode: boolean;
}

export const EducationPage: React.FC<EducationPageProps> = ({
  onNavigate,
  isPlaceholderMode,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* 1. Header & Slide 5 Title */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
          Slide 5 · Technical Foundation
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Education built the technical foundation
        </h1>
        <p className="text-base text-slate-700 dark:text-slate-300 font-medium">
          &ldquo;My technical foundation combines rigorous academic coursework with industry-recognized certifications.&rdquo;
        </p>
      </div>

      {/* 2. Academic Background Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Academic Background (Slide 5)
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {isPlaceholderMode ? '[Degree, Major, University, Years]' : educationData.degree}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
            <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{educationData.years}</span>
          </div>
        </div>

        {!isPlaceholderMode && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850/50 border border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block mb-1">Focus & Specialization</span>
              <p className="font-semibold text-slate-900 dark:text-white">{educationData.major}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850/50 border border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block mb-1">Institution</span>
              <p className="font-semibold text-slate-900 dark:text-white">{educationData.institution}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850/50 border border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block mb-1">Academic Honors</span>
              <p className="font-semibold text-emerald-600 dark:text-emerald-400">{educationData.honors}</p>
            </div>
          </div>
        )}

        {/* 3. Relevant Coursework */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Relevant Coursework · Slide 5</span>
          </div>

          {isPlaceholderMode ? (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 font-mono text-xs text-slate-500">
              [topics]
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {educationData.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 4. Certifications Section (Slide 5: Certifications [if any]) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              Slide 5 · Industry Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Certifications & Accreditations
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Globally Recognized Standards
          </span>
        </div>

        {isPlaceholderMode ? (
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-500">
            [if any]
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert) => (
              <div
                key={cert.name}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      {cert.issuer}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-mono font-semibold rounded ${
                        cert.status === 'Active'
                          ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400'
                          : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {cert.issueDate}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-mono text-[11px]">
                    ID: {cert.credentialId || 'PENDING'}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5. Continuing Learning Roadmap */}
      <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
          <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Active Skill Development Roadmap</span>
        </div>
        <p className="text-sm text-blue-950 dark:text-blue-100 leading-relaxed">
          Currently advancing hands-on practice in Cisco CCNA enterprise routing/switching labs, automated infrastructure with Terraform, and hybrid Microsoft Entra ID cloud identity deployments.
        </p>
      </div>
    </div>
  );
};
