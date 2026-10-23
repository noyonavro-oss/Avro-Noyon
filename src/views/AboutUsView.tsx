import React from 'react';
import { AGENCY_CONTACT } from '../data/agencyData';

interface AboutUsViewProps {
  onStartProject: () => void;
}

export const AboutUsView: React.FC<AboutUsViewProps> = ({ onStartProject }) => {
  return (
    <div className="w-full min-h-screen py-16 flex flex-col gap-20 bg-surface">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-tertiary text-xs font-semibold border border-outline-variant/30">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>Agency Heritage & Operational Philosophy</span>
          </div>
          <h1 className="font-headline-xl text-3xl sm:text-5xl font-extrabold text-on-surface">
            We Build Growth Engines for Ambitious Founders
          </h1>
          <p className="text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
            Headquartered in Sirajganj, Bangladesh, Next Growth BD bridges local e-commerce mastery with world-class international advertising benchmarks.
          </p>
        </div>

        {/* Agency Metrics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 bg-surface-container-low p-6 lg:p-8 rounded-3xl border border-outline-variant/20 shadow-xl">
          <div className="flex flex-col items-center text-center p-4">
            <span className="font-headline-xl text-3xl lg:text-4xl font-extrabold text-tertiary">
              {AGENCY_CONTACT.metrics.avgRoi}
            </span>
            <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold mt-1">
              Average Client ROI
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-4 border-l border-outline-variant/15">
            <span className="font-headline-xl text-3xl lg:text-4xl font-extrabold text-secondary">
              {AGENCY_CONTACT.metrics.revenueScaled}
            </span>
            <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold mt-1">
              Revenue Generated
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-4 border-l border-outline-variant/15">
            <span className="font-headline-xl text-3xl lg:text-4xl font-extrabold text-primary-fixed">
              {AGENCY_CONTACT.metrics.clientsServed}
            </span>
            <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold mt-1">
              Brands Scaled
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-4 border-l border-outline-variant/15">
            <span className="font-headline-xl text-3xl lg:text-4xl font-extrabold text-tertiary">
              {AGENCY_CONTACT.metrics.avgRoas}
            </span>
            <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold mt-1">
              Average Blended ROAS
            </span>
          </div>
        </div>
      </section>

      {/* Story & Evolution Split */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
            The Next Growth BD Story
          </span>
          <h2 className="font-headline-xl text-2xl sm:text-4xl font-bold text-on-surface leading-tight">
            Rejecting Vanity Metrics to Deliver True Commercial Scale
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            <p>
              Next Growth BD was founded with a singular conviction: too many digital agencies sell buzzwords and vanity metrics while businesses bleed ad capital. Likes, impressions, and follower counts don't pay payroll—profitable sales, qualified leads, and measurable customer lifetime value do.
            </p>
            <p>
              Operating from Sirajganj Sadar, Bangladesh, our team began by solving the toughest challenges facing local e-commerce and retail merchants: high abandoned cart rates, sluggish mobile speeds, and customer drop-offs on Facebook and WhatsApp.
            </p>
            <p>
              By combining disciplined algorithmic advertising with next-generation AI workflows—including synthetic voiceovers, retention-optimized video editing, and automated lead routing—we scaled our clients beyond local barriers into global markets across North America, the UK, and Europe.
            </p>
          </div>

          <div className="pt-2 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-on-surface">Certified Performance Agency</h4>
              <p className="text-[11px] text-on-surface-variant">Meta Certified Media Buying & Google Ads Premier partner standards</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden border border-outline-variant/30 shadow-2xl bg-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT-jv3_GDWK3P9p-XhaV1TlvnsVMPoh_6y-fUgaVLo8m9U4iEP4XFf13DPYB_780YfG4P46RSIfF5vRyyWUNf914MuOVZc_vKpWumSm1ZILF7tKxILrKa8qGI_uoTwQm0I7-n_Um_tLPtGg3c6QA7PjAkodd0jObDblfPNHbNpFOFpNAeiQTshlfwICqNM85GEKdzQ72uKdeuc7_N-B3FVwrT1VUxY5V-9AlDYqVVlKog21NMwbE4rUA"
              alt="Next Growth BD Strategic Command Center"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/30 flex items-center justify-between">
              <div>
                <p className="text-xs text-on-surface font-bold">Sirajganj Sadar, Sirajganj, Bangladesh</p>
                <p className="text-[11px] text-tertiary">Active Agency Operations · 24/7 Monitoring</p>
              </div>
              <span className="material-symbols-outlined text-tertiary animate-pulse">radar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Core Team */}
      <section className="w-full py-16 bg-surface-container-low border-y border-outline-variant/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              Leadership & Specialists
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-4xl font-bold text-on-surface mt-1">
              Driven by Passion, Guided by Data
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-2">
              Our multidisciplinary team unites creative directors, ad engineers, copywriters, and full-stack developers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/20 flex flex-col items-center text-center gap-3">
              <div className="w-20 h-20 rounded-full bg-primary-container/20 border-2 border-primary-container flex items-center justify-center text-secondary mb-1">
                <span className="material-symbols-outlined text-[36px]">person</span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface">Nasir Uddin Noyon</h3>
              <span className="text-[11px] text-tertiary font-semibold uppercase tracking-wider">
                Founder & Head of Growth
              </span>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Specialist in Meta Advantage+ algorithmic ad scaling, conversion rate architecture, and direct client growth strategy.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/20 flex flex-col items-center text-center gap-3">
              <div className="w-20 h-20 rounded-full bg-secondary-container/20 border-2 border-secondary-container flex items-center justify-center text-secondary mb-1">
                <span className="material-symbols-outlined text-[36px]">movie_edit</span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface">Creative Media Studio</h3>
              <span className="text-[11px] text-secondary font-semibold uppercase tracking-wider">
                AI Video & Sound Engineering
              </span>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Crafting high-retention short-form video hooks, bilingual voiceovers, and motion graphic assets designed for peak CTR.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/20 flex flex-col items-center text-center gap-3">
              <div className="w-20 h-20 rounded-full bg-tertiary-container/20 border-2 border-tertiary-container flex items-center justify-center text-tertiary mb-1">
                <span className="material-symbols-outlined text-[36px]">pin_drop</span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface">Search & Local SEO Unit</h3>
              <span className="text-[11px] text-primary-fixed font-semibold uppercase tracking-wider">
                Google Business Specialists
              </span>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Dominating Google 3-Pack map rankings, citation networks, and high-intent organic search acquisition.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/20 flex flex-col items-center text-center gap-3">
              <div className="w-20 h-20 rounded-full bg-surface-container-high border-2 border-outline-variant flex items-center justify-center text-on-surface mb-1">
                <span className="material-symbols-outlined text-[36px]">code</span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface">Web & Automation Lab</h3>
              <span className="text-[11px] text-tertiary font-semibold uppercase tracking-wider">
                E-Commerce & CRM Engineers
              </span>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Architecting sub-second load times, bKash tokenized checkouts, and automated WhatsApp lead distribution pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Manifesto / Principles */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="bg-surface-container-low p-8 lg:p-12 rounded-3xl border border-outline-variant/25 flex flex-col gap-8">
          <div>
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              The Next Growth Manifesto
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl font-bold text-on-surface mt-1">
              The 4 Non-Negotiable Standards of Our Agency
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary-container/20 text-secondary flex items-center justify-center shrink-0">
                <span className="font-bold text-sm">01</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface">Scientific Iteration Over Guesswork</h4>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  We never scale ad spend on intuition. Every creative angle, audience cluster, and copy hook is tested systematically with strict kill/scale thresholds.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0">
                <span className="font-bold text-sm">02</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface">Speed and Creative Velocity</h4>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  The digital landscape shifts weekly. We produce, test, and refresh creative assets continuously so your campaigns never succumb to audience fatigue.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-tertiary-container/30 text-tertiary flex items-center justify-center shrink-0">
                <span className="font-bold text-sm">03</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface">Unvarnished, Candid Transparency</h4>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  Live dashboards and open WhatsApp communication. If an angle fails, you know immediately along with the exact pivot we are executing.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high text-primary-fixed flex items-center justify-center shrink-0">
                <span className="font-bold text-sm">04</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface">Aesthetic Excellence as a Moat</h4>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  High-converting doesn't mean cheap-looking. We craft visual assets with extreme polish, elevating your brand’s perceived market value.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-outline-variant/15">
            <div>
              <p className="text-xs font-semibold text-on-surface">Ready to experience what an aligned growth partner feels like?</p>
              <p className="text-[11px] text-on-surface-variant">We are currently taking on select partners for this quarter.</p>
            </div>
            <button
              onClick={onStartProject}
              className="py-3 px-6 rounded-full glow-btn text-surface-container-lowest font-bold text-xs uppercase tracking-wider whitespace-nowrap"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
