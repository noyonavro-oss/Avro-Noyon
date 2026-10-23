import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/agencyData';

interface PortfolioSectionProps {
  onSelectItem: (item: PortfolioItem) => void;
  onExploreFullPortfolio?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectItem,
  onExploreFullPortfolio
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Concepts');

  const categories = [
    'All Concepts',
    'Paid Advertising',
    'Website Design',
    'Branding',
    'Social Media Creatives',
    'Graphic Design',
    'Video Production'
  ];

  const filteredItems = selectedCategory === 'All Concepts'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section className="w-full py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-tertiary uppercase tracking-widest">
              Visual Portfolio
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mt-1">
              Where Creative Ideas Become <br className="hidden sm:inline" />
              <span className="text-tertiary">Digital Experiences.</span>
            </h2>
          </div>
          <p className="text-body-md text-on-surface-variant max-w-md">
            Explore concepts and campaign frameworks executed across various industry verticals with precision design and measurable outcomes.
          </p>
        </div>

        {/* Filter Tabs Container */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-primary-container text-on-primary-container shadow-sm'
                  : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-surface-container border border-outline-variant/20 hover:border-secondary/40 shadow-xl flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-64 overflow-hidden bg-surface-container-high">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={item.title}
                  src={item.image}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-secondary text-xs font-semibold border border-outline-variant/30">
                    {item.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-secondary text-surface-container-lowest text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <span>View Case Study</span>
                  <span className="material-symbols-outlined text-[14px]">visibility</span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-2 bg-surface-container flex-1 justify-between">
                <div>
                  <h4 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-secondary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/15 flex items-center justify-between text-xs">
                  <span className="text-tertiary font-bold">{item.roas} Return</span>
                  <span className="text-on-surface-variant">{item.market} Market</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Footer */}
        {onExploreFullPortfolio && (
          <div className="flex justify-center pt-4">
            <button
              onClick={onExploreFullPortfolio}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-semibold text-xs tracking-wider uppercase transition-all shadow-md border border-outline-variant/30"
            >
              <span>Explore Our Full Portfolio</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
