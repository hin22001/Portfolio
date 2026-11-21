/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Server, Activity, Shield, Wifi, HardDrive, Cpu, Terminal } from 'lucide-react';

export const RackIllustration: React.FC = () => {
  const [activePort, setActivePort] = useState<number | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string>('patch');

  return (
    <div className="relative w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 p-5 shadow-xl overflow-hidden font-mono text-xs">
      {/* Rack Mount Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-blue-400" />
          <span className="font-semibold text-slate-200 text-sm tracking-wide">RACK-01 // PRODUCTION LAB</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400 text-[11px]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
            <span>ONLINE</span>
          </span>
          <span>42U STANDARD</span>
        </div>
      </div>

      {/* Main Rack Enclosure */}
      <div className="space-y-3">
        {/* Unit 1: 24-Port Patch Panel with Blue Cabling */}
        <div 
          onClick={() => setSelectedUnit('patch')}
          className={`group p-3 rounded-lg border transition-all cursor-pointer ${
            selectedUnit === 'patch'
              ? 'border-blue-500/80 bg-blue-950/30'
              : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-blue-400 font-bold px-1.5 py-0.5 rounded bg-blue-950/80 border border-blue-800/60">1U</span>
              <span className="font-medium text-slate-300">Cat6a High-Density Patch Bay · VLAN 10-40</span>
            </div>
            <span className="text-[10px] text-slate-400">24/24 TERMINATED</span>
          </div>

          {/* RJ-45 Port Grid with Blue Cables */}
          <div className="grid grid-cols-12 gap-1.5 py-1">
            {Array.from({ length: 24 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onMouseEnter={() => setActivePort(i + 1)}
                onMouseLeave={() => setActivePort(null)}
                className={`relative h-6 rounded flex items-center justify-center border transition-all ${
                  activePort === i + 1
                    ? 'border-blue-400 bg-blue-600 shadow-sm shadow-blue-500/50'
                    : 'border-blue-900/60 bg-blue-950/70 hover:border-blue-500'
                }`}
                title={`Port ${i + 1} - Cat6a 10GbE`}
              >
                <span className="text-[9px] text-blue-200">{i + 1}</span>
                {/* Simulated cable lead down */}
                <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-blue-400" />
              </button>
            ))}
          </div>
          <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
            <span>Clean 90° Velcro Dressing</span>
            <span className="text-blue-400">T568B Standard</span>
          </div>
        </div>

        {/* Unit 2: Cisco Layer 3 Core Switch */}
        <div 
          onClick={() => setSelectedUnit('switch')}
          className={`group p-3 rounded-lg border transition-all cursor-pointer ${
            selectedUnit === 'switch'
              ? 'border-blue-500/80 bg-blue-950/30'
              : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-blue-400 font-bold px-1.5 py-0.5 rounded bg-blue-950/80 border border-blue-800/60">1U</span>
              <span className="font-medium text-slate-300">Cisco Catalyst 3850 · Layer 3 Routing</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-400">
              <span className="text-emerald-400">PoE+ 370W</span>
              <span>10G SFP+ UPLINK</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-1.5 py-1">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="h-5 rounded bg-slate-900 border border-slate-700/80 flex items-center justify-center relative"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    i % 3 === 0
                      ? 'bg-emerald-400 shadow-sm shadow-emerald-400/80 animate-ping'
                      : i % 2 === 0
                      ? 'bg-emerald-400'
                      : 'bg-amber-400/80'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Unit 3: Hypervisor Host (Proxmox / ESXi) */}
        <div 
          onClick={() => setSelectedUnit('server')}
          className={`group p-3 rounded-lg border transition-all cursor-pointer ${
            selectedUnit === 'server'
              ? 'border-blue-500/80 bg-blue-950/30'
              : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-blue-400 font-bold px-1.5 py-0.5 rounded bg-blue-950/80 border border-blue-800/60">2U</span>
              <span className="font-medium text-slate-300">Dell PowerEdge R740 · Dual Xeon 64-Core</span>
            </div>
            <span className="text-[10px] text-blue-300">Proxmox VE 8.2</span>
          </div>

          {/* Drive bays & Status LEDs */}
          <div className="flex items-center gap-2">
            <div className="flex-1 grid grid-cols-8 gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-6 rounded bg-slate-900 border border-slate-800 flex items-center justify-between px-1">
                  <HardDrive className="w-2.5 h-2.5 text-slate-500" />
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                </div>
              ))}
            </div>
            <div className="px-2 py-1 bg-slate-900 rounded border border-slate-800 text-[10px] text-slate-300 flex items-center gap-1.5 shrink-0">
              <Cpu className="w-3 h-3 text-blue-400" />
              <span>RAM: 128GB</span>
            </div>
          </div>
        </div>

        {/* Unit 4: Smart UPS & Power Distribution */}
        <div 
          onClick={() => setSelectedUnit('ups')}
          className={`group p-2.5 rounded-lg border transition-all cursor-pointer ${
            selectedUnit === 'ups'
              ? 'border-blue-500/80 bg-blue-950/30'
              : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-blue-400 font-bold px-1.5 py-0.5 rounded bg-blue-950/80 border border-blue-800/60">1U</span>
              <span className="text-slate-300 font-medium">APC Smart-UPS 1500VA Sine Wave</span>
            </div>
            <div className="flex items-center gap-3 text-[10px]">
              <span className="text-emerald-400">Load: 38% (210W)</span>
              <span className="text-blue-300">Battery: 100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Unit Context Banner */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-blue-400" />
          <span>
            {selectedUnit === 'patch' && 'Selected: Structured Cat6a patch panel with standard 90° comb cable routing'}
            {selectedUnit === 'switch' && 'Selected: Cisco 3850 Layer-3 with 802.1Q trunking and isolated VLAN subnets'}
            {selectedUnit === 'server' && 'Selected: 2U Enterprise host running Proxmox VE, ZFS storage & Docker VMs'}
            {selectedUnit === 'ups' && 'Selected: Pure sine wave battery backup ensuring graceful hypervisor shutdown'}
          </span>
        </div>
        <span className="text-blue-400 underline cursor-pointer hover:text-blue-300">Click unit to inspect</span>
      </div>
    </div>
  );
};
