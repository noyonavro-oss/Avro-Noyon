import React, { useState } from 'react';

interface RoiCalculatorProps {
  currency: 'USD' | 'BDT';
  onApplyPlan: (planDetails: string) => void;
}

interface IndustryConfig {
  id: string;
  name: string;
  icon: string;
  baseRoas: number;
  avgOrderValueUSD: number;
  avgOrderValueBDT: number;
  cpaUSD: number;
  cpaBDT: number;
}

const INDUSTRIES: IndustryConfig[] = [
  {
    id: 'ecommerce',
    name: 'E-Commerce / F-Commerce',
    icon: 'shopping_bag',
    baseRoas: 4.8,
    avgOrderValueUSD: 55,
    avgOrderValueBDT: 2200,
    cpaUSD: 11.5,
    cpaBDT: 450
  },
  {
    id: 'b2b',
    name: 'B2B & High-Ticket Services',
    icon: 'business_center',
    baseRoas: 5.6,
    avgOrderValueUSD: 850,
    avgOrderValueBDT: 65000,
    cpaUSD: 150,
    cpaBDT: 11500
  },
  {
    id: 'local',
    name: 'Local Business & Healthcare',
    icon: 'local_hospital',
    baseRoas: 6.2,
    avgOrderValueUSD: 120,
    avgOrderValueBDT: 8500,
    cpaUSD: 19,
    cpaBDT: 1350
  },
  {
    id: 'saas',
    name: 'Tech, SaaS & Info Products',
    icon: 'devices',
    baseRoas: 4.2,
    avgOrderValueUSD: 80,
    avgOrderValueBDT: 5500,
    cpaUSD: 19,
    cpaBDT: 1300
  }
];

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ currency, onApplyPlan }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('ecommerce');
  const [adSpend, setAdSpend] = useState<number>(currency === 'USD' ? 2500 : 200000);
  const [optimizationLevel, setOptimizationLevel] = useState<'new' | 'improving' | 'scaling'>('improving');

  const industry = INDUSTRIES.find((i) => i.id === selectedIndustry) || INDUSTRIES[0];

  // Multiplier adjustments based on optimization tier
  const multiplier = optimizationLevel === 'new' ? 0.85 : optimizationLevel === 'improving' ? 1.0 : 1.25;
  const effectiveRoas = Number((industry.baseRoas * multiplier).toFixed(1));

  const estimatedRevenue = Math.round(adSpend * effectiveRoas);
  const estimatedProfit = estimatedRevenue - adSpend;
  
  const unitCpa = currency === 'USD' ? industry.cpaUSD : industry.cpaBDT;
  const estimatedConversions = Math.round(adSpend / (unitCpa / multiplier));

  const handleApply = () => {
    const summary = `ROI Projection: ${industry.name} | Budget: ${currency === 'USD' ? `$${adSpend.toLocaleString()}` : `৳${adSpend.toLocaleString()}`} | Expected ROAS: ${effectiveRoas}x | Est. Revenue: ${currency === 'USD' ? `$${estimatedRevenue.toLocaleString()}` : `৳${estimatedRevenue.toLocaleString()}`}`;
    onApplyPlan(summary);
  };

  return (
    <div className="w-full bg-surface-container rounded-3xl p-6 lg:p-10 border border-outline-variant/20 shadow-2xl relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-tertiary text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[16px]">calculate</span>
              <span>Interactive Growth Matrix</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              Calculate Your Revenue Trajectory
            </h3>
            <p className="text-body-sm text-on-surface-variant max-w-xl mt-1">
              Test your ad budget across our validated campaign benchmarks. See projected customer volume, ROAS, and net return.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-on-surface-variant bg-surface-container-lowest px-4 py-2 rounded-xl border border-outline-variant/20">
            <span className="text-tertiary font-bold">140+</span>
            <span>Live agency accounts benchmarked</span>
          </div>
        </div>

        {/* Input & Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Industry Selector */}
            <div>
              <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
                1. Select Industry Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                      selectedIndustry === ind.id
                        ? 'bg-primary-container/20 border-primary-container text-on-surface shadow-md'
                        : 'bg-surface-container-low/70 border-outline-variant/20 text-on-surface-variant hover:text-on-surface hover:border-outline-variant/50'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      selectedIndustry === ind.id ? 'bg-secondary text-surface-container-lowest font-bold' : 'bg-surface-container-high text-secondary'
                    }`}>
                      <span className="material-symbols-outlined text-[20px]">{ind.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-on-surface">{ind.name}</div>
                      <div className="text-[11px] text-tertiary font-medium">Avg ~{ind.baseRoas}x ROAS</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Ad Spend Slider */}
            <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/20 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  2. Monthly Advertising Budget
                </label>
                <div className="text-headline-sm font-bold text-tertiary">
                  {currency === 'USD' ? `$${adSpend.toLocaleString()}` : `৳${adSpend.toLocaleString()}`}
                </div>
              </div>

              <input
                type="range"
                min={currency === 'USD' ? 500 : 30000}
                max={currency === 'USD' ? 25000 : 2500000}
                step={currency === 'USD' ? 250 : 10000}
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-secondary"
              />

              <div className="flex justify-between text-[11px] text-on-surface-variant">
                <span>{currency === 'USD' ? '$500' : '৳30,000'}</span>
                <span>{currency === 'USD' ? '$10,000' : '৳1,000,000'}</span>
                <span>{currency === 'USD' ? '$25,000+' : '৳2,500,000+'}</span>
              </div>
            </div>

            {/* Optimization Status */}
            <div>
              <label className="block text-xs font-semibold text-secondary uppercase tracking-wider mb-2.5">
                3. Creative & Funnel Setup Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'new', label: 'Fresh Brand', desc: 'No prior ads' },
                  { id: 'improving', label: 'Active Funnel', desc: 'Ready to scale' },
                  { id: 'scaling', label: 'High Velocity', desc: 'Multi-creative test' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setOptimizationLevel(opt.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      optimizationLevel === opt.id
                        ? 'bg-secondary-container/20 border-secondary text-secondary font-bold'
                        : 'bg-surface-container-low/70 border-outline-variant/20 text-on-surface-variant'
                    }`}
                  >
                    <div className="text-xs font-semibold">{opt.label}</div>
                    <div className="text-[10px] opacity-75">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Projection Card */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-6 rounded-3xl border border-secondary/20 shadow-2xl flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-secondary font-bold">
                  Estimated 30-Day Output
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">Growth Forecast</h4>
              </div>
              <div className="px-3 py-1 rounded-full bg-tertiary-container/30 text-tertiary text-xs font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span>{effectiveRoas}x ROAS</span>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col">
                <span className="text-[11px] text-on-surface-variant uppercase tracking-wider">Gross Revenue</span>
                <span className="text-headline-md font-bold text-tertiary mt-1">
                  {currency === 'USD' ? `$${estimatedRevenue.toLocaleString()}` : `৳${estimatedRevenue.toLocaleString()}`}
                </span>
                <span className="text-[10px] text-on-surface-variant mt-1">Direct from campaigns</span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col">
                <span className="text-[11px] text-on-surface-variant uppercase tracking-wider">Est. Orders / Leads</span>
                <span className="text-headline-md font-bold text-secondary mt-1">
                  ~{estimatedConversions.toLocaleString()}
                </span>
                <span className="text-[10px] text-on-surface-variant mt-1">High-intent conversions</span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col">
                <span className="text-[11px] text-on-surface-variant uppercase tracking-wider">Net Gross Margin</span>
                <span className="text-headline-md font-bold text-primary-fixed mt-1">
                  {currency === 'USD' ? `$${estimatedProfit.toLocaleString()}` : `৳${estimatedProfit.toLocaleString()}`}
                </span>
                <span className="text-[10px] text-on-surface-variant mt-1">After ad spend deduction</span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col">
                <span className="text-[11px] text-on-surface-variant uppercase tracking-wider">Projected CPA</span>
                <span className="text-headline-md font-bold text-on-surface mt-1">
                  {currency === 'USD' 
                    ? `$${(adSpend / estimatedConversions).toFixed(1)}` 
                    : `৳${Math.round(adSpend / estimatedConversions).toLocaleString()}`
                  }
                </span>
                <span className="text-[10px] text-on-surface-variant mt-1">Per paying customer</span>
              </div>
            </div>

            <div className="bg-surface-container p-4 rounded-2xl border border-outline-variant/20 text-xs text-on-surface-variant">
              <div className="flex items-center gap-2 text-tertiary font-semibold mb-1">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Next Growth Execution Guarantee</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Calculations based on 2025-2026 Meta Advantage+, Google Search, and localized conversion funnels. We tune creative velocity to consistently outperform these numbers.
              </p>
            </div>

            <button
              onClick={handleApply}
              className="w-full py-4 rounded-full glow-btn text-surface-container-lowest font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Deploy This Growth Plan</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
