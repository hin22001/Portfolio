/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Terminal, Network, Wrench, Shield, Search, Check, Layers, Cpu, Server, HardDrive, Wifi } from 'lucide-react';
import { technicalSkills } from '../data/defaultData';
import { PageId } from '../components/Navbar';

interface SkillsPageProps {
  onNavigate: (page: PageId) => void;
  isPlaceholderMode: boolean;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({
  onNavigate,
  isPlaceholderMode,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    level: string;
    context: string;
    category: string;
  } | null>(null);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 2:
        return <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      default:
        return <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* 1. Header & Slide 6 Intro */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
          Slide 6 · Technical Capabilities
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Technical skills for IT work
        </h1>
        <p className="text-base text-slate-700 dark:text-slate-300 font-medium">
          &ldquo;My technical profile spans infrastructure, development tools, and user support.&rdquo;
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Grounded in enterprise systems, automated administrative scripting, hardware diagnostics, and zero-trust networking.
        </p>
      </div>

      {/* 2. Interactive Search & Quick Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skills (e.g. Active Directory, Cisco, Python, pfSense)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <span>Filter by proficiency:</span>
          <span className="font-mono text-blue-600 dark:text-blue-400">Advanced · Proficient · Familiar</span>
        </div>
      </div>

      {/* 3. The 3 Technical Pillars from Slide 6 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {technicalSkills.map((category, catIndex) => {
          const filteredItems = category.skills.filter(
            (s) =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              s.context.toLowerCase().includes(searchQuery.toLowerCase())
          );

          return (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 shrink-0">
                    {getCategoryIcon(catIndex)}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h2>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                {isPlaceholderMode ? (
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 font-mono text-xs text-slate-500">
                    [list]
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {filteredItems.map((skill) => (
                      <div
                        key={skill.name}
                        onClick={() =>
                          setSelectedSkill({
                            ...skill,
                            category: category.title,
                          })
                        }
                        className={`p-3 rounded-xl border transition-all cursor-pointer ${
                          selectedSkill?.name === skill.name
                            ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/30'
                            : 'border-slate-100 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-850/40'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono font-medium ${
                              skill.level === 'Advanced'
                                ? 'text-blue-600 dark:text-blue-400'
                                : skill.level === 'Proficient'
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-slate-500 dark:text-slate-400'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                          {skill.context}
                        </p>
                      </div>
                    ))}
                    {filteredItems.length === 0 && (
                      <p className="text-xs text-slate-400 py-4 text-center">
                        No skills matching &ldquo;{searchQuery}&rdquo;
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>{category.skills.length} core competencies</span>
                <span className="text-blue-600 dark:text-blue-400">Click to inspect</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Interactive Skill Detail Drawer/Callout if selected */}
      {selectedSkill && (
        <div className="p-6 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-blue-200/60 dark:border-blue-900/40">
            <div>
              <span className="text-[11px] font-mono text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                {selectedSkill.category} · Selected Competency
              </span>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mt-0.5">
                {selectedSkill.name}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-blue-600 text-white">
                Level: {selectedSkill.level}
              </span>
              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="px-3 py-1 text-xs text-blue-700 dark:text-blue-300 hover:underline"
              >
                Dismiss
              </button>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">
                Practical Application & Implementation Context:
              </h4>
              <p className="text-blue-950 dark:text-blue-100 leading-relaxed">
                {selectedSkill.context}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 text-slate-200 font-mono text-[11px] space-y-1">
              <div className="text-slate-400 text-[10px]"># Verified in production environments</div>
              <div className="text-emerald-400">$ sysadmin --verify-module &quot;{selectedSkill.name}&quot;</div>
              <div className="text-slate-300">&gt; Status: READY_FOR_ENTERPRISE_DEPLOYMENT</div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Infrastructure Topology Architecture Map */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 shadow-lg space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Architectural Blueprint</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Enterprise Lab & Network Topology
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">802.1Q VLAN Isolation & Zero-Trust Layout</span>
        </div>

        {/* Visual Topology Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
          {/* Node 1: WAN & Gateway */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-blue-400">
              <span className="font-bold">01. WAN & FIREWALL</span>
              <Shield className="w-4 h-4" />
            </div>
            <p className="text-[11px] text-slate-300 font-sans">
              Dual WAN failover, stateful packet inspection, WireGuard remote access, and Snort IDS/IPS rules.
            </p>
            <div className="text-[10px] text-emerald-400 pt-1">pfSense / FortiGate</div>
          </div>

          {/* Node 2: Core Distribution */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-blue-400">
              <span className="font-bold">02. LAYER 3 CORE</span>
              <Network className="w-4 h-4" />
            </div>
            <p className="text-[11px] text-slate-300 font-sans">
              Inter-VLAN ACL routing, 10GbE SFP+ fiber uplinks, 802.1Q tagging, and DHCP snooping security.
            </p>
            <div className="text-[10px] text-emerald-400 pt-1">Cisco Catalyst 3850</div>
          </div>

          {/* Node 3: Identity & Compute */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-blue-400">
              <span className="font-bold">03. COMPUTE CLUSTER</span>
              <Cpu className="w-4 h-4" />
            </div>
            <p className="text-[11px] text-slate-300 font-sans">
              Proxmox VE 3-node HA cluster, dual Domain Controllers (Active Directory), and Docker containers.
            </p>
            <div className="text-[10px] text-emerald-400 pt-1">Windows Server & Linux</div>
          </div>

          {/* Node 4: Storage & Backup */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-blue-400">
              <span className="font-bold">04. STORAGE & BACKUP</span>
              <HardDrive className="w-4 h-4" />
            </div>
            <p className="text-[11px] text-slate-300 font-sans">
              TrueNAS ZFS mirrored pools, Veeam endpoint backups, and 3-2-1 encrypted offsite synchronization.
            </p>
            <div className="text-[10px] text-emerald-400 pt-1">ZFS Snapshots & S3 Cold Storage</div>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
          <span>Designed & maintained by KaiSheng Zheng</span>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Explore Projects implementing this architecture →
          </button>
        </div>
      </section>
    </div>
  );
};
