import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/agencyData';

interface PortfolioViewProps {
  onSelectItem: (item: PortfolioItem) => void;
  onInquire: (serviceName?: string) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onSelectItem, onInquire }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [search, setSearch] = useState('');

  const categories = [
    'All',
    'Paid Advertising',
    'Website Design',
    'Branding',
    'Social Media Creatives',
    'Graphic Design',
    'Video Production'
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                          item.description.toLowerCase().includes(search.toLowerCase()) ||
                          item.client.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen py-16 flex flex-col gap-16 bg-surface">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-tertiary text-xs font-semibold border border-outline-variant/30">
            <span className="material-symbols-outlined text-[16px]">visibility</span>
            <span>Proven Commercial Track Record</span>
          </div>
          <h1 className="font-headline-xl text-3xl sm:text-5xl font-extrabold text-on-surface">
            Case Studies & Creative Deployments
          </h1>
          <p className="text-body-md text-on-surface-variant max-w-xl">
            Explore authentic results generated across e-commerce brands, high-growth startups, and local enterprise operations.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-b border-outline-variant/15 pb-6">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary-container text-on-primary-container shadow-sm'
                    : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search case studies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-11 pl-10 pr-4 rounded-xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface placeholder:text-outline focus:outline-none focus:border-secondary transition-colors"
            />
            <span className="material-symbols-outlined text-outline text-[18px] absolute left-3 top-3">
              search
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-surface-container-low border border-outline-variant/20 hover:border-secondary/40 shadow-xl flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-64 overflow-hidden bg-surface-container-high">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={item.title}
                  src={item.image}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-secondary text-xs font-semibold border border-outline-variant/30">
                    {item.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-tertiary text-xs font-semibold border border-outline-variant/30">
                    {item.roas}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-secondary text-xs font-bold flex items-center gap-1 bg-surface-container-lowest/90 px-3 py-1.5 rounded-full">
                    <span>Inspect Strategy Breakdown</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                <div>
                  <div className="text-[11px] text-tertiary font-semibold uppercase tracking-wider">
                    {item.client} · {item.market} Market
                  </div>
                  <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-1 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/15 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-on-surface-variant block uppercase">Revenue Output</span>
                    <span className="font-bold text-tertiary">{item.revenueGenerated}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-on-surface-variant block uppercase">Time Horizon</span>
                    <span className="font-medium text-on-surface">{item.timeline}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 rounded-3xl bg-surface-container-low border border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface">Want to see private case studies in your specific niche?</h3>
            <p className="text-xs text-on-surface-variant mt-1">
              We have executed campaigns in apparel, beauty, real estate, B2B SaaS, healthcare, and FMCG.
            </p>
          </div>
          <button
            onClick={() => onInquire('Case Studies Request')}
            className="py-3.5 px-6 rounded-full glow-btn text-surface-container-lowest font-bold text-xs uppercase tracking-wider whitespace-nowrap shrink-0"
          >
            Request Niche Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};
