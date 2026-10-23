import React from 'react';
import { PortfolioItem, AGENCY_CONTACT } from '../data/agencyData';

interface CaseStudyModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onInquire: (serviceName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  item,
  onClose,
  onInquire
}) => {
  if (!item) return null;

  const handleWhatsApp = () => {
    const text = `Hello Next Growth BD! I just reviewed the case study for "${item.title}". I want similar results for my business.`;
    window.open(`https://wa.me/${AGENCY_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-surface-container-lowest/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div 
        className="w-full max-w-3xl bg-surface-container-low rounded-3xl border border-outline-variant/30 shadow-2xl p-6 sm:p-8 flex flex-col gap-6 max-h-[90vh] overflow-y-auto"
        role="dialog"
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 border-b border-outline-variant/20 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-3 py-0.5 rounded-full bg-secondary-container/20 text-secondary text-xs font-semibold">
                {item.category}
              </span>
              <span className="text-xs text-on-surface-variant">Market: {item.market}</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">{item.title}</h3>
            <p className="text-xs text-on-surface-variant">Client: {item.client} · Duration: {item.timeline}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-surface-container">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-surface-container-lowest">
            <div className="bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-xl border border-outline-variant/30">
              <span className="text-[11px] text-on-surface-variant uppercase">Key Result</span>
              <div className="text-tertiary font-bold text-sm sm:text-base">{item.roas} Return on Ad Spend</div>
            </div>
            <div className="bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-xl border border-outline-variant/30">
              <span className="text-[11px] text-on-surface-variant uppercase">Total Scale</span>
              <div className="text-secondary font-bold text-sm sm:text-base">{item.revenueGenerated}</div>
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col gap-2">
            <h4 className="text-xs font-bold text-error uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">warning</span>
              <span>The Core Challenge</span>
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">{item.challenge}</p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/20 flex flex-col gap-2">
            <h4 className="text-xs font-bold text-tertiary uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">lightbulb</span>
              <span>Our Strategic Blueprint</span>
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">{item.solution}</p>
          </div>
        </div>

        {/* Bullet Results */}
        <div className="bg-surface-container p-5 rounded-2xl border border-outline-variant/20 flex flex-col gap-3">
          <h4 className="text-xs font-bold text-secondary uppercase tracking-wider">
            Quantified Business Impact
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-on-surface">
            {item.results.map((res, i) => (
              <li key={i} className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-start gap-2">
                <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0">check_circle</span>
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonial Quote */}
        <div className="p-5 rounded-2xl bg-surface-container-low border-l-4 border-tertiary flex flex-col gap-2">
          <p className="text-xs sm:text-sm italic text-on-surface leading-relaxed">
            "{item.testimonial.quote}"
          </p>
          <div className="flex items-center gap-2 pt-1 text-xs">
            <span className="font-semibold text-on-surface">{item.testimonial.author}</span>
            <span className="text-on-surface-variant">·</span>
            <span className="text-on-surface-variant">{item.testimonial.role}, {item.testimonial.company}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onInquire(item.title);
            }}
            className="flex-1 py-3.5 px-6 rounded-full glow-btn text-surface-container-lowest font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
          >
            <span>Replicate These Results</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
          <button
            onClick={handleWhatsApp}
            className="py-3.5 px-6 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-tertiary border border-tertiary/20 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Discuss on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
