/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight, Filter, Server, ShieldCheck, Terminal } from 'lucide-react';
import { initialExperiences } from '../data/defaultData';
import { PageId } from '../components/Navbar';

interface ExperiencePageProps {
  onNavigate: (page: PageId) => void;
  isPlaceholderMode: boolean;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({
  onNavigate,
  isPlaceholderMode,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredExperiences = initialExperiences.filter((exp) => {
    if (filter === 'all') return true;
    if (filter === 'systems') return exp.role.toLowerCase().includes('systems') || exp.technologies.includes('Active Directory');
    if (filter === 'network') return exp.role.toLowerCase().includes('network') || exp.technologies.includes('Cisco Catalyst');
    if (filter === 'support') return exp.role.toLowerCase().includes('desk') || exp.role.toLowerCase().includes('support');
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* 1. Header & Slide 3 Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="space-y-2 max-w-3xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Slide 3 · Career History
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hands-on experience across varied work settings
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Proven track record managing physical and logical IT infrastructure, resolving critical incidents, and modernizing endpoint systems.
          </p>
        </div>

        {/* Filter Tabs (Interactive Filter Controls as functional buttons) */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl shrink-0 self-start md:self-auto">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filter === 'all'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            All Roles ({initialExperiences.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('systems')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filter === 'systems'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Systems
          </button>
          <button
            type="button"
            onClick={() => setFilter('network')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filter === 'network'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Networks
          </button>
          <button
            type="button"
            onClick={() => setFilter('support')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              filter === 'support'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Service Desk
          </button>
        </div>
      </div>

      {/* 2. Timeline of Roles */}
      <div className="space-y-8">
        {filteredExperiences.map((exp, index) => (
          <div
            key={exp.id}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-6"
          >
            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    0{index + 1}.
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {isPlaceholderMode ? '[Role, Company, Dates]' : exp.role}
                  </h2>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{exp.company}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{exp.type}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Role Summary */}
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {exp.summary}
            </p>

            {/* Key Responsibility and Result Callout (Exact PDF Outline emphasis) */}
            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Key Responsibility & Result (Slide 3 Outline)
              </span>
              <p className="text-sm text-blue-950 dark:text-blue-100 font-medium">
                {isPlaceholderMode ? '[My key responsibility and result]' : exp.keyResult}
              </p>
            </div>

            {/* Bulleted Responsibilities */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Deliverables
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clean Unboxed Metadata: Technologies Used */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Environment:</span>
              {exp.technologies.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="font-mono text-slate-800 dark:text-slate-200">{tech}</span>
                  {i < exp.technologies.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Operational Standards & Rack Cable Management Reference */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400">
              <Server className="w-4 h-4 text-blue-400" />
              <span>Physical Infrastructure & Rack Discipline</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Structured Cabling & Zero-Downtime Deployment
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every physical deployment follows strict TIA/EIA-568 standards: color-coded patch leads, 90-degree cable combs, Velcro dressing (no zip-ties on structured runs), and comprehensive port mapping in Visio.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-blue-900 bg-white hover:bg-blue-50 rounded-lg transition-colors"
            >
              <span>See Project Case Studies</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
