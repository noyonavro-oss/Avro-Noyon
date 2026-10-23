import React from 'react';
import { AGENCY_CONTACT } from '../data/agencyData';

interface MarketReachProps {
  onScaleBangladesh: () => void;
  onScaleInternational: () => void;
}

export const MarketReach: React.FC<MarketReachProps> = ({
  onScaleBangladesh,
  onScaleInternational
}) => {
  return (
    <section className="w-full py-20 bg-surface-container-low border-y border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-2">
          <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
            Market Reach
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface">
            From Bangladesh to the Global Marketplace.
          </h2>
          <p className="text-body-md text-on-surface-variant">
            We bridge hyper-local precision with international operational benchmarks to serve bold founders everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Bangladesh Market Card */}
          <div className="p-8 rounded-3xl bg-surface-container border border-outline-variant/20 hover:border-tertiary/40 shadow-xl flex flex-col justify-between gap-6 relative overflow-hidden group transition-all">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-tertiary-container/30 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">flag</span>
              </div>
              <h3 className="font-headline-lg text-2xl font-bold text-on-surface">Bangladesh Ecosystem</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Tailored growth solutions crafted for Bangladeshi e-commerce merchants, local startups, retail brands, and service businesses navigating local consumer trends, bKash/Nagad checkout funnels, and high-conversion Bengali-English content marketing.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs">
                  F-Commerce Acceleration
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs">
                  Local Search SEO
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs">
                  Direct WhatsApp Funnels
                </span>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between border-t border-outline-variant/15">
              <button
                onClick={onScaleBangladesh}
                className="inline-flex items-center gap-2 text-tertiary font-semibold text-xs tracking-wider uppercase hover:underline"
              >
                <span>Scale In Bangladesh</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
              <a
                href={`https://wa.me/${AGENCY_CONTACT.whatsappNumber}?text=Hello%20Next%20Growth%20BD,%20I%20run%20a%20business%20in%20Bangladesh`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-on-surface-variant hover:text-tertiary flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>

          {/* International Market Card */}
          <div className="p-8 rounded-3xl bg-surface-container border border-outline-variant/20 hover:border-secondary/40 shadow-xl flex flex-col justify-between gap-6 relative overflow-hidden group transition-all">
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">public</span>
              </div>
              <h3 className="font-headline-lg text-2xl font-bold text-on-surface">International Reach</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Comprehensive digital marketing, UI/UX design, AI audio-video production, and conversion funnels engineered for businesses seeking global audience acquisition across North America, the UK, Europe, Australia, and the Middle East.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs">
                  Global Meta Ad Networks
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs">
                  AI Multimedia Production
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs">
                  Cross-border E-commerce
                </span>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between border-t border-outline-variant/15">
              <button
                onClick={onScaleInternational}
                className="inline-flex items-center gap-2 text-secondary font-semibold text-xs tracking-wider uppercase hover:underline"
              >
                <span>Expand Internationally</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
              <a
                href={`https://wa.me/${AGENCY_CONTACT.whatsappNumber}?text=Hello%20Next%20Growth%20BD,%20I%20am%20looking%20for%20Global%20Marketing%20Services`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-on-surface-variant hover:text-secondary flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* TRUST & WORKING PRINCIPLES */}
        <div className="pt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                Integrity by Design
              </span>
              <h3 className="font-headline-xl text-2xl sm:text-3xl font-bold text-on-surface mt-1">
                How We Build Better <span className="text-primary">Working Relationships.</span>
              </h3>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-sm">
              No locking clients into ambiguous contracts. We earn your partnership every single month through proven execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col gap-3">
              <span className="material-symbols-outlined text-secondary text-[28px]">mark_chat_read</span>
              <h4 className="font-headline-sm text-sm font-bold text-on-surface">Transparent Comms</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Regular briefings, swift WhatsApp responses, and open lines at every stage.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col gap-3">
              <span className="material-symbols-outlined text-tertiary text-[28px]">assignment_turned_in</span>
              <h4 className="font-headline-sm text-sm font-bold text-on-surface">Clear Scopes</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Strict deliverable roadmaps with transparent timelines and no hidden fees.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col gap-3">
              <span className="material-symbols-outlined text-primary-fixed text-[28px]">draw</span>
              <h4 className="font-headline-sm text-sm font-bold text-on-surface">Thoughtful Craft</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Design and copy created with extreme care, respecting your brand's unique ethos.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col gap-3">
              <span className="material-symbols-outlined text-secondary text-[28px]">table_chart_view</span>
              <h4 className="font-headline-sm text-sm font-bold text-on-surface">Honest Reporting</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Real numbers and candid feedback on what works and what needs refinement.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col gap-3">
              <span className="material-symbols-outlined text-tertiary text-[28px]">autorenew</span>
              <h4 className="font-headline-sm text-sm font-bold text-on-surface">Constant Evolution</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                We continually adopt newer AI tools, testing methodologies, and creative angles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
