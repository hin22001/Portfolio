/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Terminal, Server, Shield, Layers, Award, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { RackIllustration } from '../components/RackIllustration';
import { PageId } from '../components/Navbar';

interface HomePageProps {
  profile: PortfolioProfile;
  onNavigate: (page: PageId) => void;
  onOpenPdf: () => void;
  isPlaceholderMode: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  profile,
  onNavigate,
  onOpenPdf,
  isPlaceholderMode,
}) => {
  return (
    <div className="space-y-16 lg:space-y-24 py-8 md:py-12">
      {/* 1. Hero Split Section (Slide 1 & Slide 2 Inspiration) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span>IT Professional E-Portfolio</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
              {profile.name}
            </h1>

            {/* Core Value Statement from Slide 1 */}
            <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-200 leading-snug">
              {profile.headline}
            </p>

            {/* Target Role Tagline */}
            <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 text-sm text-blue-900 dark:text-blue-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="font-semibold">{profile.targetRoles}</span>
              </div>
              <span className="hidden sm:inline-block text-xs font-mono text-blue-600 dark:text-blue-400">Available Now</span>
            </div>

            {/* Bio Teaser */}
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              {profile.bio}
            </p>

            {/* Primary Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('experience')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl shadow-sm transition-all"
              >
                <span>View Hands-on Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('skills')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 rounded-xl transition-all"
              >
                <span>Technical Capabilities</span>
              </button>
              <button
                type="button"
                onClick={onOpenPdf}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Original PDF Outline</span>
              </button>
            </div>

            {/* Contact quick links */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span>{isPlaceholderMode ? '[email]' : profile.email}</span>
              <span aria-hidden="true">·</span>
              <span>{isPlaceholderMode ? '[phone]' : profile.phone}</span>
              <span aria-hidden="true">·</span>
              <span>{isPlaceholderMode ? '[LinkedIn]' : profile.linkedin}</span>
            </div>
          </div>

          {/* Right Column: Server Rack Illustration */}
          <div className="lg:col-span-6 flex justify-center">
            <RackIllustration />
          </div>
        </div>
      </section>

      {/* 2. 4-Column KPI Metric Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
              350+
            </div>
            <div className="text-xs font-semibold text-slate-900 dark:text-white">
              Endpoints Administered
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Workstations, servers & mobile clients
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
              99.9%
            </div>
            <div className="text-xs font-semibold text-slate-900 dark:text-white">
              Service Availability
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              DNS, DHCP & Active Directory services
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
              98.4%
            </div>
            <div className="text-xs font-semibold text-slate-900 dark:text-white">
              Helpdesk Satisfaction
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Positive end-user feedback rating
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
              0 hrs
            </div>
            <div className="text-xs font-semibold text-slate-900 dark:text-white">
              Unscheduled Downtime
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Achieved during campus network migrations
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Philosophy Callout (Slide 2 Focus) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-blue-600 text-white p-8 sm:p-12 overflow-hidden shadow-xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-semibold tracking-wider uppercase text-blue-200">
              Professional Manifesto · Slide 2
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              &ldquo;An IT professional who learns fast and ships.&rdquo;
            </h2>
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
              {profile.strengthsAndGoals}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="px-4 py-2 text-xs font-semibold text-blue-900 bg-white hover:bg-blue-50 rounded-lg shadow-sm transition-colors"
              >
                Read Full Philosophy & Strengths
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-700/80 hover:bg-blue-700 border border-blue-400/40 rounded-lg transition-colors"
              >
                Contact KaiSheng Directly
              </button>
            </div>
          </div>
          {/* Subtle background glow circle */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/40 blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* 4. Multi-Page Navigation Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
            Explore The Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            Comprehensive Multi-Page Structure
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Navigate through each specialized section derived from the 10-slide e-portfolio outline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Experience */}
          <div
            onClick={() => onNavigate('experience')}
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 dark:hover:border-blue-500/80 shadow-sm transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Hands-on Experience
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Varied work settings spanning systems administration, network engineering, and enterprise IT service desk support.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>3 Enterprise Roles</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Technical Capabilities */}
          <div
            onClick={() => onNavigate('skills')}
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 dark:hover:border-blue-500/80 shadow-sm transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Technical Capabilities
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Systems and networks, programming and tools, support and troubleshooting with interactive topology diagrams.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>Full Skill Matrix</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Selected Work */}
          <div
            onClick={() => onNavigate('projects')}
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 dark:hover:border-blue-500/80 shadow-sm transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Selected Work & Projects
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                VLAN network segmentation, automated PowerShell onboarding, Proxmox clustering, and incident triage portals.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>4 Real-World Case Studies</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Transferable Strengths */}
          <div
            onClick={() => onNavigate('about')}
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 dark:hover:border-blue-500/80 shadow-sm transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Strengths & Team Dynamics
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Problem solving under deadlines, connecting people with systems, adaptability, and clear communication.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>Slide 4 & 7 Breakdown</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Education & Credentials */}
          <div
            onClick={() => onNavigate('education')}
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 dark:hover:border-blue-500/80 shadow-sm transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Education & Foundation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Academic degree, relevant coursework, CompTIA Security+, CompTIA Network+, and AWS certifications.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>Degree & 4 Certifications</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: Connect */}
          <div
            onClick={() => onNavigate('contact')}
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/80 dark:hover:border-blue-500/80 shadow-sm transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Connect & Inquire
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ready to contribute to your IT team. Interactive inquiry form, contact channels, and downloadable vCard.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>Get in Touch</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
