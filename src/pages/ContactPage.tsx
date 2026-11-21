/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle2, Copy, Check, FileText, Download, Calendar, ArrowRight } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { PageId } from '../components/Navbar';

interface ContactPageProps {
  profile: PortfolioProfile;
  onNavigate: (page: PageId) => void;
  onOpenPdf: () => void;
  isPlaceholderMode: boolean;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  profile,
  onNavigate,
  onOpenPdf,
  isPlaceholderMode,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    organization: '',
    roleType: 'Full-Time IT Role',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Generate and download standard vCard (.vcf) file
  const downloadVCard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Zheng;KaiSheng;;;
FN:${profile.name}
TITLE:${profile.title}
EMAIL;TYPE=INTERNET,WORK:${profile.email}
TEL;TYPE=CELL:${profile.phone}
URL:https://${profile.linkedin}
NOTE:Practical experience. Technical foundations. A team-focused approach.
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'KaiSheng-Zheng.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* 1. Header & Slide 10 Title */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
          Slide 10 · Let&apos;s Connect
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Ready to contribute to your IT team
        </h1>
        <p className="text-xl font-medium text-slate-700 dark:text-slate-300">
          {profile.name} · IT opportunities · Get in touch
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Whether you have an opening for a Systems Administrator, Network Engineer, IT Infrastructure Specialist, or Tier 2/3 Service Desk Lead, I would welcome the opportunity to discuss how I can deliver immediate value.
        </p>
      </div>

      {/* 2. Main Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contact Details & vCard */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Direct Communication Channels
            </h3>

            {/* Email */}
            <div className="space-y-1">
              <span className="text-xs text-slate-500 dark:text-slate-400">Email Address</span>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium font-mono text-slate-900 dark:text-white truncate">
                    {isPlaceholderMode ? '[email]' : profile.email}
                  </span>
                </div>
                {!isPlaceholderMode && (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(profile.email, 'email')}
                    className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <span className="text-xs text-slate-500 dark:text-slate-400">Direct Phone</span>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium font-mono text-slate-900 dark:text-white">
                    {isPlaceholderMode ? '[phone]' : profile.phone}
                  </span>
                </div>
                {!isPlaceholderMode && (
                  <button
                    type="button"
                    onClick={() => copyToClipboard(profile.phone, 'phone')}
                    className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </div>

            {/* LinkedIn */}
            <div className="space-y-1">
              <span className="text-xs text-slate-500 dark:text-slate-400">Professional LinkedIn</span>
              <a
                href={isPlaceholderMode ? '#' : `https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group"
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white group-hover:text-blue-600 truncate">
                    {isPlaceholderMode ? '[LinkedIn]' : profile.linkedin}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
            </div>

            {/* GitHub */}
            <div className="space-y-1">
              <span className="text-xs text-slate-500 dark:text-slate-400">GitHub Repositories & Homelab</span>
              <a
                href={isPlaceholderMode ? '#' : `https://${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group"
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Github className="w-4 h-4 text-slate-800 dark:text-slate-200 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white group-hover:text-blue-600 truncate">
                    {isPlaceholderMode ? '[GitHub]' : profile.github}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
            </div>

            {/* Location */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{profile.location}</span>
            </div>

            {/* Action buttons */}
            <div className="pt-3 space-y-2">
              <button
                type="button"
                onClick={downloadVCard}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Contact Card (.vcf)</span>
              </button>

              <button
                type="button"
                onClick={onOpenPdf}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-xl transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Inspect Original 10-Slide PDF Deck</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Hiring & Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Inquiry Form · Slide 10
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Send an IT Role or Project Inquiry
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Direct inquiry dispatched to KaiSheng Zheng. Responses typically within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Message Dispatched Successfully
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="font-semibold text-slate-900 dark:text-white">{formData.senderName}</span>. Your inquiry regarding <span className="font-medium text-blue-600 dark:text-blue-400">{formData.roleType}</span> at <span className="font-semibold text-slate-900 dark:text-white">{formData.organization || 'your organization'}</span> has been recorded.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      senderName: '',
                      senderEmail: '',
                      organization: '',
                      roleType: 'Full-Time IT Role',
                      message: '',
                    });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="senderName"
                      required
                      placeholder="e.g. Alex Chen"
                      value={formData.senderName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Work Email *
                    </label>
                    <input
                      type="email"
                      name="senderEmail"
                      required
                      placeholder="alex.chen@company.com"
                      value={formData.senderEmail}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="e.g. CloudScale Tech"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      name="roleType"
                      value={formData.roleType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Full-Time IT Role">Full-Time IT Role</option>
                      <option value="Contract Infrastructure Project">Contract Infrastructure Project</option>
                      <option value="Systems Administration Opening">Systems Administration Opening</option>
                      <option value="Network / Helpdesk Opportunity">Network / Helpdesk Opportunity</option>
                      <option value="General Professional Networking">General Professional Networking</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message / Opportunity Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Provide details about the role, technical environment, or scheduling preferences..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry to KaiSheng</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
