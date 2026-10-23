import React, { useState } from 'react';
import { AGENCY_CONTACT } from '../data/agencyData';
import { WaterRippleEffect } from './WaterRippleEffect';
import { RealGrowthBadge } from './RealGrowthBadge';
import onlineServiceBg from '../assets/images/online_service_bg_1792764313681.jpg';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices }) => {
  const [activeTab, setActiveTab] = useState<'30d' | '60d' | '90d'>('30d');

  const pathVariants = {
    '30d': 'M0,60 C40,55 70,45 100,48 C140,52 180,25 220,20 C260,15 280,5 300,2',
    '60d': 'M0,65 C50,60 80,42 120,40 C160,38 200,18 240,12 C270,8 290,3 300,1',
    '90d': 'M0,68 C45,62 90,50 135,35 C175,22 220,12 260,6 C280,3 295,2 300,1'
  };

  const currentPath = pathVariants[activeTab];

  return (
    <section className="relative w-full min-h-[900px] flex items-center justify-center py-16 lg:py-24 overflow-hidden bg-surface-container-lowest">
      {/* Interactive Transparent Water Ripple Animation Canvas (Move mouse to create ripples) */}
      <WaterRippleEffect />

      {/* Online Service Related Background Imagery */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src={onlineServiceBg}
          alt="Online Digital Services Headquarters"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/85 to-surface-container-lowest/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-container/20 via-transparent to-transparent" />
        {/* Subtle digital matrix grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,206,254,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,206,254,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
      </div>

      {/* Ambient directional light spots */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary-container/20 rounded-full blur-[128px] pointer-events-none z-0" />
      <div className="absolute top-1/3 -right-24 w-[32rem] h-[32rem] bg-secondary-container/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-tertiary-container/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          {/* Top Badges Row */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high/80 text-secondary text-xs font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-outline-variant/30">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <span className="tracking-widest uppercase">STRATEGY × CREATIVITY × TECHNOLOGY</span>
            </div>

            {/* Water Ripple Interactive Hint */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high/60 text-secondary/90 text-[11px] font-medium border border-secondary/25 shadow-sm">
              <span className="material-symbols-outlined text-[14px] text-secondary animate-bounce">water_drop</span>
              <span>Water Ripple Active</span>
            </div>
          </div>

          {/* User Requested Symbol: Real Growth for Your Business */}
          <div className="pt-1">
            <RealGrowthBadge onClick={onStartProject} size="md" />
          </div>

          {/* Main Headline */}
          <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight max-w-2xl leading-[1.12]">
            Turn Your Vision Into{' '}
            <span className="bg-gradient-to-r from-secondary-container via-primary-fixed to-tertiary bg-clip-text text-transparent">
              Digital Growth.
            </span>
          </h1>

          {/* Supporting Body */}
          <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            We help businesses build stronger digital identities through creative marketing, strategic advertising, compelling content, and modern digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto flex items-center justify-center gap-2 glow-btn text-surface-container-lowest px-8 py-4 rounded-full font-semibold text-xs tracking-wider uppercase shadow-[0_10px_30px_rgba(0,206,254,0.35)]"
            >
              <span>Start a Project</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-surface-container-high/70 hover:bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-semibold text-xs tracking-wider uppercase transition-all border border-outline-variant/30"
            >
              <span className="material-symbols-outlined text-secondary text-[20px]">explore</span>
              <span>Explore Our Services</span>
            </button>
          </div>

          {/* Metric Anchors */}
          <div className="grid grid-cols-3 gap-6 pt-6 w-full max-w-lg border-t border-outline-variant/15">
            <div className="flex flex-col">
              <span className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-tertiary">
                {AGENCY_CONTACT.metrics.avgRoi}
              </span>
              <span className="text-[11px] text-on-surface-variant uppercase tracking-wider font-medium mt-0.5">
                Avg. Ad ROI
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-secondary">
                {AGENCY_CONTACT.metrics.systems}
              </span>
              <span className="text-[11px] text-on-surface-variant uppercase tracking-wider font-medium mt-0.5">
                Core Systems
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-primary-fixed">
                {AGENCY_CONTACT.metrics.transparentRoi}
              </span>
              <span className="text-[11px] text-on-surface-variant uppercase tracking-wider font-medium mt-0.5">
                Transparent ROI
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Growth Art Composition */}
        <div className="lg:col-span-5 relative flex items-center justify-center py-6">
          {/* Floating Glass Container */}
          <div className="relative w-full max-w-md aspect-[4/5] bg-surface-container/75 rounded-3xl p-6 sm:p-7 shadow-[0_30px_70px_rgba(0,0,0,0.6)] backdrop-blur-2xl border border-outline-variant/30 flex flex-col justify-between overflow-hidden">
            {/* Holographic Gradient Shimmer */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-tertiary/20 rounded-full blur-3xl pointer-events-none" />

            {/* Top Section: Interactive Analytics Widget */}
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-secondary border border-primary-container/30">
                    <span className="material-symbols-outlined text-[22px]">trending_up</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Growth Engine</h4>
                    <p className="text-[11px] text-on-surface-variant">Real-time Performance</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-tertiary-container/40 text-tertiary text-xs font-semibold flex items-center gap-1 border border-tertiary/30">
                  <span className="material-symbols-outlined text-[14px]">bolt</span> +340%
                </span>
              </div>

              {/* Time window selector */}
              <div className="flex items-center gap-1 bg-surface-container-lowest p-1 rounded-xl text-[10px] font-semibold text-on-surface-variant">
                {(['30d', '60d', '90d'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTab(t)}
                    className={`flex-1 py-1 rounded-lg transition-colors ${
                      activeTab === t ? 'bg-surface-container-high text-secondary' : 'hover:text-on-surface'
                    }`}
                  >
                    {t.toUpperCase()} Cycle
                  </button>
                ))}
              </div>

              {/* SVG Data Visualizer */}
              <div className="w-full h-32 rounded-2xl bg-surface-container-lowest/80 p-3.5 flex flex-col justify-between border border-outline-variant/20">
                <div className="flex items-center justify-between text-on-surface-variant text-[11px]">
                  <span>Revenue Trajectory ({activeTab.toUpperCase()})</span>
                  <span className="text-tertiary font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping" />
                    Live Scaling
                  </span>
                </div>
                <svg className="w-full h-16 overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 70">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#00cefe" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00cefe" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d={currentPath}
                    fill="none"
                    stroke="#00cefe"
                    strokeLinecap="round"
                    strokeWidth="3"
                    className="transition-all duration-500"
                  />
                  <path
                    d={`${currentPath} L300,70 L0,70 Z`}
                    fill="url(#chartGradient)"
                    className="transition-all duration-500"
                  />
                  <circle cx="300" cy="2" r="6" fill="#2ae370" className="animate-ping" />
                  <circle cx="300" cy="2" r="4" fill="#2ae370" />
                </svg>
              </div>
            </div>

            {/* User Requested Symbol: Real Growth for Your Business */}
            <div className="relative z-10 -translate-x-2 hover:translate-x-0 transition-transform">
              <RealGrowthBadge onClick={onStartProject} size="sm" className="w-full bg-surface-container-high/90" />
            </div>

            {/* Middle Floating Pill Card */}
            <div className="relative z-10 flex items-center gap-3.5 bg-surface-container-high/85 backdrop-blur-md p-3.5 rounded-2xl border border-outline-variant/20 shadow-lg -translate-x-2 hover:translate-x-0 transition-transform">
              <div className="w-9 h-9 rounded-lg bg-tertiary/20 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-on-surface">Multichannel Reach</span>
                <span className="text-[11px] text-on-surface-variant">Meta, Google, YouTube & TikTok</span>
              </div>
            </div>

            {/* Bottom Card: Strategy Badge */}
            <div className="relative z-10 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-2xl border border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-sm font-bold text-on-surface">Precision Funnels</span>
                  <span className="text-[11px] text-on-surface-variant">Strategy + Creative Execution</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-secondary animate-bounce">arrow_upward</span>
            </div>
          </div>

          {/* Floating Decorative Orb */}
          <div className="absolute -bottom-6 -right-4 w-32 h-32 rounded-full bg-gradient-to-tr from-tertiary/25 to-secondary-container/25 backdrop-blur-xl p-4 shadow-2xl border border-white/10 flex items-center justify-center text-center">
            <span className="text-[11px] text-on-surface font-bold uppercase tracking-tight leading-tight">
              Engineered<br />for ROI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
