/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Users, Zap, Shield, MessageSquare, HeartHandshake, Eye, Compass, ArrowRight } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { transferableStrengths, socialSkills } from '../data/defaultData';
import { HardwareIllustration } from '../components/HardwareIllustration';
import { PageId } from '../components/Navbar';

interface AboutPageProps {
  profile: PortfolioProfile;
  onNavigate: (page: PageId) => void;
  isPlaceholderMode: boolean;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  profile,
  onNavigate,
  isPlaceholderMode,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-20">
      {/* 1. Header & Slide 2 Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            <span>Slide 2 · About Me</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            An IT professional who learns fast and ships
          </h1>
          <p className="text-xl font-medium text-slate-700 dark:text-slate-300">
            {profile.name} · {profile.title}
          </p>
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Career Objective & Target
            </h3>
            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>My Strengths and Goals</span>
            </div>
            <p className="text-sm text-blue-950 dark:text-blue-100 leading-relaxed font-medium">
              {isPlaceholderMode ? '[one line on strengths and goals]' : profile.strengthsAndGoals}
            </p>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('experience')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
            >
              <span>Explore Hands-on Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Contact KaiSheng
            </button>
          </div>
        </div>

        {/* Hardware Testbed Illustration */}
        <div className="lg:col-span-5">
          <HardwareIllustration />
          <p className="text-center text-xs text-slate-400 mt-2">
            Hardware Testbed & Diagnostics Assembly · Open-Chassis Bench
          </p>
        </div>
      </section>

      {/* 2. Slide 4: Transferable Strengths */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Slide 4 · Transferable Strengths
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What my experience built
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Core operational capabilities developed through real-world systems maintenance and high-pressure incident triage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transferableStrengths.map((strength, index) => {
            const isHighlight = index === 1; // Slide 4 middle card is signature blue in PDF
            return (
              <div
                key={strength.title}
                className={`p-6 rounded-2xl transition-all shadow-sm flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isHighlight
                          ? 'bg-blue-700/80 text-blue-100'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      Pillar 0{index + 1}
                    </span>
                    {index === 0 && <Compass className="w-5 h-5 text-blue-500" />}
                    {index === 1 && <Users className="w-5 h-5 text-blue-200" />}
                    {index === 2 && <Zap className="w-5 h-5 text-blue-500" />}
                  </div>

                  <h3 className="text-xl font-bold tracking-tight">
                    {strength.title}
                  </h3>

                  {/* Exact Quote from PDF */}
                  <blockquote
                    className={`text-sm italic leading-relaxed pl-3 border-l-2 ${
                      isHighlight
                        ? 'border-blue-400 text-blue-100'
                        : 'border-blue-500 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    &ldquo;{strength.quote}&rdquo;
                  </blockquote>

                  {/* Practical Application */}
                  <div className="pt-2 space-y-1">
                    <h4
                      className={`text-[11px] font-semibold uppercase tracking-wider ${
                        isHighlight ? 'text-blue-200' : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      In The Workplace
                    </h4>
                    <p
                      className={`text-xs leading-relaxed ${
                        isHighlight ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {strength.practicalApplication}
                    </p>
                  </div>
                </div>

                <div
                  className={`mt-6 pt-3 border-t text-[11px] ${
                    isHighlight
                      ? 'border-blue-500/60 text-blue-200'
                      : 'border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <span className="font-semibold">Business Impact:</span> {strength.impact}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Slide 7: How I Work With Others (Social Skills) */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Slide 7 · How I Work With Others
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Social skills that make teams work
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Strong infrastructure relies as much on clear communication and dependable teamwork as it does on technical configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialSkills.map((social, index) => {
            const isBlueCard = index === 3; // Slide 7 bottom right card is cobalt blue in PDF
            const isSoftBlue = index === 0; // Slide 7 top left card is soft blue in PDF
            return (
              <div
                key={social.title}
                className={`p-6 rounded-2xl transition-all shadow-sm flex flex-col justify-between ${
                  isBlueCard
                    ? 'bg-blue-600 text-white'
                    : isSoftBlue
                    ? 'bg-blue-50/70 dark:bg-slate-900 border border-blue-200/80 dark:border-slate-800 text-slate-900 dark:text-white'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isBlueCard
                          ? 'bg-blue-700 text-blue-100'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      Social Skill 0{index + 1}
                    </span>
                    {index === 0 && <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                    {index === 1 && <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                    {index === 2 && <HeartHandshake className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                    {index === 3 && <Eye className="w-4 h-4 text-blue-200" />}
                  </div>

                  <h3 className="text-lg font-bold tracking-tight">
                    {social.title}
                  </h3>

                  {/* Exact Quote from PDF Slide 7 */}
                  <blockquote
                    className={`text-sm italic leading-relaxed pl-3 border-l-2 ${
                      isBlueCard
                        ? 'border-blue-400 text-blue-100'
                        : 'border-blue-600 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    &ldquo;{social.quote}&rdquo;
                  </blockquote>

                  <p
                    className={`text-xs leading-relaxed pt-2 ${
                      isBlueCard ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {social.workplaceExample}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
