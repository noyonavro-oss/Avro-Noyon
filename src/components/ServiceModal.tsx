import React from 'react';
import { ServiceItem, AGENCY_CONTACT } from '../data/agencyData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceId: string) => void;
  currency: 'USD' | 'BDT';
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onInquire,
  currency
}) => {
  if (!service) return null;

  const priceText = currency === 'USD' ? service.priceEstimateUSD : service.priceEstimateBDT;

  const handleWhatsApp = () => {
    const text = `Hello Next Growth BD! I am inquiring about your service: *${service.title}* (${service.number}). Please share full details and package options.`;
    window.open(`https://wa.me/${AGENCY_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div 
        className="w-full max-w-2xl bg-surface-container-low rounded-3xl border border-outline-variant/30 shadow-2xl p-6 sm:p-8 flex flex-col gap-6 relative"
        role="dialog"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-outline-variant/20 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-surface-container-high text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">{service.icon}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-secondary">{service.number}</span>
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">{service.categoryLabel}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-0.5">{service.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-3">
          <p className="text-body-md text-on-surface leading-relaxed">{service.longDescription}</p>
        </div>

        {/* Deliverables */}
        <div className="bg-surface-container p-5 rounded-2xl border border-outline-variant/20 flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span>Standard Package Deliverables</span>
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-on-surface">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0">check_circle</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Metrics / Turnaround Strip */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 flex flex-col">
            <span className="text-[10px] text-on-surface-variant uppercase">Benchmark</span>
            <span className="text-xs sm:text-sm font-bold text-tertiary mt-1">{service.metrics}</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 flex flex-col">
            <span className="text-[10px] text-on-surface-variant uppercase">Turnaround</span>
            <span className="text-xs sm:text-sm font-bold text-secondary mt-1">{service.turnaround}</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 flex flex-col">
            <span className="text-[10px] text-on-surface-variant uppercase">Investment</span>
            <span className="text-xs sm:text-sm font-bold text-primary-fixed mt-1">{priceText}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onInquire(service.id);
            }}
            className="flex-1 py-3.5 px-6 rounded-full glow-btn text-surface-container-lowest font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
          >
            <span>Request Service Proposal</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
          <button
            onClick={handleWhatsApp}
            className="py-3.5 px-6 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-tertiary border border-tertiary/20 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
