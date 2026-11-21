/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialProfile } from './data/defaultData';
import { PortfolioProfile } from './types/portfolio';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EducationPage } from './pages/EducationPage';
import { ProfilePage } from './pages/ProfilePage';
import { ContactPage } from './pages/ContactPage';
import { PdfViewerModal } from './components/PdfViewerModal';
import { EditProfileModal } from './components/EditProfileModal';
import { FileText, Eye, Layers } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [viewMode, setViewMode] = useState<'paginated' | 'continuous'>('paginated');
  const [profile, setProfile] = useState<PortfolioProfile>(() => {
    const saved = localStorage.getItem('kaisheng_portfolio_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initialProfile;
      }
    }
    return initialProfile;
  });

  const [isPlaceholderMode, setIsPlaceholderMode] = useState<boolean>(() => {
    return localStorage.getItem('kaisheng_placeholder_mode') === 'true';
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Sync with URL Hash for multi-page browser history navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validPages: PageId[] = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'profile', 'contact'];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveProfile = (updated: PortfolioProfile) => {
    setProfile(updated);
    localStorage.setItem('kaisheng_portfolio_profile', JSON.stringify(updated));
  };

  const handleResetProfile = () => {
    setProfile(initialProfile);
    localStorage.removeItem('kaisheng_portfolio_profile');
  };

  const handleTogglePlaceholderMode = (val: boolean) => {
    setIsPlaceholderMode(val);
    localStorage.setItem('kaisheng_placeholder_mode', val ? 'true' : 'false');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors selection:bg-blue-600 selection:text-white">
      {/* Top Banner: Multi-Page Quick Status & Outline Source */}
      <div className="bg-slate-900 text-slate-300 text-[11px] font-mono px-4 py-1.5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
          <span>KaiSheng Zheng · IT Professional E-Portfolio</span>
          <span className="text-slate-500 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline">10 Slides Outline faithfully converted to Web</span>
        </div>
        <div className="flex items-center gap-3">
          {/* Mode Switcher: Paginated vs Continuous */}
          <div className="flex items-center gap-1 bg-slate-800 px-1.5 py-0.5 rounded">
            <button
              type="button"
              onClick={() => setViewMode('paginated')}
              className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                viewMode === 'paginated' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Multi-Page Mode
            </button>
            <button
              type="button"
              onClick={() => setViewMode('continuous')}
              className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                viewMode === 'continuous' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Full Scroll View
            </button>
          </div>

          <button
            type="button"
            onClick={() => setPdfModalOpen(true)}
            className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            <FileText className="w-3 h-3" />
            <span className="hidden md:inline">Inspect Original PDF</span>
          </button>
        </div>
      </div>

      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenPdf={() => setPdfModalOpen(true)}
        onOpenEdit={() => setEditModalOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {viewMode === 'paginated' ? (
          <>
            {currentPage === 'home' && (
              <HomePage
                profile={profile}
                onNavigate={navigateTo}
                onOpenPdf={() => setPdfModalOpen(true)}
                isPlaceholderMode={isPlaceholderMode}
              />
            )}
            {currentPage === 'about' && (
              <AboutPage
                profile={profile}
                onNavigate={navigateTo}
                isPlaceholderMode={isPlaceholderMode}
              />
            )}
            {currentPage === 'experience' && (
              <ExperiencePage
                onNavigate={navigateTo}
                isPlaceholderMode={isPlaceholderMode}
              />
            )}
            {currentPage === 'skills' && (
              <SkillsPage
                onNavigate={navigateTo}
                isPlaceholderMode={isPlaceholderMode}
              />
            )}
            {currentPage === 'projects' && (
              <ProjectsPage
                onNavigate={navigateTo}
                isPlaceholderMode={isPlaceholderMode}
              />
            )}
            {currentPage === 'education' && (
              <EducationPage
                onNavigate={navigateTo}
                isPlaceholderMode={isPlaceholderMode}
              />
            )}
            {currentPage === 'profile' && (
              <ProfilePage
                profile={profile}
                onNavigate={navigateTo}
                isPlaceholderMode={isPlaceholderMode}
              />
            )}
            {currentPage === 'contact' && (
              <ContactPage
                profile={profile}
                onNavigate={navigateTo}
                onOpenPdf={() => setPdfModalOpen(true)}
                isPlaceholderMode={isPlaceholderMode}
              />
            )}
          </>
        ) : (
          /* Continuous All-in-One Presentation Scroll Mode */
          <div className="space-y-24 pb-20">
            <HomePage
              profile={profile}
              onNavigate={navigateTo}
              onOpenPdf={() => setPdfModalOpen(true)}
              isPlaceholderMode={isPlaceholderMode}
            />
            <hr className="border-slate-200 dark:border-slate-800 max-w-7xl mx-auto" />
            <AboutPage
              profile={profile}
              onNavigate={navigateTo}
              isPlaceholderMode={isPlaceholderMode}
            />
            <hr className="border-slate-200 dark:border-slate-800 max-w-7xl mx-auto" />
            <ExperiencePage
              onNavigate={navigateTo}
              isPlaceholderMode={isPlaceholderMode}
            />
            <hr className="border-slate-200 dark:border-slate-800 max-w-7xl mx-auto" />
            <SkillsPage
              onNavigate={navigateTo}
              isPlaceholderMode={isPlaceholderMode}
            />
            <hr className="border-slate-200 dark:border-slate-800 max-w-7xl mx-auto" />
            <ProjectsPage
              onNavigate={navigateTo}
              isPlaceholderMode={isPlaceholderMode}
            />
            <hr className="border-slate-200 dark:border-slate-800 max-w-7xl mx-auto" />
            <EducationPage
              onNavigate={navigateTo}
              isPlaceholderMode={isPlaceholderMode}
            />
            <hr className="border-slate-200 dark:border-slate-800 max-w-7xl mx-auto" />
            <ProfilePage
              profile={profile}
              onNavigate={navigateTo}
              isPlaceholderMode={isPlaceholderMode}
            />
            <hr className="border-slate-200 dark:border-slate-800 max-w-7xl mx-auto" />
            <ContactPage
              profile={profile}
              onNavigate={navigateTo}
              onOpenPdf={() => setPdfModalOpen(true)}
              isPlaceholderMode={isPlaceholderMode}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onNavigate={navigateTo}
        onOpenPdf={() => setPdfModalOpen(true)}
      />

      {/* PDF Reference Modal */}
      <PdfViewerModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
      />

      {/* Profile & Display Mode Customizer Modal */}
      <EditProfileModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
        isPlaceholderMode={isPlaceholderMode}
        onTogglePlaceholderMode={handleTogglePlaceholderMode}
      />
    </div>
  );
}
