import React, { useState } from 'react';
import { ServiceItem } from '../data/agencyData';
import { useAdmin } from '../context/AdminContext';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onDeployEngine: (engineName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onDeployEngine
}) => {
  const { services } = useAdmin();
  const [filter, setFilter] = useState<'all' | 'performance' | 'creative' | 'infrastructure'>('all');

  const filteredServices = filter === 'all' 
    ? services 
    : services.filter((s) => s.category === filter);

  return (
    <div className="flex flex-col w-full" id="services-grid">
      {/* INTRODUCTORY BRAND STRIP */}
      <section className="w-full bg-surface-container-low py-16 border-y border-outline-variant/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
                Our Foundation
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-4xl lg:text-5xl font-bold text-on-surface mt-1">
                Creative Thinking. Digital Solutions.{' '}
                <span className="text-tertiary">One Growth Partner.</span>
              </h2>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-md">
              Built on disciplined methodologies designed to accelerate market share, cultivate customer loyalty, and scale revenues cleanly.
            </p>
          </div>

          {/* 4 Core Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/20 hover:border-secondary/40 transition-all flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-primary-container/20 text-secondary flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                <span className="material-symbols-outlined text-[24px]">architecture</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">Strategic Planning</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                In-depth market intelligence, competitive analysis, and audience segmentation guiding every move.
              </p>
            </div>

            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/20 hover:border-secondary/40 transition-all flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                <span className="material-symbols-outlined text-[24px]">palette</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">Creative Execution</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Thumb-stopping visual assets, high-converting ad copy, and bespoke branding that turns heads.
              </p>
            </div>

            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/20 hover:border-secondary/40 transition-all flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-tertiary-container/30 text-tertiary flex items-center justify-center group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined text-[24px]">groups</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">Audience-Focused</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Crafting hyper-relevant messages tailored directly to consumer desires and purchase barriers.
              </p>
            </div>

            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/20 hover:border-secondary/40 transition-all flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest text-primary-fixed flex items-center justify-center group-hover:bg-primary-fixed group-hover:text-on-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-[24px]">query_stats</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface">Transparent Comms</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Live performance dashboards, weekly progress calls, and absolute honesty with zero jargon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12 OFFICIAL SERVICES SECTION */}
      <section className="w-full py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3">
            <span className="text-xs font-semibold text-tertiary uppercase tracking-widest">
              End-to-End Solutions
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface">
              {services.length} Powerful Services. <br className="hidden sm:inline" />One Creative Growth Partner.
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Complete, high-performance digital capabilities engineered to scale your brand across the full customer journey.
            </p>

            {/* Category filter tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: 'all', label: `All Services (${services.length})` },
                { id: 'performance', label: 'Performance Marketing' },
                { id: 'creative', label: 'Creative Production' },
                { id: 'infrastructure', label: 'Digital Infrastructure' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    filter === tab.id
                      ? 'bg-primary-container text-on-primary-container shadow-sm'
                      : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 12 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-surface-container-low/70 hover:bg-surface-container p-6 rounded-3xl border border-outline-variant/20 hover:border-secondary/40 shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-lg text-2xl font-bold text-outline-variant/60 group-hover:text-secondary transition-colors font-mono">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                      <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-tertiary uppercase font-semibold tracking-wider">
                      {service.categoryLabel}
                    </span>
                    <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-6 flex items-center justify-between border-t border-outline-variant/15 mt-4">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary group-hover:text-tertiary transition-colors"
                  >
                    <span>Explore Service</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  <span className="text-[11px] text-on-surface-variant">
                    {service.metrics}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICE CATEGORIES (3 Feature Panels) */}
      <section className="w-full py-20 bg-surface-container-lowest border-t border-outline-variant/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              Integrated Capability Units
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold text-on-surface">
              Three Focused Engines of Brand Velocity.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Panel 1: Performance Marketing */}
            <div className="relative bg-surface-container p-8 rounded-3xl border border-outline-variant/20 shadow-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-full blur-2xl" />
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-secondary-container/20 text-secondary font-semibold">
                    Acquisition
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[28px]">query_stats</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface">Performance Marketing</h3>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    Engineered to capture and convert high-intent buyers through targeted multi-platform ad channels.
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                    <span>Social Media Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                    <span>Facebook & Instagram Ads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                    <span>Google Business Profile & Local SEO</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => onDeployEngine('Performance Marketing')}
                  className="w-full py-3 rounded-xl bg-surface-container-high hover:bg-secondary-container hover:text-on-secondary-container font-semibold text-xs tracking-wider uppercase text-center block transition-colors"
                >
                  Deploy Campaign
                </button>
              </div>
            </div>

            {/* Panel 2: Creative Production */}
            <div className="relative bg-surface-container p-8 rounded-3xl border border-outline-variant/20 shadow-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/10 rounded-full blur-2xl" />
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-tertiary-container/30 text-tertiary font-semibold">
                    Brand & Media
                  </span>
                  <span className="material-symbols-outlined text-tertiary text-[28px]">auto_videocam</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface">Creative Production</h3>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    Bespoke narrative craftsmanship combined with next-generation AI workflows for media that mesmerizes.
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                    <span>Graphic Design & Promotional Content</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                    <span>AI Voiceover & Audio Ads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                    <span>AI Promotional Video & Editing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                    <span>Logo Design, Copywriting & YouTube</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => onDeployEngine('Creative Production')}
                  className="w-full py-3 rounded-xl bg-surface-container-high hover:bg-tertiary hover:text-on-tertiary font-semibold text-xs tracking-wider uppercase text-center block transition-colors"
                >
                  Ignite Creatives
                </button>
              </div>
            </div>

            {/* Panel 3: Digital Infrastructure */}
            <div className="relative bg-surface-container p-8 rounded-3xl border border-outline-variant/20 shadow-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary-container/20 text-primary-fixed font-semibold">
                    Technology
                  </span>
                  <span className="material-symbols-outlined text-primary-fixed text-[28px]">terminal</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface">Digital Infrastructure</h3>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    Future-proof foundation that turns traffic into closed business with scalable systems and automation.
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 text-xs text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                    <span>Website & E-commerce Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                    <span>AI Tools & Automation Workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                    <span>Digital Strategy & Growth Consultation</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => onDeployEngine('Digital Infrastructure')}
                  className="w-full py-3 rounded-xl bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container font-semibold text-xs tracking-wider uppercase text-center block transition-colors"
                >
                  Build Systems
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
