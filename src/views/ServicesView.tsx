import React, { useState } from 'react';
import { ServiceItem } from '../data/agencyData';
import { useAdmin } from '../context/AdminContext';

interface ServicesViewProps {
  onSelectService: (service: ServiceItem) => void;
  onInquire: (serviceId?: string) => void;
  currency: 'USD' | 'BDT';
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onSelectService,
  onInquire,
  currency
}) => {
  const { services, isAdminLoggedIn, setIsAdminModalOpen } = useAdmin();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'performance' | 'creative' | 'infrastructure'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.filter((s) => {
    const matchesCat = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen py-16 flex flex-col gap-16 bg-surface">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {isAdminLoggedIn && (
          <div className="mb-8 p-4 rounded-2xl bg-tertiary-container/20 border border-tertiary/30 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-tertiary">
              <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
              <span><strong>Admin Mode Active:</strong> You can add new services or remove any service.</span>
            </div>
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="px-4 py-1.5 rounded-full bg-tertiary text-surface-container-lowest text-xs font-bold hover:bg-tertiary/90 transition-colors"
            >
              Open Service Manager
            </button>
          </div>
        )}

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-secondary text-xs font-semibold border border-outline-variant/30">
            <span className="material-symbols-outlined text-[16px]">apps</span>
            <span>Comprehensive Agency Capabilities ({services.length})</span>
          </div>
          <h1 className="font-headline-xl text-3xl sm:text-5xl font-extrabold text-on-surface">
            {services.length} High-Impact Services Designed for Scalable Revenue
          </h1>
          <p className="text-body-md text-on-surface-variant max-w-xl">
            From algorithmic Meta and Google advertising to studio-quality AI multimedia and custom web engineering, we deliver end-to-end execution.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-b border-outline-variant/15 pb-6">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {[
              { id: 'all', label: `All Services (${services.length})` },
              { id: 'performance', label: 'Performance' },
              { id: 'creative', label: 'Creative & Media' },
              { id: 'infrastructure', label: 'Infrastructure & Tech' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-primary-container text-on-primary-container shadow-sm'
                    : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface placeholder:text-outline focus:outline-none focus:border-secondary transition-colors"
            />
            <span className="material-symbols-outlined text-outline text-[18px] absolute left-3 top-3">
              search
            </span>
          </div>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/20 hover:border-secondary/40 shadow-lg flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-outline-variant group-hover:text-secondary transition-colors">
                    {srv.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-high text-secondary flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                    <span className="material-symbols-outlined text-[24px]">{srv.icon}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-tertiary tracking-wider">
                    {srv.categoryLabel}
                  </span>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 group-hover:text-secondary transition-colors">
                    {srv.title}
                  </h3>
                </div>

                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {srv.description}
                </p>

                {/* Key Deliverables sample */}
                <div className="p-3.5 rounded-2xl bg-surface-container text-xs text-on-surface space-y-1.5 border border-outline-variant/15">
                  <div className="text-[11px] font-semibold text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">done_all</span>
                    <span>Includes:</span>
                  </div>
                  {srv.deliverables.slice(0, 2).map((deliv, idx) => (
                    <div key={idx} className="text-[11px] text-on-surface-variant truncate">
                      • {deliv}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-outline-variant/15 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-on-surface-variant uppercase">Starting from</span>
                  <div className="text-xs font-bold text-primary-fixed">
                    {currency === 'USD' ? srv.priceEstimateUSD : srv.priceEstimateBDT}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(srv)}
                    className="px-3.5 py-1.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-secondary text-xs font-semibold transition-colors"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onInquire(srv.id)}
                    className="px-3.5 py-1.5 rounded-xl bg-secondary-container text-on-secondary-container text-xs font-semibold hover:bg-tertiary hover:text-on-tertiary transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Package Tiers */}
        <div className="mt-20 pt-16 border-t border-outline-variant/15">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-tertiary uppercase tracking-widest">
              Strategic Engagement Models
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-4xl font-bold text-on-surface mt-1">
              Select Your Speed of Scaling
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-2">
              Transparent retainers tailored to where your business is right now and where you want to be in 90 days.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Starter Launch */}
            <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between gap-6 shadow-md">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Tier 01 · Launch
                </span>
                <h3 className="font-headline-md text-xl font-bold text-on-surface">Starter Scale</h3>
                <div className="text-3xl font-extrabold text-on-surface">
                  {currency === 'USD' ? '$650' : '৳60,000'}{' '}
                  <span className="text-xs font-normal text-on-surface-variant">/ month</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Ideal for local businesses and early-stage stores establishing their first profitable ad channels.
                </p>
                <ul className="space-y-2.5 text-xs text-on-surface pt-4 border-t border-outline-variant/15">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check</span>
                    <span>Facebook & Instagram Ad Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check</span>
                    <span>12 Custom Graphic Ad Creatives / mo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check</span>
                    <span>Google Business Profile Optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check</span>
                    <span>Direct WhatsApp Support Line</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onInquire('starter')}
                className="w-full py-3.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Choose Starter Plan
              </button>
            </div>

            {/* Momentum Growth - Featured */}
            <div className="p-8 rounded-3xl bg-surface-container border-2 border-secondary shadow-2xl flex flex-col justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-surface-container-lowest text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                Most Popular
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                  Tier 02 · Acceleration
                </span>
                <h3 className="font-headline-md text-xl font-bold text-on-surface">Momentum Growth</h3>
                <div className="text-3xl font-extrabold text-tertiary">
                  {currency === 'USD' ? '$1,450' : '৳1,35,000'}{' '}
                  <span className="text-xs font-normal text-on-surface-variant">/ month</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Engineered for aggressive revenue scaling, creative split testing, and cross-channel dominance.
                </p>
                <ul className="space-y-2.5 text-xs text-on-surface pt-4 border-t border-outline-variant/15">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check</span>
                    <span>Full Meta Advantage+ & Google Ads Scaling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check</span>
                    <span>4 AI Video Ads & Reels with Voiceovers / mo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check</span>
                    <span>24 Custom Ad Banners & Promotional Graphics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check</span>
                    <span>WhatsApp Lead Routing & CRM Automations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check</span>
                    <span>Bi-Weekly Strategic Executive Reviews</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onInquire('momentum')}
                className="w-full py-4 rounded-xl glow-btn text-surface-container-lowest font-bold text-xs tracking-wider uppercase shadow-lg"
              >
                Choose Momentum Growth
              </button>
            </div>

            {/* Enterprise Scale */}
            <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between gap-6 shadow-md">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Tier 03 · Enterprise
                </span>
                <h3 className="font-headline-md text-xl font-bold text-on-surface">Market Dominance</h3>
                <div className="text-3xl font-extrabold text-on-surface">
                  {currency === 'USD' ? '$2,850' : '৳2,65,000'}{' '}
                  <span className="text-xs font-normal text-on-surface-variant">/ month</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Full-spectrum agency takeover for enterprise, high-volume e-commerce, and multi-country brands.
                </p>
                <ul className="space-y-2.5 text-xs text-on-surface pt-4 border-t border-outline-variant/15">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check</span>
                    <span>Omni-Channel Ads (Meta, Google, YouTube, TikTok)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check</span>
                    <span>Unlimited Creative Ad Revisions & High-Velocity Tests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check</span>
                    <span>Dedicated Head of Growth & Senior Copywriter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">check</span>
                    <span>Custom E-Commerce CRO & Speed Engineering</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onInquire('enterprise')}
                className="w-full py-3.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Contact for Enterprise
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
