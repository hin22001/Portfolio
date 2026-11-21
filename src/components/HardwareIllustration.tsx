/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Cpu, HardDrive, Zap, Wind, Monitor, CheckCircle2 } from 'lucide-react';

export const HardwareIllustration: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<'cpu' | 'gpu' | 'ram' | 'storage' | 'psu'>('cpu');

  const partDetails = {
    cpu: {
      name: 'Processor & Thermal Solution',
      spec: 'Intel Core i7-14700K / Noctua NH-D15 chromax.black Dual-Tower Cooler',
      detail: 'High single-core IPC and multi-thread capabilities for virtualization, container compiles, and hypervisor testing. Thermal paste spread verified with zero hot spots.',
      status: 'Stable 34°C Idle / 68°C Stress Test',
    },
    gpu: {
      name: 'Dedicated PCIe Accelerator',
      spec: 'NVIDIA RTX 4070 Dual Fan / PCIe 4.0 x16 Slot',
      detail: 'Utilized for local LLM inference testing, hardware transcoding in Plex/Jellyfin containers, and multi-monitor diagnostic benches.',
      status: 'Fan stop mode active < 45°C',
    },
    ram: {
      name: 'System Memory Kit',
      spec: '64GB (2x32GB) DDR5-6000 CL30 Dual-Channel',
      detail: 'MemTest86 verified 0 errors across 4 passes. Ample capacity allocated to test multiple virtual machines, Active Directory domain controllers, and Linux nodes simultaneously.',
      status: 'XMP Profile 1 Loaded / 0 Memory Leaks',
    },
    storage: {
      name: 'High-Speed NVMe Storage Tier',
      spec: '2TB Samsung 990 Pro PCIe 4.0 NVMe + 4TB Crucial MX500 SATA SSD',
      detail: 'Fast boot drive with dedicated OS partitions and isolated hypervisor disk images. S.M.A.R.T. telemetry healthy with 100% drive health rating.',
      status: 'Sequential Read: 7,450 MB/s · Healthy',
    },
    psu: {
      name: 'Modular Power Supply Unit',
      spec: 'Corsair RM850x 850W 80 PLUS Gold Fully Modular',
      detail: 'Japanese 105°C rated capacitors, custom-length black sleeving, zero-RPM quiet fan mode under low loads, and continuous voltage regulation.',
      status: 'Voltage rails: +12V @ 12.08V / +5V @ 5.01V',
    },
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
      {/* Component Chassis Visual */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-4 text-slate-200 font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px]">
          <span className="text-slate-400">HARDWARE BENCH // OPEN-AIR CHASSIS TESTBED</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>POST PASS · DIAGNOSTIC LED: OK</span>
          </span>
        </div>

        {/* Chassis layout */}
        <div className="mt-4 grid grid-cols-12 gap-3 min-h-[220px]">
          {/* Left Column: CPU + Cooler + RAM */}
          <div className="col-span-7 flex flex-col gap-3">
            {/* CPU & Cooler */}
            <button
              type="button"
              onClick={() => setSelectedPart('cpu')}
              className={`p-3 rounded-lg border text-left transition-all ${
                selectedPart === 'cpu'
                  ? 'border-blue-500 bg-blue-950/40 text-blue-200'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span>CPU Socket & Heatsink</span>
                </span>
                <span className="text-[10px] text-emerald-400">34°C</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">LGA1700 · Dual Fan Push/Pull</p>
            </button>

            {/* RAM Slots */}
            <button
              type="button"
              onClick={() => setSelectedPart('ram')}
              className={`p-2.5 rounded-lg border text-left transition-all ${
                selectedPart === 'ram'
                  ? 'border-blue-500 bg-blue-950/40 text-blue-200'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold">
                  <Wind className="w-4 h-4 text-blue-400" />
                  <span>DDR5 Memory DIMMs (2x32GB)</span>
                </span>
                <span className="text-[10px] text-blue-400">6000 MT/s</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">Dual Channel · Low Latency CL30</p>
            </button>

            {/* Storage NVMe */}
            <button
              type="button"
              onClick={() => setSelectedPart('storage')}
              className={`p-2.5 rounded-lg border text-left transition-all ${
                selectedPart === 'storage'
                  ? 'border-blue-500 bg-blue-950/40 text-blue-200'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold">
                  <HardDrive className="w-4 h-4 text-blue-400" />
                  <span>M.2 NVMe SSD (PCIe 4.0)</span>
                </span>
                <span className="text-[10px] text-slate-400">2TB Samsung 990</span>
              </div>
            </button>
          </div>

          {/* Right Column: GPU & PSU */}
          <div className="col-span-5 flex flex-col gap-3">
            {/* GPU */}
            <button
              type="button"
              onClick={() => setSelectedPart('gpu')}
              className={`flex-1 p-3 rounded-lg border text-left transition-all flex flex-col justify-between ${
                selectedPart === 'gpu'
                  ? 'border-blue-500 bg-blue-950/40 text-blue-200'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 text-slate-300'
              }`}
            >
              <div>
                <span className="flex items-center gap-1.5 font-bold">
                  <Monitor className="w-4 h-4 text-blue-400" />
                  <span>PCIe GPU</span>
                </span>
                <p className="text-[10px] text-slate-400 mt-1">Dual Axial Fans · Reinforcement Bracket</p>
              </div>
              <div className="text-[10px] text-emerald-400 mt-2">Zero Sag · 12VHPWR Stable</div>
            </button>

            {/* Modular PSU */}
            <button
              type="button"
              onClick={() => setSelectedPart('psu')}
              className={`p-2.5 rounded-lg border text-left transition-all ${
                selectedPart === 'psu'
                  ? 'border-blue-500 bg-blue-950/40 text-blue-200'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-bold">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>850W Gold PSU</span>
                </span>
                <span className="text-[10px] text-emerald-400">92% Eff</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">Clean Cable Combs & Velcro</p>
            </button>
          </div>
        </div>
      </div>

      {/* Detail panel of selected component */}
      <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
            {partDetails[selectedPart].name}
          </h4>
          <span className="text-xs font-mono text-blue-600 dark:text-blue-400">
            {partDetails[selectedPart].status}
          </span>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300 font-mono mt-1 font-medium">
          {partDetails[selectedPart].spec}
        </p>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
          {partDetails[selectedPart].detail}
        </p>
      </div>
    </div>
  );
};
