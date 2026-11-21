/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layers, ArrowRight, CheckCircle2, X, Terminal, ExternalLink, HardDrive, ShieldAlert, Cpu } from 'lucide-react';
import { selectedProjects } from '../data/defaultData';
import { ProjectItem } from '../types/portfolio';
import { PageId } from '../components/Navbar';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  isPlaceholderMode: boolean;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  isPlaceholderMode,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filtered = selectedProjects.filter((p) => {
    if (categoryFilter === 'all') return true;
    return p.category.toLowerCase() === categoryFilter.toLowerCase();
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* 1. Header & Slide 8 Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="space-y-2 max-w-3xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Slide 8 · Selected Work
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects and achievements
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Real enterprise deployments and infrastructure engineering projects featuring clear contributions and verified business outcomes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl shrink-0 self-start md:self-auto">
          {['all', 'infrastructure', 'automation', 'systems', 'support'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors capitalize ${
                categoryFilter === cat
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Projects Grid (Inspired by Slide 8 Split Card Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filtered.map((proj, index) => {
          // Slide 8 shows one light card on left and one signature cobalt blue card on right
          const isBlueStyle = index % 2 === 1;

          return (
            <div
              key={proj.id}
              className={`p-6 sm:p-8 rounded-2xl transition-all shadow-sm flex flex-col justify-between ${
                isBlueStyle
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white'
              }`}
            >
              <div className="space-y-6">
                {/* Category & Title */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span
                      className={`px-2 py-0.5 rounded font-bold ${
                        isBlueStyle
                          ? 'bg-blue-700/80 text-blue-100'
                          : 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                      }`}
                    >
                      {proj.category}
                    </span>
                    <span className={isBlueStyle ? 'text-blue-200' : 'text-slate-400'}>
                      Project 0{index + 1}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {isPlaceholderMode ? '[Project or achievement]' : proj.title}
                  </h2>
                </div>

                {/* Summary */}
                <p
                  className={`text-sm leading-relaxed ${
                    isBlueStyle ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {proj.summary}
                </p>

                {/* My contribution (Slide 8 Outline) */}
                <div
                  className={`p-4 rounded-xl border ${
                    isBlueStyle
                      ? 'bg-blue-700/60 border-blue-500/60'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80'
                  }`}
                >
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${
                      isBlueStyle ? 'text-blue-200' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    My contribution
                  </span>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isBlueStyle ? 'text-white' : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {isPlaceholderMode ? '[What I did]' : proj.contribution}
                  </p>
                </div>

                {/* Outcome (Slide 8 Outline) */}
                <div
                  className={`p-4 rounded-xl border ${
                    isBlueStyle
                      ? 'bg-blue-800/60 border-blue-400/40'
                      : 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200/60 dark:border-emerald-900/40'
                  }`}
                >
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider block mb-1 ${
                      isBlueStyle ? 'text-blue-200' : 'text-emerald-700 dark:text-emerald-400'
                    }`}
                  >
                    Outcome
                  </span>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isBlueStyle ? 'text-white' : 'text-emerald-950 dark:text-emerald-100'
                    }`}
                  >
                    {isPlaceholderMode ? '[The outcome]' : proj.outcome}
                  </p>
                </div>

                {/* 4 Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono">
                  {proj.metrics.map((m) => (
                    <div
                      key={m.label}
                      className={`p-2 rounded-lg text-center ${
                        isBlueStyle ? 'bg-blue-700/50' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      <div className="text-sm font-bold tabular-nums">{m.value}</div>
                      <div
                        className={`text-[10px] truncate ${
                          isBlueStyle ? 'text-blue-200' : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div
                className={`mt-6 pt-4 border-t flex items-center justify-between ${
                  isBlueStyle ? 'border-blue-500/60' : 'border-slate-100 dark:border-slate-800'
                }`}
              >
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  {proj.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className={`font-mono text-[11px] ${
                        isBlueStyle ? 'text-blue-200' : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {t} ·
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(proj)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    isBlueStyle
                      ? 'bg-white text-blue-900 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  <span>Technical Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Deep-Dive Modal for Selected Project */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Case Study Deep Dive
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Architecture Steps */}
              {selectedProject.architecture && (
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    System Architecture & Execution Steps
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.architecture.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 flex items-start gap-2.5"
                      >
                        <span className="font-mono text-blue-600 dark:text-blue-400 font-bold shrink-0">
                          [{idx + 1}]
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contribution & Outcome Review */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 space-y-1">
                  <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase">
                    My Contribution
                  </span>
                  <p className="text-xs text-blue-950 dark:text-blue-100 leading-relaxed">
                    {selectedProject.contribution}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 space-y-1">
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase">
                    Business Outcome
                  </span>
                  <p className="text-xs text-emerald-950 dark:text-emerald-100 leading-relaxed">
                    {selectedProject.outcome}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Full Technology Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  onNavigate('contact');
                }}
                className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Inquire about this project implementation →
              </button>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Close Specs
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
