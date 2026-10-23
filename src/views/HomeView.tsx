import React from 'react';
import { Hero } from '../components/Hero';
import { RoiCalculator } from '../components/RoiCalculator';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HowWeWork } from '../components/HowWeWork';
import { PortfolioSection } from '../components/PortfolioSection';
import { MarketReach } from '../components/MarketReach';
import { FaqSection } from '../components/FaqSection';
import { RealGrowthBadge } from '../components/RealGrowthBadge';
import { ServiceItem, PortfolioItem, AGENCY_CONTACT } from '../data/agencyData';

interface HomeViewProps {
  onStartProject: (serviceId?: string) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectPortfolioItem: (item: PortfolioItem) => void;
  onExploreFullPortfolio: () => void;
  onExploreServices: () => void;
  currency: 'USD' | 'BDT';
}

export const HomeView: React.FC<HomeViewProps> = ({
  onStartProject,
  onSelectService,
  onSelectPortfolioItem,
  onExploreFullPortfolio,
  onExploreServices,
  currency
}) => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section with 3D Growth Art */}
      <Hero
        onStartProject={() => onStartProject()}
        onExploreServices={onExploreServices}
      />

      {/* Featured Interactive ROI Calculator */}
      <section className="w-full py-12 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RoiCalculator
            currency={currency}
            onApplyPlan={(planText) => {
              onStartProject();
            }}
          />
        </div>
      </section>

      {/* Services Section (4 Core Principles + 12 Services + 3 Capability Units) */}
      <ServicesSection
        onSelectService={onSelectService}
        onDeployEngine={(engine) => onStartProject()}
      />

      {/* Why Choose Next Growth BD (War room visual + 6 pillars) */}
      <WhyChooseUs />

      {/* How We Work (4 Process Steps) */}
      <HowWeWork />

      {/* Portfolio Showcase */}
      <PortfolioSection
        onSelectItem={onSelectPortfolioItem}
        onExploreFullPortfolio={onExploreFullPortfolio}
      />

      {/* Market Reach (Bangladesh & International) & Trust Principles */}
      <MarketReach
        onScaleBangladesh={() => onStartProject()}
        onScaleInternational={() => onStartProject()}
      />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* DRAMATIC FINAL CTA SECTION */}
      <section className="relative w-full py-20 lg:py-32 bg-surface-container-lowest overflow-hidden border-t border-outline-variant/15">
        {/* Ambient glow behind CTA */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[40rem] h-[25rem] bg-gradient-to-r from-primary-container/20 via-secondary-container/20 to-tertiary-container/20 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center gap-6">
          {/* User Requested Symbol: Real Growth for Your Business */}
          <RealGrowthBadge onClick={() => onStartProject()} size="lg" />

          {/* Brand Crest Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high/80 text-tertiary text-xs font-semibold shadow-md border border-outline-variant/30">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span>Your Growth, Our Mission.</span>
          </div>

          <h2 className="font-headline-xl text-3xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight max-w-3xl leading-tight">
            Your Next Chapter of{' '}
            <span className="bg-gradient-to-r from-secondary-container via-primary-fixed to-tertiary bg-clip-text text-transparent">
              Digital Growth
            </span>{' '}
            Starts Here.
          </h2>

          <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Tell us about your goals, explore the possibilities, and let's discuss the right digital solutions for your business.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={() => onStartProject()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 glow-btn text-surface-container-lowest px-10 py-5 rounded-full font-bold text-xs uppercase tracking-wider shadow-[0_12px_40px_rgba(0,206,254,0.4)]"
            >
              <span>Start a Project Now</span>
              <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
            </button>
            <a
              href={`https://wa.me/${AGENCY_CONTACT.whatsappNumber}?text=Hello%20Next%20Growth%20BD,%20I%20am%20ready%20to%20start%20a%20project!`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-surface-container-high/70 hover:bg-surface-container-high text-tertiary px-10 py-5 rounded-full font-bold text-xs uppercase tracking-wider transition-all border border-tertiary/20"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Agency Location Badge */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-on-surface-variant">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[16px]">location_on</span>
              <span>{AGENCY_CONTACT.address}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-tertiary text-[16px]">mail</span>
              <span>{AGENCY_CONTACT.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[16px]">support_agent</span>
              <span>WhatsApp: {AGENCY_CONTACT.phone}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
