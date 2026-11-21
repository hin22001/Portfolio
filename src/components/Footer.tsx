/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Linkedin, Github, FileText, ArrowUp } from 'lucide-react';
import { PageId } from './Navbar';
import { PortfolioProfile } from '../types/portfolio';

interface FooterProps {
  profile: PortfolioProfile;
  onNavigate: (page: PageId) => void;
  onOpenPdf: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onNavigate, onOpenPdf }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600 dark:bg-blue-500" />
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {profile.name}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600 dark:text-slate-400 font-medium">
                {profile.title}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
              Practical experience. Technical foundations. A team-focused approach. Targeting enterprise IT roles spanning systems administration, network engineering, and infrastructure support.
            </p>
            <div className="flex items-center gap-3 pt-1 text-slate-500">
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={`https://${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick Pages */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              Portfolio Pages
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  01. Home & Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  02. About & Strengths
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('experience')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  03. Hands-on Experience
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('skills')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  04. Technical Capabilities
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  05. Selected Work & Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('education')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  06. Education & Certifications
                </button>
              </li>
            </ul>
          </div>

          {/* Presentation & PDF */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
              E-Portfolio Documents
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  type="button"
                  onClick={onOpenPdf}
                  className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Original 10-Slide PDF</span>
                </button>
              </li>
              <li>
                <a
                  href="/assets/aistudio/KaiSheng-Zheng-IT-Professional-E-Portfolio_8c9abd21.pdf"
                  download="KaiSheng-Zheng-IT-Professional-E-Portfolio.pdf"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Download PDF Slide Deck
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact & Hiring Inquiries
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('profile')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  References & Languages
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-xs">
            © {new Date().getFullYear()} {profile.name} · IT Professional E-Portfolio · All rights reserved.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
